import React, { useContext } from "react";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totatCartedItems = cartItems.reduce(
    (accumulator, { quantity }) => accumulator + quantity,
    0
  );

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{totatCartedItems}</span>
    </div>
  );
};

export default CartIcon;
