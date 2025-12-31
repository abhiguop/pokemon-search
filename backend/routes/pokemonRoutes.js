const express = require('express');
const { getPokemon } = require('../controllers/pokemonController');

const router = express.Router();

router.get('/pokemon/:name', getPokemon);

module.exports = router;
