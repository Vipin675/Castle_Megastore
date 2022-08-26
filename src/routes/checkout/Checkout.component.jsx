import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/Checkout-item.component";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";
const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    total,
  } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem
          key={cartItem.id}
          cartItem={cartItem}
          addToCart={addItemToCart}
          removeFromCart={removeItemFromCart}
          clearFromCart={clearItemFromCart}
        />
      ))}
      <span className="total">
        Total :{" $"}
        {total}
      </span>
    </div>
  );
};

export default Checkout;
