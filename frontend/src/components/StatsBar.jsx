import { motion } from 'framer-motion';

const StatsBar = ({ label, value, max = 255 }) => {
    const percentage = Math.min((value / max) * 100, 100);

    return (
        <div className="mb-2">
            <div className="flex justify-between text-xs mb-1 uppercase tracking-wider text-gray-300">
                <span>{label}</span>
                <span>{value}</span>
            </div>
            <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-poke-red to-orange-500 rounded-full"
                />
            </div>
        </div>
    );
};

export default StatsBar;
