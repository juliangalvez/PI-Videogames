require("dotenv").config();
const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Videogame, Genre } = require("../db.js");
const { Op } = require("sequelize");
const { API_KEY } = process.env;
const { aB, validator } = require("../js/modules");


// HOME
router.get("/", async (req, res) => {
  if (req.query.name) {
    const { name } = req.query;
    try {
      const result = (
        await axios.get(
          `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
        )
      ).data.results;

      
      const searchApi = result.map((game) => {
        const obj = {
          id: game.id,
          name: game.name,
          image: game.background_image,
          rating: game.rating,
          genres: game.genres.map((g) => g.name).sort(aB),
        };
        return obj;
      });

      const dbGames = await Videogame.findAll({
        where: {
          name: {
            [Op.iLike]: name + "%",
          },
        },
        include: [{ model: Genre }],
      });

      const searchDb = JSON.parse(JSON.stringify(dbGames)).map((e) => {
        return {
          id: e.id,
          name: e.name,
          description: e.description,
          released: e.released,
          rating: e.rating,
          platforms: e.platforms,
          image: e.image,
          genres: e.genres.map((g) => g.name).sort(aB),
        };
      });

      const all = [...searchDb, ...searchApi];
      all.splice(15);
      if (!all.length) return res.status(400).send(`${name}, not found`);

      res.send(all);
    } catch (error) {
      res.status(400).send(`${name}, not found`);
    }
  } else {
    // 
    try {
                        // 1RS PAGE GET
      const result = (
        await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
      ).data.results;

      const apiGamesFormat = result.map((game) => {
        const obj = {
          id: game.id,
          name: game.name,
          image: game.background_image,
          rating: game.rating,
          genres: game.genres.map((g) => g.name).sort(aB),
        };
        return obj;
      });
                        //  1RS PAGE GET -- END
                        
      const dbGames = await Videogame.findAll({ include: [{ model: Genre }] });

      const dbGamesFormat = JSON.parse(JSON.stringify(dbGames)).map((e) => {
        return {
          id: e.id,
          name: e.name,
          description: e.description,
          released: e.released,
          rating: e.rating,
          platforms: e.platforms,
          image: e.image,
          genres: e.genres.map((g) => g.name).sort(aB),
        };
      });
       const all = [...dbGamesFormat, ...apiGamesFormat];
      //const all = [...dbGamesFormat];
      res.status(200).json(all);
    } catch (error) {
      console.log(error)
      res.status(400).send("Can't retrieve games from api");
    }
  }
});

// DETAILS
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (id.length > 6) {
    try {
      const gameId = await Videogame.findByPk(id, {
        include: [{ model: Genre }],
      });

      const objJs = JSON.parse(JSON.stringify(gameId));

      const gameIdFormat = {
        id: objJs.id,
        name: objJs.name,
        description: objJs.description,
        released: objJs.released,
        rating: objJs.rating,
        platforms: objJs.platforms,
        image: objJs.image,
        genres: objJs.genres.map((g) => g.name).sort(aB),
      };

      res.send(gameIdFormat);
    } catch (error) {
      res.send({ msg: "UUID param not found" });
    }
  } else {
    try {
      const gameId = (
        await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
      ).data;

      const obj = {
        name: gameId.name,
        image: gameId.background_image,
        genres: gameId.genres.map((g) => g.name).sort(aB),
        description: gameId.description,
        released: gameId.released,
        rating: gameId.rating,
        platforms: gameId.platforms.map((p) => p.platform.name).sort(aB),
      };

      return res.send(obj);
    } catch (error) {
      res.status(400).send("Game not found");
    }
  }
});

// CREATE GAME
router.post("/create", async (req, res) => {
  const { game } = req.body;

  if (!game.image.length)
    game.image =
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/12c8ce61832289.5a7b437f7c6c2.png";

  if (validator(game)) {
    try {
      const newGame = await Videogame.create(game);

      newGame.addGenres(game.genres);
      const findGame = await Videogame.findByPk(newGame.id, {
        include: [{ model: Genre }],
      });
      res.send(findGame);
    } catch (error) {
      res.send("Can't create, got error/s in form!");
    }
  } else return res.send("Can't create, got error/s in form!");
});

module.exports = router;
