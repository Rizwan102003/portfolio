import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinkStyles = ({ isActive }) =>
    `nav-link ${isActive ? 'active' : ''}`;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all ${
      isScrolled 
        ? 'bg-secondary border-b border' 
        : 'bg-primary'
    }`}>
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/portfolio" 
            className="text-primary font-semibold text-lg hover:text-accent transition-all"
          >
            <span className="font-mono text-accent">&lt;</span>
            Rizwan
            <span className="font-mono text-accent">/&gt;</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/portfolio" className={navLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkStyles}>
              About
            </NavLink>
            <NavLink to="/projects" className={navLinkStyles}>
              Projects
            </NavLink>
            <NavLink to="/resume" className={navLinkStyles}>
              Resume
            </NavLink>
            <NavLink to="/contact" className={navLinkStyles}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted hover:text-primary hover:bg-tertiary rounded-lg transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-current block transition-all duration-200 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-current block transition-all duration-200 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-current block transition-all duration-200 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-200 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-secondary rounded-xl border p-4 flex flex-col gap-2">
            <NavLink 
              to="/portfolio" 
              className={navLinkStyles}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={navLinkStyles}
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={navLinkStyles}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/resume" 
              className={navLinkStyles}
            >
              Resume
            </NavLink>
            <NavLink 
              to="/contact" 
              className={navLinkStyles}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;