import React, { Fragment } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import "./signIn.styles.scss";
const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log("userDocRef", userDocRef);
  };

  return (
    <Fragment>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign In with google popup</button>
    </Fragment>
  );
};

export default SignIn;
