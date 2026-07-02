import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun, Terminal } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <Terminal size={28} className="logo-icon" />
          <span className="text-gradient">Tes Bonnathyrak</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li className="nav-item"><a href="#about" className="nav-links">About</a></li>
          <li className="nav-item"><a href="#skills" className="nav-links">Skills</a></li>
          <li className="nav-item"><a href="#projects" className="nav-links">Projects</a></li>
          <li className="nav-item"><a href="#contact" className="nav-links">Contact</a></li>
          <li className="nav-item">
            <Link to="/admin" className="nav-links admin-link">Admin</Link>
          </li>
          <li className="nav-item">
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-menu-mobile ${isOpen ? 'active glass' : ''}`}>
        <a href="#about" className="nav-links-mobile" onClick={() => setIsOpen(false)}>About</a>
        <a href="#skills" className="nav-links-mobile" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#projects" className="nav-links-mobile" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" className="nav-links-mobile" onClick={() => setIsOpen(false)}>Contact</a>
        <Link to="/admin" className="nav-links-mobile" onClick={() => setIsOpen(false)}>Admin</Link>
        <button className="theme-toggle-mobile" onClick={toggleTheme}>
          {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
