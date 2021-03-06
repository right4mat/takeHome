import React from "react";
import { Switch, Route } from "react-router-dom";

//css imports
import "./App.css";
//comp imports
import Header from "./components/header/Header";
//page imports
import Home from "./pages/home/Home";
import Map from "./pages/map/Map";
import Likes from "./pages/favorites/Likes";
import Search from "./pages/search/Search";
import Checkout from "./pages/checkout/Checkout";
import FourZeroFour from "./pages/404/404";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/locations">
          <Map />
        </Route>
        <Route path="/favorites">
          <Likes />
        </Route>
        <Route path="/search/:search">
          <Search />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route>
          <FourZeroFour />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
