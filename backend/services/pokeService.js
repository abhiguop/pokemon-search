const axios = require('axios');
const cacheService = require('./cacheService');

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemonData = async (name) => {
    const cleanName = name.toLowerCase().trim();

    // Check Cache
    const cachedData = cacheService.get(cleanName);
    if (cachedData) {
        console.log(`[CACHE HIT] Serving ${cleanName} from cache`);
        return cachedData;
    }

    try {
        console.log(`[API FETCH] Fetching ${cleanName} from PokeAPI`);
        const response = await axios.get(`${POKEAPI_BASE_URL}/${cleanName}`);

        const data = response.data;

        // Transform data to send only necessary info
        const pokemonDetails = {
            name: data.name,
            id: data.id,
            height: data.height,
            weight: data.weight,
            types: data.types.map(t => t.type.name),
            sprites: {
                front_default: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
                animated: data.sprites.versions['generation-v']['black-white'].animated?.front_default
            },
            stats: data.stats.map(s => ({
                name: s.stat.name,
                value: s.base_stat
            }))
        };

        // Store in Cache
        cacheService.set(cleanName, pokemonDetails);

        return pokemonDetails;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return null; // Not found
        }
        throw error;
    }
};

module.exports = { getPokemonData };
