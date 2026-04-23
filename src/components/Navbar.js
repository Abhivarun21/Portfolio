import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '1rem 0',
    background: 'rgba(10, 10, 12, 0.8)',
    backdropFilter: 'blur(15px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 1000
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#e0e0e0',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    transition: '0.3s'
  };

  return (
    <nav style={navStyle}>
      <div className="logo neon-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        AV.DEV
      </div>
      <div style={{ display: 'flex', gap: '30px' }}>
        <NavLink 
          to="/" 
          style={linkStyle} 
          className={({ isActive }) => isActive ? "nav-link-active" : ""}
        >
          Home
        </NavLink>
        <NavLink 
          to="/projects" 
          style={linkStyle} 
          className={({ isActive }) => isActive ? "nav-link-active" : ""}
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;