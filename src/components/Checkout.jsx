import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";


function Checkout({cartItems = [], removeFromCart}) {
  return (
      <div className="checkout-container">
        <h2 className="checkout-title">Checkout</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your cart is empty</p>
        ) : (
          <ul className="checkout-list">
            {cartItems.map((item) => (
              <li key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} className="checkout-img"/>
                  <div className="item-details">
                  <p className="item-title">{item.title}</p>
                  <p className="item-price">${item.price} x {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <Link to="/shopping">
          <button className="cont-button">Continue Shopping</button>
        </Link>
      </div>
    )
  
}

export default Checkout;