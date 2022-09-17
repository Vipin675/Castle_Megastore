import { compose, legacy_createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import { rootReducers } from "./root.reducers";

// logger is only to display before after the state change --auxilarry
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = legacy_createStore(
  rootReducers,
  undefined,
  composedEnhancers
);
