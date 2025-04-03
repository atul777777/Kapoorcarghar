import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "./Product"; // Importing product data
import "./ProductDetails.css"; // Importing external CSS for styling

const ProductDetails = () => {
  const { name } = useParams(); // Extract product name from URL
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Decode product name from URL and replace hyphens with spaces
  const decodedName = decodeURIComponent(name).replace(/-/g, " ");
  
  // Find the matching product from the product list
  const product = products.find((item) => item.name.toLowerCase() === decodedName.toLowerCase());

  // If the product is not found, display a message
  if (!product) {
    return <h2 className="not-found">Product not found</h2>;
  }

  return (
    <div className="product-details">
      {/* Back button to navigate to the cars listing page */}
      <button className="back-btn" onClick={() => navigate("/Cars")}>← Back to Listings</button>

      {/* Product details container */}
      <div className="product-container">
        
        {/* Section for product image */}
        <div className="image-section">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>

        {/* Section for product information */}
        <div className="info-section">
          <h1 className="product-title">{product.name}</h1> {/* Display product name */}
          <p className="product-price">{product.price}</p> {/* Display product price */}
          <p className="product-description">{product.description}</p> {/* Display product description */}

          {/* Buttons for buying and adding to cart */}
          <div className="div">
            <div className="span">
              <button className="buy-now">Buy Now</button>
            </div>
            <div className="span">
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
