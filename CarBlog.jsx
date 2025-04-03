import React from "react";
import { Link } from "react-router-dom";
import Blogpost from "./Blogpost"; // Import Blogpost.js
import "./CarBlog.css";

const CarBlog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-header">Car Blog</h1>
      <div className="blog-grid">
        {Blogpost.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-desc">{blog.description}</p>
            <Link to={`/blog/${blog.id}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarBlog;
