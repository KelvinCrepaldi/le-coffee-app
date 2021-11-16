import { Switch, Route } from "react-router";
import GlobalStyles from "../Styles/GlobalStyles";

import Register from "../Pages/Register";
import LandingPage from "../Pages/LandingPage";
import LoginPage from "../Pages/Login";
import Home from "../Pages/Home";
import Catalogue from "../Pages/Catalogue/"
import CartPage from "../Pages/Cart";
import AboutUs from "../Pages/AboutUs";
import User from "../Pages/User";

const RoutesPatchs = () => {
  return (
    <Switch>
    
      <Route exact path="/">
        <GlobalStyles />
        <LandingPage />
      </Route>
    
      <Route path="/login">
        <GlobalStyles />
        <LoginPage />
      </Route>
    
      <Route path="/register">
        <GlobalStyles />
        <Register />
      </Route>
    
      <Route path="/home">
        <GlobalStyles />
        <Home />
      </Route>
    
      <Route path="/catalogue">
        <GlobalStyles />
        <Catalogue />
      </Route>
      
      <Route path="/cart">
        <GlobalStyles />
        <CartPage />
      </Route>
      
      <Route path="/aboutus">
        <GlobalStyles />
        <AboutUs />
      </Route>
    
      <Route path="/regionmap">
        <GlobalStyles />
        <Register />
      </Route>

      <Route path="/user">
        <GlobalStyles />
        <User />
      </Route>
    
    </Switch>
  );
};

export default RoutesPatchs;
