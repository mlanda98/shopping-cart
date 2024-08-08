import React from "react";

function ShoppingCart({cartItems}) {
  return (
      <div>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        )}
      </div>
    )
  
}

export default ShoppingCart;