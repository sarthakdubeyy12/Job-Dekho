
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    //backgroundColor: '#0f172a',
    color: 'white',
  };

  const logoStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '30px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Nayi मंज़िल</div>
      <div style={navLinksStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/jobs" style={linkStyle}>Jobs</Link>
        <Link to="/wishlist">
           <button title="My Wishlist">Liked</button>
        </Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
