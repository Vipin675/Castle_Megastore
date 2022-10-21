import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component";

// import { CartContext } from "../../contexts/cart.context";
import { addItemToCart } from "../../store/cart/cart.actions";

import { selectCartItems } from "../../store/cart/cart.selector";
import { ProductCardContainer } from "./product-card.styles.jsx";

import "./product-card.styles.jsx";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl } = product;

  // const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={`${imageUrl}`} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        id="card-button"
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
