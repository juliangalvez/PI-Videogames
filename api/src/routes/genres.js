require('dotenv').config();
const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Videogame, Genre } = require('../db.js');
const { API_KEY } = process.env;



router.get('/', async (req, res) => {
    try {
        // Traigo generos de la Base de datos
        const dbGenres = await Genre.findAll();
        if (dbGenres.length) return res.json(dbGenres);
        // Sino los traigo de rawg
        const result = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results
        const genres = result.map(g => {
            const obj = {
                name: g.name
            };
            return obj;
        });

        await Genre.bulkCreate(genres)
        res.json({msg: "Done"});

    } catch (err) {
        res.json({msg: "Genres not found"})
    }
})

module.exports = router;