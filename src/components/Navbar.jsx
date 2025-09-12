import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyles = ({ isActive }) =>
    `relative px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? 'text-white bg-white/20 backdrop-blur-sm'
        : 'text-white/80 hover:text-white hover:bg-white/10'
    }`;

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link 
              to="/portfolio" 
              className="text-2xl font-bold text-white hover:scale-105 transition-transform duration-300"
            >
              <span className="gradient-text bg-white bg-clip-text text-transparent">
                Rizwan.dev
              </span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              <NavLink to="/portfolio" className={navLinkStyles}>Home</NavLink>
              <NavLink to="/about" className={navLinkStyles}>About</NavLink>
              <NavLink to="/projects" className={navLinkStyles}>Projects</NavLink>
              <NavLink to="/resume" className={navLinkStyles}>Resume</NavLink>
              <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-dark mx-4 mt-4 rounded-xl p-4 space-y-2">
            <NavLink 
              to="/portfolio" 
              className={navLinkStyles}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={navLinkStyles}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={navLinkStyles}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/resume" 
              className={navLinkStyles}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </NavLink>
            <NavLink 
              to="/contact" 
              className={navLinkStyles}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;