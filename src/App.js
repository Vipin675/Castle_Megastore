import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListner,
} from "./utils/firebase/firebase.utils";

import Home from "./routes/home/Home.components";
import Navigation from "./routes/navigation/Navigation.component";
import Shop from "./routes/shop/Shop.component.jsx";
import Authentication from "./routes/authentication/Authentication.component";
import Checkout from "./routes/checkout/Checkout.component";

import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
  // setCurrentUser will return an action and to use this dispatched action we need to import useDispatch from react-redux
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
