import React, { Fragment } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../signUpForm/SignUpForm.component";

import "./signIn.styles.scss";
const SignIn = () => {
  const logGoogleUserWithPopup = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log("userDocRef", userDocRef);
  };

  return (
    <Fragment>
      <div>SignIn</div>
      <button onClick={logGoogleUserWithPopup}>
        Sign In with google popup
      </button>
      <SignUpForm />
    </Fragment>
  );
};

export default SignIn;
