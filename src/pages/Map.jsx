import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroSprite from '../assets/run.gif';
import mapBackground from '../assets/map_background.png';

export default function Map() {
  useEffect(() => {
    document.title = 'World Map | Ary Budiarto';
  }, []);

  return (
    <motion.div
      className="relative w-full h-screen bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Background peta */}
      <img
        src={mapBackground}
        alt="Pixel RPG Map"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      {/* Sprite karakter */}
      <img
        src={heroSprite}
        alt="Ary Sprite"
        className="w-12 h-12 absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 animate-walk"
      />

      {/* Navigasi Lokasi (Hotspot) */}
      <div className="absolute inset-0 z-20 text-green-300 font-pixel text-xs">
        <Link to="/" className="absolute top-[25%] left-[15%] px-2 py-1 border border-green-300 hover:bg-green-300 hover:text-black">🏠 Home</Link>
        <Link to="/about" className="absolute top-[35%] left-[60%] px-2 py-1 border border-green-300 hover:bg-green-300 hover:text-black">📖 About</Link>
        <Link to="/projects" className="absolute top-[55%] left-[25%] px-2 py-1 border border-green-300 hover:bg-green-300 hover:text-black">🏰 Projects</Link>
        <Link to="/bug-blaster" className="absolute top-[65%] left-[65%] px-2 py-1 border border-green-300 hover:bg-green-300 hover:text-black">🕹️ Game</Link>
        <Link to="/contact" className="absolute top-[80%] left-[40%] px-2 py-1 border border-green-300 hover:bg-green-300 hover:text-black">✉️ Contact</Link>
      </div>
    </motion.div>
  );
}
