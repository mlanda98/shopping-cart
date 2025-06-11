/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Checkout.css";
import PropTypes from "prop-types";

function Checkout({ cartItems = [], removeFromCart }) {
  const [successMessage, setSuccessMessage] = useState("");

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setSuccessMessage(
      "🎉 Purchase successful! Thank you for shopping with us."
    );
  };
  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <>
          <ul className="checkout-list">
            {cartItems.map((item) => (
              <li key={item.id} className="checkout-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="checkout-img"
                />
                <div className="item-details">
                  <p className="item-title">{item.title}</p>
                  <p className="item-price">
                    ${item.price} x {item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>
              Total: <strong>${totalPrice.toFixed(2)}</strong>
            </p>
            <button className="checkout-button" onClick={handleCheckout}>
              Confirm Purchase
            </button>
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </div>
        </>
      )}
      <Link to="/shopping">
        <button className="cont-button">Continue Shopping</button>
      </Link>
    </div>
  );
}

Checkout.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
};
export default Checkout;
