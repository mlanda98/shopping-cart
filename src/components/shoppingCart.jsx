// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ShoppingCart({ cartItems }) {
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Link to="/checkout">
        <h2>Cart ({itemCount} items)</h2>
      </Link>
    </div>
  );
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default ShoppingCart;
