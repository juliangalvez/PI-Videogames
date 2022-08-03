require('dotenv').config();
const { Router } = require('express');
const router = Router();


// Importo routers;
//const videogames = require('./videogames');
const videogames = require('./videogames')
const genres = require('./genres');

router.get("/", (req, res) => {
    res.send("Landing");
});

// Configuro routers
router.use('/videogames', videogames);
router.use('/genres', genres);

module.exports = router;