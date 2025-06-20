import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionCard({
  question,
  options,
  selectedAnswer,
  onSelect,
  currentIndex,
  total
}) {
  return (
    <motion.div
      className="bg-black border-2 border-green-400 p-5 rounded-md w-full max-w-xl text-green-300 font-pixel shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-4 text-sm sm:text-base">
        <span className="text-green-400">Question {currentIndex + 1}</span> / {total}
      </div>
      <h2 className="text-base sm:text-lg mb-4">{question}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((opt, idx) => (
          <motion.button
            key={idx}
            onClick={() => onSelect(opt)}
            whileTap={{ scale: 0.95 }}
            className={`py-2 px-3 border-2 transition-all duration-200 ${
              selectedAnswer === opt
                ? 'bg-green-300 text-black border-green-300'
                : 'border-green-400 hover:bg-green-300 hover:text-black'
            }`}
          >
            {opt}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
