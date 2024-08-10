import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css"


function Checkout({cartItems = [], removeFromCart}) {
  return (
      <div>
        <h2 className="checkout-title">Checkout</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name}/>
                <p>{item.title}</p>
                <p>${item.price} x {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
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