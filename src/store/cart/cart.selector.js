import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

// generate newCartCount
export const selectCartCount = createSelector(
  [selectCartReducer],
  ({ cartItems }) => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  }
);

// generate newCartTotal
export const selectCartTotal = createSelector(
  [selectCartReducer],
  ({ cartItems }) =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);
