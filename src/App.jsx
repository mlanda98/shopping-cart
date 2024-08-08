import React from "react";
import { Link } from "react-router-dom";
import "./App.css" 

function Homepage() {
  return (
    <div>
      <img src="./src/logo.jpg" alt="Store Logo" />
      <h1>Welcome to Our Store!</h1>
      <p>Discover amazing products</p>
      <Link to="/shopping">Start Shopping</Link>
    </div>
  );
}

export default Homepage;
