import { motion } from 'framer-motion';
import StatsBar from './StatsBar';

const typeColors = {
    normal: 'bg-gray-500',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-500',
    grass: 'bg-green-500',
    ice: 'bg-cyan-500',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-700',
    flying: 'bg-indigo-400',
    psychic: 'bg-pink-500',
    bug: 'bg-lime-500',
    rock: 'bg-yellow-800',
    ghost: 'bg-purple-800',
    dragon: 'bg-indigo-700',
    steel: 'bg-gray-400',
    fairy: 'bg-pink-300',
};

const PokemonCard = ({ pokemon }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 max-w-sm mx-auto shadow-2xl relative overflow-hidden max-h-[70vh] overflow-y-auto custom-scrollbar"
        >
            {/* Background Decorative Element */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-poke-red/20 rounded-full blur-3xl rounded-full" />

            <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-3xl font-bold capitalize mb-2">{pokemon.name}</h2>
                <span className="text-gray-400 text-sm mb-6">#{String(pokemon.id).padStart(3, '0')}</span>

                <div className="relative w-48 h-48 mb-6">
                    <motion.img
                        src={pokemon.sprites.animated || pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="w-full h-full object-contain drop-shadow-2xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    />
                </div>

                <div className="flex gap-2 mb-6">
                    {pokemon.types.map(type => (
                        <span key={type} className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white shadow-md ${typeColors[type] || 'bg-gray-500'}`}>
                            {type}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4 w-full mb-6 text-center">
                    <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <p className="text-xs text-gray-400 uppercase">Height</p>
                        <p className="font-semibold">{pokemon.height / 10} m</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <p className="text-xs text-gray-400 uppercase">Weight</p>
                        <p className="font-semibold">{pokemon.weight / 10} kg</p>
                    </div>
                </div>

                <div className="w-full space-y-2">
                    <h3 className="text-sm font-bold uppercase text-gray-400 mb-2">Base Stats</h3>
                    {pokemon.stats.map(stat => (
                        <StatsBar key={stat.name} label={stat.name} value={stat.value} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default PokemonCard;
