import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import XPBar from '../components/XPBar';

export default function About() {
  useEffect(() => {
    document.title = 'About | Ary Budiarto';
  }, []);

  return (
    <motion.div
      className="min-h-screen px-4 py-16 bg-black text-green-300 font-pixel"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl sm:text-4xl mb-6 text-center">About Me</h1>
      <p className="text-sm sm:text-base mb-10 max-w-xl mx-auto text-center">
        I’m Ary, a passionate software developer who builds clean and scalable systems with a touch of 8-bit nostalgia.
      </p>

      <div className="mt-10 max-w-md mx-auto">
        <h2 className="text-lg text-green-300 font-pixel mb-4">Tech Stack (XP Level)</h2>
        <XPBar skill="React.js" level={90} />
        <XPBar skill="Node.js" level={85} />
        <XPBar skill="Express" level={80} />
        <XPBar skill="MongoDB" level={75} />
        <XPBar skill="Tailwind CSS" level={88} />
        <XPBar skill="Git & GitHub" level={95} />
        <XPBar skill="Python" level={70} />
      </div>
    </motion.div>
  );
}
