require("dotenv").config();
const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Videogame, Genre } = require("../db.js");
const {Op} = require("sequelize");
const { API_KEY } = process.env;

// Metodo para el SORT - Modularizar esto:
function aB(a, b) {
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  else if (a.toLowerCase() < b.toLowerCase()) return -1;
  else return 0;
}
// VALIDATOR 3000 PRO XD
function validator(game) {
  let v = false;
  if (!typeof game === "object") return false;
  if (game.name && typeof game.name === "string") v = true;
  else return false;
  if (game.description && typeof game.description === "string") v = true;
  else return false;
  //if (game.platforms.length > 0) v = true; else return false
  if (game.image && typeof game.image === "string") v = true;
  else return false;
  //if (game.genres.length > 0) v = true; else return false
  return v;
}

//LANDING PAGE
// router.get("/", (req, res) => {
//     res.send("Landing");
// });


// HOME
router.get("/", async (req, res) => {

    if (req.query.name) {
        const { name } = req.query;
        try {
            const result = (await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)).data.results;

            const searchApi = result.map((game) => {
                const obj = {
                  name: game.name,
                  image: game.background_image,
                  genres: game.genres.map(g => g.name ).sort(aB),
                };
                return obj;
              });
              const dbGames = await Videogame.findAll({
                where:{
                    name: {
                        [Op.iLike]: name + '%'
                    }
              }, include: [{ model: Genre }] });
              
              const SearchDb = JSON.parse(JSON.stringify(dbGames)).map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    released: e.released,
                    rating: e.rating,
                    platforms: e.platforms,
                    image: e.image,
                    genres: e.genres.map(g => g.name).sort(aB)
                }           
              })
            
              res.send([...SearchDb, ...searchApi]);
            

        } catch (error) {
            res.json({msg: "Game/s not found"})
        }
    } else {
        try {
    
            const result = (
              await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
            ).data.results;
        
            const formatear = result.map(game => {
              const obj = {
                name: game.name,
                image: game.background_image,
                genres: game.genres
                  .map(g => {
                    return g.name;
                  })
                  .sort(aB),
              };
              return obj;
            });
        
            const dbGames = await Videogame.findAll({ include: [{ model: Genre }] });
        
            const all = [...dbGames, ...formatear];
            res.json(all);
          } catch (error) {
            res.send({msg: "Can not retrieve games from api"})
          }
    }
  
    
});

// DETAILS
router.get("/:id", async (req, res) => {
    const {id} = req.params;
    
    if(id.length > 6) {
        try {
            const gameId = await Videogame.findByPk(id, { include: [{ model: Genre }] });
            res.send(gameId);
        } catch (error) {
            res.send({msg: "Id not found"})
        }
    } else {
        try {
            const gameId = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;
        
            const obj = {
              name: gameId.name,
              image: gameId.background_image,
              genres: gameId.genres
                .map(g => {
                  return g.name;
                }).sort(aB),
              description: gameId.description,
              released: gameId.released,
              rating: gameId.rating,
              platforms: gameId.platforms
                .map(p => {
                  return p.platform.name;
                }).sort(aB)
            };
            res.send(obj);    
        } catch (error) {
            res.send({msg: "Id not found"})
        }
    }
});

// CREATE GAME
router.post("/create", async (req, res) => {
  const { game } = req.body;
  //console.log(validator(game))
  //if(!validator(game)) res.json({msg: "Error en uno o mas datos"})

  try {
    const newGame = await Videogame.create(game);

    newGame.addGenres(game.genres);
    const aux = await Videogame.findByPk(newGame.id, {
        include: [{ model: Genre }]
    });
    res.send(aux);

  } catch (error) {
    throw new Error("Error");
  }
  // Validador de datos
  //res.send('POSTED')

  // recibir y validar
  // guardar en la BD el objeto
  // agregar los generos del juego con relac.
  // responder OK
  // llamado async a BD o api
  // respodemos con result
});


module.exports = router;
