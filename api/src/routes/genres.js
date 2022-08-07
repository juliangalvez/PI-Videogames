require("dotenv").config();
const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Videogame, Genre } = require("../db.js");
const { API_KEY } = process.env;
const { aB } = require("../js/modules");

router.get("/", async (req, res) => {
  try {
    const dbGenres = await Genre.findAll();
    if (dbGenres.length) {
      let objJs = JSON.parse(JSON.stringify(dbGenres));

      let formatDbGenres = objJs.map((g) => {
        return g.name;
      });

      return res.json(formatDbGenres);
    }
    const result = (
      await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    ).data.results;
    const genres = result
      .map((g) => {
        return g.name;
      })
      .sort(aB)
      .map((g) => {
        const obj = {
          name: g,
        };
        return obj;
      });

    let formatGenres = genres.map((g) => {
      return g.name;
    });
    console.log(formatGenres);
    await Genre.bulkCreate(genres);
    res.send(formatGenres);
  } catch (err) {
    res.json({ msg: "Genres not found" });
  }
});

module.exports = router;
