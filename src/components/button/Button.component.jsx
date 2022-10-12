import React from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

// const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
//   ({
//     [BUTTON_TYPE_CLASSES.base]: BaseButton,
//     [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,     ///                NOODLER SYNTAX
//     [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
//   }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  switch (buttonType) {
    //-------------------------------------------------------
    case BUTTON_TYPE_CLASSES.google:
      return (
        <GoogleSignInButton disable={isLoading} {...otherProps}>
          {isLoading ? <ButtonSpinner /> : children}
        </GoogleSignInButton>
      );
    //-------------------------------------------------------
    case BUTTON_TYPE_CLASSES.inverted:
      return (
        <InvertedButton disable={isLoading} {...otherProps}>
          {isLoading ? <ButtonSpinner /> : children}
        </InvertedButton>
      );
    //-------------------------------------------------------
    default:
      return (
        <BaseButton disable={isLoading} {...otherProps}>
          {isLoading ? <ButtonSpinner /> : children}
        </BaseButton>
      );
  }
};

export default Button;
