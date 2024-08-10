import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <div className="header">
        <img src="./src/logo.jpg" alt="Store Logo" />
        <h1>Cotton On</h1>
      </div>

      <div className="main">
        <div className="info">
          <h2>Welcome to Our Store!</h2>
          <p>Discover amazing products</p>
          <Link to="/shopping">Start Shopping</Link>
        </div>
        <div className="pic">
          <img className="main-pic" src="./src/components/jeans-pic.webp" alt="jeans-pic"/>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
