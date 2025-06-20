import React from 'react';
import { motion } from 'framer-motion';

export default function LeaderboardCard({ rank, username, score, path }) {
  const pathColor = path === 'frontend' ? 'text-blue-400' : 'text-yellow-300';
  const borderColor = path === 'frontend' ? 'border-blue-400' : 'border-yellow-300';

  return (
    <motion.div
      className={`border ${borderColor} rounded-md p-3 w-full max-w-xl bg-black text-green-200 font-pixel shadow-md`}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, type: 'spring', bounce: 0.3 }}
    >
      <div className="flex items-center justify-between text-sm sm:text-base">
        <div className="flex items-center space-x-3">
          <span className="text-green-400">#{rank}</span>
          <span className="text-green-100">{username}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className={pathColor}>{path.toUpperCase()}</span>
          <span className="text-green-300 font-bold">{score} pts</span>
        </div>
      </div>
    </motion.div>
  );
}
