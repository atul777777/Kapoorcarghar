import React from "react";
import { useParams } from "react-router-dom";
import Blogpost from "./Blogpost"; // Import Blogpost.js
import "./Blogpost.css";

const BlogPost = () => {
  const { postId } = useParams();
  const blog = Blogpost.find((b) => b.id.toString() === postId);

  if (!blog) return <p>Blog post not found!</p>;

  return (
    <div className="blog-post-container">
      <h1 className="blog-title">{blog.title}</h1>
     
<div className="image">
<img src={blog.image} alt={blog.title}/> 
  </div>
      <p className="blog-content">{blog.description}</p>
    </div>
    
  );
};

export default BlogPost;
