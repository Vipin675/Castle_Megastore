import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListner,
} from "../utils/firebase/firebase.utils";

// it has the actual value which you want to access in various components without any props drillings
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// this provider will be created with any context.
//  Provider is the component that will wrap that component which need to use the value inside the provider's context.
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
