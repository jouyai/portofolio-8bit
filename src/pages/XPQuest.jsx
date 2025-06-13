import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    clue: "A JavaScript library for building user interfaces, created by Facebook.",
    answer: "React.js"
  },
  {
    clue: "Runtime built on Chrome's V8 JavaScript engine, often used in backend.",
    answer: "Node.js"
  },
  {
    clue: "A CSS framework that uses utility-first classes.",
    answer: "Tailwind CSS"
  },
  {
    clue: "Version control platform that hosts repositories and uses Git.",
    answer: "GitHub"
  },
  {
    clue: "A document-oriented NoSQL database.",
    answer: "MongoDB"
  }
];

export default function XPQuest() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    document.title = 'XP Quest | Ary Budiarto';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const current = questions[index];
    if (input.trim().toLowerCase() === current.answer.toLowerCase()) {
      setScore(score + 10);
      setMessage('Correct! +10 XP');
    } else {
      setMessage('Oops! Try again.');
    }

    setTimeout(() => {
      setInput('');
      setMessage('');
      if (index + 1 < questions.length) {
        setIndex(index + 1);
      } else {
        setFinished(true);
      }
    }, 1500);
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-green-300 font-pixel px-4 py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-3xl sm:text-4xl mb-6">🎮 XP Quest</h1>
      {finished ? (
        <div>
          <p className="text-lg mb-4">Quest Completed!</p>
          <p className="text-xl text-green-400">Total XP: {score}</p>
        </div>
      ) : (
        <>
          <p className="mb-6 max-w-xl mx-auto text-sm">{questions[index].clue}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="px-3 py-2 border border-green-300 bg-transparent text-green-100 text-sm w-64 placeholder-green-400"
              placeholder="Type your answer..."
              required
            />
            <br />
            <button
              type="submit"
              className="border border-green-300 px-4 py-2 text-sm hover:bg-green-300 hover:text-black transition-all"
            >
              Submit
            </button>
          </form>
          {message && <p className="mt-4 text-sm">{message}</p>}
          <p className="mt-8 text-xs text-green-500">Question {index + 1} of {questions.length}</p>
        </>
      )}
    </motion.div>
  );
}
