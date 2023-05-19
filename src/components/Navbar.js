import React from 'react';
import { Link } from 'react-router-dom';

export const Navi = () => (
  <nav className="nav-container">
    <h1 className="navtitle">Bookstore</h1>
    <div className="navlinks">
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </div>
  </nav>
);
export default Navi;
