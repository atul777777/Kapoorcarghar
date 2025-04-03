import React from "react";
import { useNavigate } from "react-router-dom";
import products from "./Product"; // Importing product data from Product.js
import "./Cars.css"; // Importing external CSS file for styling

const HomePage = () => {
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  // Function to handle clicking the "View Details" button
  const handleViewDetails = (productName) => {
    navigate(`/product/${encodeURIComponent(productName)}`); // Navigates to product details page with encoded product name
  };

  return (
    <div>
      {/* Header Section */}
      <header className="heuristic-header">
        <h1>Welcome to Our Car Store</h1>
        <p>Find your dream car at unbeatable prices!</p>
      </header>

      {/* Featured Cars Section */}
      <section className="featured">
        <h2>Featured Cars</h2>
        
        {/* Displaying products in a grid format */}
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              {/* Display product image */}
              <img src={product.image} alt={product.name} className="product-image" />
              
              {/* Display product name */}
              <h3>{product.name}</h3>
              
              {/* Display product price */}
              <p className="price">{product.price}</p>
              
              {/* Display product description */}
              <p className="description">{product.description}</p>
              
              {/* Button to view more details about the product */}
              <button className="view-details" onClick={() => handleViewDetails(product.name)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Car Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
