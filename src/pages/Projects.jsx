import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal website with 8-bit animation and dark retro theme using React and Tailwind CSS.',
    link: '#'
  },
  {
    title: 'RESTful API with Node.js',
    description: 'Backend API for managing blog posts and users built with Express and MongoDB.',
    link: '#'
  },
  {
    title: 'Realtime Chat App',
    description: 'A full-stack chat app using React, Socket.io, and Node.js.',
    link: '#'
  }
];

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects | Ary Budiarto';
  }, []);

  return (
    <motion.div
      className="min-h-screen px-4 py-16 bg-black text-green-300 font-pixel"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <h1 className="text-3xl sm:text-4xl mb-6 text-center">Projects</h1>
      <div className="grid gap-6 max-w-4xl mx-auto sm:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="border border-green-300 p-4 hover:bg-green-300 hover:text-black transition-all">
            <h2 className="text-lg mb-2">{project.title}</h2>
            <p className="text-sm mb-4">{project.description}</p>
            <a href={project.link} className="text-xs underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
