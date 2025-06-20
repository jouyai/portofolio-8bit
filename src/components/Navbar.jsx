import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Quest", path: "/dev-path" },
    { label: "Leaderboard", path: "/leaderboard" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-black border-b border-green-400 text-green-400 px-6 py-3 flex justify-between items-center font-retro text-sm shadow-lg z-50 fixed top-0 left-0 right-0">
      {/* Logo */}
      <div className="text-lg tracking-wide">
        &lt;AryDev <span className="text-lime-500">/&gt;</span>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button className="sm:hidden z-50" onClick={toggleMenu}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Menu Desktop */}
      <div className="hidden sm:flex space-x-6">
        {navItems.map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className={`hover:text-green-300 ${
              location.pathname === path ? "text-white font-bold underline" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-green-400 flex flex-col items-center py-4 sm:hidden">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={toggleMenu}
              className="py-2 hover:text-green-300"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
