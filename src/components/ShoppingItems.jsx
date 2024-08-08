import React, { useState, useEffect } from "react";
import { fetchStoreItems } from "./api";
import ShoppingCart from "./shoppingCart";
import { Link } from "react-router-dom";

function ShoppingItems() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const items = await fetchStoreItems();
      setItems(items);
    };
    loadItems();
  }, []);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <ShoppingCart cartItems={cart} />
      <h2>Shopping Items</h2>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name}></img>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={() => addToCart(item)}>Add To Cart</button>
          </div>
        ))}
      </div>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
}

export default ShoppingItems;