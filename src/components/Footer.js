import React from 'react';

const Footer = () => {
  const footerStyle = {
    textAlign: 'center',
    padding: '3rem 0',
    marginTop: '4rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    color: 'rgba(255, 255, 255, 0.6)'
  };

  const iconStyle = {
    margin: '0 15px',
    color: 'var(--neon-cyan)',
    textDecoration: 'none',
    fontSize: '0.9rem'
  };

  return (
    <footer style={footerStyle}>
      <p>© 2026 Abhi Varun | SDE Portfolio</p>
      <div style={{ marginTop: '10px' }}>
        <a href="https://github.com/Abhivarun21" target="_blank" rel="noreferrer" style={iconStyle}>GitHub</a>
        <a href="https://www.linkedin.com/in/abhivarun-chikoti/" target="_blank" rel="noreferrer" style={iconStyle}>LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;