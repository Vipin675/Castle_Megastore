import React, { Fragment } from "react";
import SignInForm from "../../components/signInForm/SignInForm.component";
import SignUpForm from "../../components/signUpForm/SignUpForm.component";

import "./authentication.styles.scss";
const Authentication = () => {
  return (
    <Fragment>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </Fragment>
  );
};

export default Authentication;
