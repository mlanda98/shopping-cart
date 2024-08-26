import React, { useState, useEffect } from "react";
import { fetchStoreItems } from "./Api.jsx";
import ShoppingCart from "./ShoppingCart";
import "./ShoppingItems.css";

function ShoppingItems({addToCart, cartItems}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const items = await fetchStoreItems();
      setItems(items);
    };
    loadItems();
  }, []);

  return (
    <div>
      <div className="cart-items">
        <ShoppingCart cartItems={cartItems}/>
      </div>
      <h2 className="title">Shopping Items</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name}></img>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingItems;