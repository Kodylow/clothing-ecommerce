import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import "./auth.styles.scss";

import {
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/Auth/SignUpForm/SignUpForm";
import SignInForm from "../../components/Auth/SignInForm/SignInForm";

const Auth = () => {
  useEffect(() => {
    async function grabRedirect() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    grabRedirect();
  }, []);

  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
