import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function DevPathLanding() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Dev Path | Ary Budiarto';
  }, []);

  const handleStart = (path) => {
    if (!username) return alert('Please enter your name first.');
    localStorage.setItem('dev_username', username);
    navigate(`/dev-path/quest/${path}`);
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-black text-green-300 text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl sm:text-3xl font-pixel mb-4">Welcome to Dev Path Quest!</h1>
      <p className="text-sm mb-6">Enter your name to begin your journey.</p>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your Name"
        className="px-4 py-2 bg-transparent border border-green-400 text-green-100 text-sm font-pixel mb-4"
      />

      <div className="flex space-x-4">
        <button
          onClick={() => handleStart('frontend')}
          className="px-4 py-2 border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-black transition-all font-pixel"
        >
          Frontend
        </button>
        <button
          onClick={() => handleStart('backend')}
          className="px-4 py-2 border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black transition-all font-pixel"
        >
          Backend
        </button>
      </div>
    </motion.div>
  );
}
