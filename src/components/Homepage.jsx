import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="container">
          <div className="logo-title">
            <img src="./src/logo.PNG" alt="Store Logo" />
            <h1>SmartTech</h1>
          </div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/shopping">Shop</Link>
          </nav>
        </div>
      </header>

        <main className="main">
          <div className="info">
            <h2>Welcome to SmartTech!</h2>
            <p>Your one-stop shop for smart gadgets and futuristic gear.</p>
            <Link to="/shopping" className="shop-button">Start Shopping</Link>
          </div>
          <div className="pic">
            <img className="main-pic" src="./src/vr-set.PNG" alt="jeans-pic"/>
          </div>
        </main>
    </div>
  );
}

export default Homepage;
