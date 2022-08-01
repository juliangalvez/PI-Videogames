require('dotenv').config();
const { Router } = require('express');
const axios = require('axios');
const { Videogame, Genre } = require('../db.js');
const { API_KEY } = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Metodo para el SORT - Modularizar esto:
function aB(a, b) {
    if (a.toLowerCase()> b.toLowerCase()) return 1;
     else if (a.toLowerCase() < b.toLowerCase()) return -1;
      else return 0;
    }
// VALIDATOR 3000 PRO XD
function validator(game) {
    let v = false;
    if (!typeof game === 'object') return false;
    
    v = game.name && typeof game.name === 'string'? true : false; 
    v = game.desciption && typeof game.desciption === 'string'? true : false;
    game.release? ( 
        v = typeof game.release === 'string'? true : false 
        ) : null;
    v = game.platform.length > 0 ? true : false;
    v = game.image && typeof game.image === 'string'? true : false;
    v = game.genres.length > 0 ? true : false;
    return v;
}

// LANDING PAGE
router.get("/", (req, res) => {
    res.send("Landing");
});

// HOME
router.get("/videogames", async (req, res) => {
    
    try {
            // Llamado a la api
        const result = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results;
        
        const formatear = result.map(game => {
            const obj = {
                name: game.name,
                image: game.background_image,
                genres: game.genres.map(g => {
                    return g.name
                }).sort(aB)
            };
            return obj;
        });

        const db = await Videogame.findAll({include: [{model: Genre}]})

        const all = [...db, ...formatear];
        res.json(all);
    
    } catch (error) {
        console.log(error);
    }

    
    // Llamado async a la BD
    // Validar datos
    // Combinar resultados
    // Enviar resultados

});

// DETAIL
router.get("/videogames/:id", (req, res) => {
    res.send("Obtener detalle por id");

    // Capturar id por params
    // Verificar tipo ID
    // findByPk
    // return result
});

// CREATE GAME
router.post("/create", (res, req) => {
    console.log("Recibe datos del form y crea un registro rel. generos");

    const { game } = req.body;

    // Validador de datos
    validator(game);
    
    // recibir y validar
    // guardar en la BD el objeto
    // agregar los generos del juego con relac.
    // responder OK
    // llamado async a BD o api
    // respodemos con result
});

router.get("/genres", (res, req) => {
    res.send("Cargar base con datos de rawg");
})

module.exports = router;
