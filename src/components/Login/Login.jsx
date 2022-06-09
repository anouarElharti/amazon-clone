import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [errors, setError] = useState("");
  const history = useNavigate();
  // SIGN IN
  const signIn = (e) => {
    e.preventDefault();
    //FIREBASE LOGIN
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              //   setTimeActive(true);
              //   history("/verify-email");
              history("/");
            })
            .catch((err) => alert(err.message));
        } else {
          history("/");
        }
      })
      .catch((err) => setError(err.message));
  };
  // REGISTER
  //FIREBASE REGISTER
  const register = (e) => {
    e.preventDefault();
    setError("");
    // Create a new user with email and password using firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        //console.log(res.user);
        if (auth) history("/");
      })
      .catch((err) => setError(err.message));

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png"
          alt=""
          className="loginLogo"
        />
      </Link>
      <div className="loginContainer">
        <h1>Sign In</h1>
        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="loginSigninButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon Clone Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="loginCreateAccountButton">
          Create your Amazon Clone account!
        </button>
      </div>
      <h4>{errors}</h4>
    </div>
  );
}
