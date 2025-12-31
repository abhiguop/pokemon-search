import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/PokemonCard';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchPokemon = async (name) => {
        setLoading(true);
        setError('');
        setPokemon(null);

        try {
            const response = await axios.get(`http://localhost:5000/api/pokemon/${name}`);
            setPokemon(response.data);
        } catch (err) {
            if (err.response && err.response.status === 404) {
                setError("Pokemon not found. Are you sure you spelled it right?");
            } else {
                setError("Something went wrong. Please try again later.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen py-8 px-4 flex flex-col items-center justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-6 shrink-0"
            >
                <h1 className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-poke-red to-orange-500">
                    Pokedex
                </h1>
                <p className="text-gray-400">Search for any Pokemon by name</p>
            </motion.div>

            <SearchBar onSearch={fetchPokemon} />

            <div className="w-full max-w-lg mt-8 min-h-[400px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {loading && (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-poke-red text-xl font-bold animate-pulse"
                        >
                            Searching...
                        </motion.div>
                    )}

                    {error && (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center p-6 bg-red-500/10 border border-red-500/50 rounded-xl text-red-200"
                        >
                            <p>{error}</p>
                        </motion.div>
                    )}

                    {pokemon && !loading && (
                        <PokemonCard key={pokemon.name} pokemon={pokemon} />
                    )}

                    {!pokemon && !loading && !error && (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-gray-600 text-sm"
                        >
                            Start by typing a Pokemon name above.
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default App;
