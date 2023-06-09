import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles/nav.css';

const Navi = () => (
  <nav className="nav-container">
    <h1 className="navtitle">
      <Link to="/">BookStore CMS </Link>
    </h1>
    <div className="navlinks">
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </div>
    <div className="icon-imgs">
      <FaUserCircle className="icon-img" />
    </div>
  </nav>
);
export default Navi;
