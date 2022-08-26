import React from "react";

import "./checkout-item.styles.scss";
const CheckoutItem = ({
  cartItem,
  addToCart,
  removeFromCart,
  clearFromCart,
}) => {
  const increaseQuantityHandler = () => {
    addToCart(cartItem);
  };
  const decreaseQuantityHandler = () => {
    removeFromCart(cartItem);
  };
  const clearItemHandler = () => {
    clearFromCart(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <span className="name">{cartItem.name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decreaseQuantityHandler}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={increaseQuantityHandler}>
          &#10095;
        </div>
      </span>

      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
