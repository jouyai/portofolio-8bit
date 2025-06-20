// src/pages/Leaderboard.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';
import { motion } from 'framer-motion';

export default function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    document.title = 'Leaderboard | Ary Budiarto';
    const fetchScores = async () => {
      const q = query(collection(db, 'leaderboard'), orderBy('score', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => doc.data());
      setScores(data);
    };
    fetchScores();
  }, []);

  const frontend = scores.filter(s => s.path === 'frontend');
  const backend = scores.filter(s => s.path === 'backend');

  const renderList = (data, color) =>
    data.map((s, i) => (
      <motion.div
        key={i}
        className="border border-green-300 px-4 py-2 text-sm mb-2 bg-green-900/30 font-pixel"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        {i + 1}. <span className={`text-${color}-300`}>{s.username}</span> – {s.score} XP
      </motion.div>
    ));

  return (
    <motion.div
      className="min-h-screen bg-black text-green-300 px-6 pt-24 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-pixel text-center mb-8">🏆 Leaderboard</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg text-blue-300 font-pixel mb-4">Frontend Path</h2>
          {renderList(frontend, 'blue')}
        </div>
        <div>
          <h2 className="text-lg text-yellow-300 font-pixel mb-4">Backend Path</h2>
          {renderList(backend, 'yellow')}
        </div>
      </div>
    </motion.div>
  );
}
