import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Basket from "./components/Basket/Basket";
import Login from "./components/Login/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./components/DataProvider/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      console.log("The user is", user);
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
        //const uid = user.uid;
        //console.log("Usuario loggeado", uid);
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/basket">
            <Header />
            <Basket />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
