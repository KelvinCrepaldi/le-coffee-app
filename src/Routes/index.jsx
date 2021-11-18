import { Switch } from "react-router";
import Register from "../Pages/Register";
import LandingPage from "../Pages/LandingPage";
import LoginPage from "../Pages/Login";
import Home from "../Pages/Home";
import Catalogue from "../Pages/Catalogue/";
import CartPage from "../Pages/Cart";
import AboutUs from "../Pages/AboutUs";
import User from "../Pages/User";
import ChangeUserData from "../Pages/ChangeUserData";
import UserAddress from "../Components/UserAddress";
import { Route } from "./Route";
import RegionMap from "../Pages/RegionMap";

const RoutesPatchs = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={Register} />

      <Route path="/home" component={Home} isPrivate={true} />
      <Route path="/catalogue" component={Catalogue} isPrivate={true} />
      <Route path="/cart" component={CartPage} isPrivate={true} />
      <Route path="/aboutus" component={AboutUs} isPrivate={true} />
      <Route path="/regionmap" component={RegionMap} isPrivate={true} />
      <Route path="/user/change" component={ChangeUserData} isPrivate={true} />
      <Route path="/user/address" component={UserAddress} isPrivate={true} />
      <Route path="/user" component={User} isPrivate={true} />
    </Switch>
  );
};

export default RoutesPatchs;
