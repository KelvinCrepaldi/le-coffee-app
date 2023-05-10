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
import UserAddressPage from "../Pages/UserAddress";
import ShowAddressPage from "../Pages/ShowAddress";
import { Route } from "./Route";
import RegionMap from "../Pages/RegionMap";

const RoutesPatchs = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={Register} />

      <Route path="/home" component={Home} isPrivate={false} />
      <Route path="/catalogue" component={Catalogue} isPrivate={false} />
      <Route path="/cart" component={CartPage} isPrivate={false} />
      <Route path="/aboutus" component={AboutUs} isPrivate={false} />
      <Route path="/regionmap" component={RegionMap} isPrivate={false} />
      <Route path="/user/change" component={ChangeUserData} isPrivate={false} />
      <Route
        path="/user/address"
        component={UserAddressPage}
        isPrivate={false}
      />
      <Route
        path="/user/showAddress"
        component={ShowAddressPage}
        isPrivate={false}
      />
      <Route path="/user" component={User} isPrivate={false} />
    </Switch>
  );
};

export default RoutesPatchs;
