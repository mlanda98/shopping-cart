import React from "react";
import { Link } from "react-router-dom";


function Checkout({cartItems = [], removeFromCart}) {
  return (
      <div>
        <h2>Checkout</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name}/>
                {item.name} - {item.price} x {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <Link to="/shopping">
          <button>Continue Shopping</button>
        </Link>
      </div>
    )
  
}

export default Checkout;