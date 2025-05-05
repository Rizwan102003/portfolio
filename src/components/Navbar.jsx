import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold'
      : 'text-gray-600 hover:text-blue-500';

  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-md sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-blue-700">
        Welcome to my Portfolio
      </Link>
      <div className="space-x-6 text-md">
        <NavLink to="/" className={navLinkStyles}>Home</NavLink>
        <NavLink to="/about" className={navLinkStyles}>About</NavLink>
        <NavLink to="/projects" className={navLinkStyles}>Projects</NavLink>
        <NavLink to="/resume" className={navLinkStyles}>Resume</NavLink>
        <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
