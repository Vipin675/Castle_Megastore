import { compose, legacy_createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import { rootReducers } from "./root.reducers";

// ----------------------------------------------------------------------------------
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default to localstorage for web

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["user"], // my user state is coming from 'authlistner' user state configured in firebase.util.js no need to persist the user. Because this might conflict or clash with localstorage
  whileList: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
// ----------------------------------------------------------------------------------

// logger is only to display before after the state change --auxilarry
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

//If these fail,
// these = [(process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)]
// then we'll use regular "compose" just as we had been for otherwise run the actual one from Redux DevTools.

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = legacy_createStore(
  // rootReducers,
  persistedReducer,
  undefined,
  composedEnhancers
);
export const persistor = persistStore(store);
