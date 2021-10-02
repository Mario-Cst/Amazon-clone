import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Basket from "./components/Basket/Basket";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/">
            {/* <Header /> */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
