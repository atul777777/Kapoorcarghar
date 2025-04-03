import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; 

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Login" className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink>
          </li>
          <li>
            <NavLink to="/CarBlog" className={({ isActive }) => (isActive ? "active" : "")}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/Cars" className={({ isActive }) => (isActive ? "active" : "")}>Cars</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
