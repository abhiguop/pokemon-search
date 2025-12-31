import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="relative w-full max-w-md mx-auto mb-4"
        >
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Pokemon (e.g. Pikachu)..."
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-poke-red focus:bg-white/20 transition-all shadow-lg"
            />
            <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-poke-red rounded-full text-white hover:bg-red-600 transition-colors shadow-lg"
            >
                <FaSearch />
            </button>
        </motion.form>
    );
};

export default SearchBar;
