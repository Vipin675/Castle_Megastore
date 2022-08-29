import React, { useState } from "react";
import { ButtonContainer, SignInContainer } from "./signInForm.styles.jsx";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component";
import FormInput from "../form-input/Form-input.component";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("! Wrong password");
          break;
        case "auth/user-not-found":
          alert("! No user is associated with this email");
          break;
        default:
          break;
      }
      console.log("An error is encountered during user creation : ", error);
    }
  };

  // -------------------------------------------------------------------------
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password</span>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonContainer>
          {/* <Button type="submit">Sign In</Button> */}
          <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
            Sign In
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
