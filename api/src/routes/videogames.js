require("dotenv").config();
const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Videogame, Genre } = require("../db.js");
const { Op } = require("sequelize");
const { API_KEY } = process.env;
const { aB, validator } = require("../js/modules");

router.get("/platforms", async (req, res) => {
  try {
    const result = (
      await axios.get(
        `https://api.rawg.io/api/platforms?key=3ec462367fd7474da4953aa0569ef4e4`
      )
    ).data.results;
    const platforms = result
      .map((p) => {
        return p.name;
      })
      .sort(aB);

    return res.send(platforms);
  } catch (err) {
    res.json({ msg: "Platforms not found" });
  }
});

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
      if (!all.length) return res.status(400).json(`${name}, not found`);

      res.send(all);
    } catch (error) {
      res.json({ msg: "Game/s not found" });
    }
  } else {
    try {
      // const result = (
      //   await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
      // ).data.results;

      // const apiGamesFormat = result.map((game) => {
      //   const obj = {
      //     id: game.id,
      //     name: game.name,
      //     image: game.background_image,
      //     genres: game.genres.map((g) => g.name).sort(aB),
      //   };
      //   return obj;
      // });

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

      const all = [...dbGamesFormat];
      res.json(all);
    } catch (error) {
      res.send({ msg: "Can not retrieve games from api" });
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
      res.send({ msg: "Id param not found" });
    }
  }
});

// CREATE GAME
router.post("/create", async (req, res) => {
  const { game } = req.body;

  //if(!validator(game)) res.json({msg: "Error en uno o mas datos"})

  try {
    const newGame = await Videogame.create(game);

    newGame.addGenres(game.genres);
    const aux = await Videogame.findByPk(newGame.id, {
      include: [{ model: Genre }],
    });
    res.send(aux);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
