import React from "react";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";
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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </ImageContainer>
      <BaseSpan>{cartItem.name}</BaseSpan>

      <Quantity>
        <Arrow onClick={decreaseQuantityHandler}>&#10094;</Arrow>
        <Value>{cartItem.quantity}</Value>
        <Arrow onClick={increaseQuantityHandler}>&#10095;</Arrow>
      </Quantity>

      <BaseSpan>{cartItem.price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
