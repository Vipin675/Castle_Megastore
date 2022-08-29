import React, { Fragment } from "react";
import SignInForm from "../../components/signInForm/SignInForm.component";
import SignUpForm from "../../components/signUpForm/SignUpForm.component";

import { AuthenticationContainer } from "./authentication.styles.jsx";
const Authentication = () => {
  return (
    <Fragment>
      <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainer>
    </Fragment>
  );
};

export default Authentication;
