import React, { useState, useEffect } from "react";
import { fetchStoreItems } from "./api";
import ShoppingCart from "./ShoppingCart";

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
      <ShoppingCart cartItems={cartItems} />
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
    </div>
  );
}

export default ShoppingItems;