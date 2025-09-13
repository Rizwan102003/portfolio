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
    `relative px-4 py-2 rounded-lg transition-all duration-300 mono-font ${
      isActive
        ? 'text-cyan-400 bg-blue-500/20 backdrop-blur-sm neon-cyan'
        : 'text-blue-200 hover:text-cyan-400 hover:bg-blue-500/10'
    }`;

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark py-2' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link 
              to="/portfolio" 
              className="text-2xl font-bold hover:scale-105 transition-transform duration-300 tech-font"
            >
              <span className="gradient-text">
                &lt;Rizwan.dev/&gt;
              </span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              <NavLink to="/portfolio" className={navLinkStyles}>
                <span className="text-cyan-400">[</span>Home<span className="text-cyan-400">]</span>
              </NavLink>
              <NavLink to="/about" className={navLinkStyles}>
                <span className="text-cyan-400">[</span>About<span className="text-cyan-400">]</span>
              </NavLink>
              <NavLink to="/projects" className={navLinkStyles}>
                <span className="text-cyan-400">[</span>Projects<span className="text-cyan-400">]</span>
              </NavLink>
              <NavLink to="/resume" className={navLinkStyles}>
                <span className="text-cyan-400">[</span>Resume<span className="text-cyan-400">]</span>
              </NavLink>
              <NavLink to="/contact" className={navLinkStyles}>
                <span className="text-cyan-400">[</span>Contact<span className="text-cyan-400">]</span>
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-blue-200 p-2 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
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
          <div className="glass-blue mx-4 mt-4 rounded-xl p-4 space-y-2 border border-blue-500/30">
            <NavLink 
              to="/portfolio" 
              className={navLinkStyles}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-cyan-400">[</span>Home<span className="text-cyan-400">]</span>
            </NavLink>
            <NavLink 
              to="/about" 
              className={navLinkStyles}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-cyan-400">[</span>About<span className="text-cyan-400">]</span>
            </NavLink>
            <NavLink 
              to="/projects" 
              className={navLinkStyles}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-cyan-400">[</span>Projects<span className="text-cyan-400">]</span>
            </NavLink>
            <NavLink 
              to="/resume" 
              className={navLinkStyles}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-cyan-400">[</span>Resume<span className="text-cyan-400">]</span>
            </NavLink>
            <NavLink 
              to="/contact" 
              className={navLinkStyles}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-cyan-400">[</span>Contact<span className="text-cyan-400">]</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;