import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/Checkout-item.component";

import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";
const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    total,
  } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Products</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem
          key={cartItem.id}
          cartItem={cartItem}
          addToCart={addItemToCart}
          removeFromCart={removeItemFromCart}
          clearFromCart={clearItemFromCart}
        />
      ))}
      <Total>
        Total :{" $"}
        {total}
      </Total>
    </CheckoutContainer>
  );
};

export default Checkout;
