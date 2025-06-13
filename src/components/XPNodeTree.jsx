import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillTree = [
  {
    name: "Frontend",
    children: ["React.js", "Tailwind CSS", "Next.js"]
  },
  {
    name: "Backend",
    children: ["Node.js", "Express", "MongoDB"]
  },
  {
    name: "Tools",
    children: ["Git & GitHub", "VSCode", "Figma"]
  }
];

export default function XPNodeTree() {
  const [expanded, setExpanded] = useState({});

  const toggle = (node) => {
    setExpanded(prev => ({ ...prev, [node]: !prev[node] }));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 text-left font-pixel text-green-300">
      <h2 className="text-xl mb-4 text-center">🌳 XP Skill Tree</h2>
      {skillTree.map((branch) => (
        <div key={branch.name} className="mb-4">
          <button
            onClick={() => toggle(branch.name)}
            className="w-full text-left text-green-400 hover:text-green-200"
          >
            ▶ {branch.name}
          </button>
          <motion.div
            initial={false}
            animate={{ height: expanded[branch.name] ? 'auto' : 0, opacity: expanded[branch.name] ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden pl-4 mt-2"
          >
            {expanded[branch.name] &&
              branch.children.map((child) => (
                <div key={child} className="text-sm mb-1">• {child}</div>
              ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
