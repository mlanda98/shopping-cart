import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, createMemoryRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import ShoppingItems from "./components/ShoppingItems";
import Checkout from "./components/Checkout";

function App(){
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem){
        return prevCart.map(cartItem => 
          cartItem.id === item.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
          );
      }

      return [...prevCart, {...item, quantity: 1}];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.map(item => item.id === itemId ? {...item, quantity: item.quantity - 1} : item)
      .filter(item => item.quantity > 0)
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/shopping"
          element={<ShoppingItems addToCart={addToCart} cartItems={cart}/>}
        />
        <Route
          path="/checkout"
          element={<Checkout cartItems={cart} removeFromCart={removeFromCart}/>}
        />
      </Routes>
    </Router>
  );
}

export default App;