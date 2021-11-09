import { Switch, Route } from "react-router";
import GlobalStyles from "../Styles/GlobalStyles";

import Home from "../Pages/Home";

const RoutesPatchs = () => {
  return (
    <Switch>
      <Route exact path="/">
        <GlobalStyles />
        <Home />
      </Route>
    </Switch>
  );
};

export default RoutesPatchs;
