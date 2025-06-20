import { motion } from "framer-motion";
import spriteDev from "../assets/sprite_dev.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isTalking, setIsTalking] = useState(false);
  const [dialog, setDialog] = useState("");

  useEffect(() => {
    document.title = "Home | Ary Budiarto";
  }, []);

  const phrases = [
    "Initializing sequence...",
    "React.js XP boosted!",
    "Deploying to production...",
    "Coffee detected ☕",
    "Building dreams in 8-bit."
  ];

  const handleClick = () => {
    const random = phrases[Math.floor(Math.random() * phrases.length)];
    setDialog(random);
    setIsTalking(true);
    setTimeout(() => setIsTalking(false), 2500);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-black relative">
      <motion.img
        onClick={handleClick}
        src={spriteDev}
        alt="8-bit Ary"
        className="w-32 mb-6 drop-shadow-[0_0_8px_#00FF00] cursor-pointer"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {isTalking && (
        <div className="absolute bottom-24 bg-green-900 border border-green-400 text-green-100 px-3 py-2 text-xs font-pixel animate-pulse">
          {dialog}
        </div>
      )}

      <motion.h1
        className="text-xl sm:text-2xl mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="glitch" data-text="Ary Budiarto">
          Ary Budiarto
        </span>
        <br />
        <span className="text-green-300 text-sm">Software Developer</span>
      </motion.h1>

      <motion.p
        className="max-w-md text-xs sm:text-sm text-green-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Building powerful software in pixel precision. Turning coffee and bytes into clean, scalable systems.
      </motion.p>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Link
          to="/projects"
          className="px-4 py-2 border border-green-300 text-green-300 hover:bg-green-300 hover:text-black font-pixel transition-all duration-300 inline-block"
        >
          View My Projects →
        </Link>
      </motion.div>

    </div>
  );
}
