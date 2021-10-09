import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase/firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LogIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        history.push("/");
        console.log(auth);
        // Signed in
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG7.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Log In</h1>
        <form>
          <h5>Email</h5>
          <input
            autoFocus
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Pasword</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login_loginButton" onClick={LogIn}>
            Log In
          </button>
        </form>
        <p>
          Al crear tu usuario, aceptas las condiciones de Amazon Fake Clone para
          Usar y vender. Por favor, ojea las condiciones de privacidad, las
          cookies, e indica las alertas que quieres recibir
        </p>
        <button onClick={register} className="login_registerButton">
          Crear una cuenta de Amazon
        </button>
      </div>
    </div>
  );
};

export default Login;
