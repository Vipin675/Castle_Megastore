import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SignUpContainer } from "./signUpForm.styles";

import Button from "../button/Button.component";
import FormInput from "../form-input/Form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
// ////////////////////////////////////////////////////////////////////////////////////////////////
const SignUpForm = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert(
        "! Password Doesn't match (password and confirm password should be equal)"
      );
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(response.user, { displayName });
      setFormFields(defaultFormFields);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("!Email already in use");
      } else {
        console.log("An error is encountered during user creation : ", error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account ?</h2>
      <span>Sign Up with your email and password</span>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
