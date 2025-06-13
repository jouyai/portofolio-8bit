import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-black border-b border-green-400 text-green-400 px-6 py-3 flex justify-between items-center font-retro text-sm shadow-lg z-50 fixed top-0 left-0 right-0">
      <div className="text-lg tracking-wide">&lt;AryDev /&gt;</div>

      {/* Mobile button */}
      <button className="sm:hidden z-50" onClick={toggleMenu}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Desktop menu */}
      <div className="hidden sm:flex space-x-6">
        <Link to="/" className="hover:underline hover:text-green-300">
          Home
        </Link>
        <Link to="/about" className="hover:underline hover:text-green-300">
          About
        </Link>
        <Link to="/projects" className="hover:underline hover:text-green-300">
          Projects
        </Link>
        <Link to="/contact" className="hover:underline hover:text-green-300">
          Contact
        </Link>
        <Link to="/xp-quest" className="hover:underline hover:text-green-300">
          XP Quest
        </Link>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-green-400 flex flex-col items-center py-4 sm:hidden">
          <Link to="/" className="py-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="py-2" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/projects" className="py-2" onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="/contact" className="py-2" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/xp-quest" className="py-2" onClick={toggleMenu}>
            XP Quest
          </Link>
        </div>
      )}
    </nav>
  );
}
