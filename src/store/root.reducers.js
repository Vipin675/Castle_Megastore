import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducers } from "./categories/category.reducer";
import { cartReducers } from "./cart/cart.reducer";

export const rootReducers = combineReducers({
  user: userReducer,
  categories: categoriesReducers,
  cart: cartReducers,
});
