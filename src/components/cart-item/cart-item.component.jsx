import React from "react";
import { CartItemContainer, ItemDetail, Name } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetail>
        <Name>{name}</Name>
        <Name>
          {quantity} x ${price}
        </Name>
      </ItemDetail>
    </CartItemContainer>
  );
};

export default CartItem;
