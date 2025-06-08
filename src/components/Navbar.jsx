import React, { useState } from "react";
import "../css/Navbar.css";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        KabJesca<span className="dot">.</span>
      </div>

      <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
        <a href="#hero" className="active" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={20} color="#fff" />
      </div>
    </header>
  );
};

export default Navbar;
