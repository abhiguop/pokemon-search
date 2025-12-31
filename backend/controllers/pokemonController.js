const pokeService = require('../services/pokeService');

const getPokemon = async (req, res, next) => {
    try {
        const { name } = req.params;
        if (!name) {
            return res.status(400).json({ error: 'Pokemon name is required' });
        }

        const data = await pokeService.getPokemonData(name);

        if (!data) {
            return res.status(404).json({ error: 'Pokemon not found' });
        }

        res.json(data);
    } catch (error) {
        next(error);
    }
};

module.exports = { getPokemon };
