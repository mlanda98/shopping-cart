import React from "react";
import { Link } from "react-router-dom";

function ShoppingCart({cartItems}){
  const itemCount = cartItems.reduce((total, item) => total  + item.quantity, 0);

  return (
    <div>
      <Link to="/checkout">
      <h2>Cart ({itemCount} items)</h2>
      </Link>
    </div>
  )
}

export default ShoppingCart;