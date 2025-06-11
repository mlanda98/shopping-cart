// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchStoreItems } from "./StoreApi";
import "../styles/ShoppingItems.css";
import { Link } from "react-router-dom";
import logo from "../pictures/logo.png"

function ShoppingItems({ addToCart, cartItems }) {
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  useEffect(() => {
    const loadItems = async () => {
      const items = await fetchStoreItems();
      setItems(items);
    };
    loadItems();
  }, []);

  const handleSort = (value) => {
    setSortOrder(value);
  };

  const getSortedItems = () => {
    if (sortOrder === "highToLow") {
      return [...items].sort((a, b) => b.price - a.price);
    }

    return items;
  };

  return (
    <div className="shopping-page">
      <header className="shopping-header">
        <div className="shopping-nav">
          <div className="left-side">
            <img className="logo" src={logo} alt="logo" />
            <h1 className="store-name"> SmartTech</h1>
          </div>

          <div className="right-side">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/checkout" className="nav-link cart-link">
              {" "}
              Cart
              <span className="cart-count">
                (
                {cartItems.reduce(
                  (total, item) => total + (item.quantity || 1),
                  0
                )}
                )
              </span>
            </Link>
          </div>
        </div>
      </header>

      <h2 className="page-title">Shopping Items</h2>

      <div className="sort-filter">
        <label htmlFor="sort">Sort By:</label>
        <select id="sort" onChange={(e) => handleSort(e.target.value)}>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      <div className="items-grid">
        {getSortedItems().map((item) => (
          <div key={item.id}>
            <div className="image-wrapper">
              <img src={item.image} alt={item.name}></img>
            </div>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

ShoppingItems.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
};

export default ShoppingItems;
