import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around py-3 shadow">
      <Link to="/">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/new">Post</Link>
      <Link to="/messages">Messages</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;