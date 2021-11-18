import { CgPacman } from "react-icons/cg";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import GlobalStyles from "../Styles/GlobalStyles";
import { useEffect, useState } from "react";

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  // pegar o token acessToken
  const [token, setToken] = useState();
  console.log(token);

  useEffect(() => {
    const isLoged = localStorage.getItem("token") || false;
    console.log(isLoged + " key");
    if (isLoged) {
      return setToken(true);
    } else {
      return setToken(false);
    }
  }, [Component]);

  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!token ? (
          <>
            <GlobalStyles />
            <Component />
          </>
        ) : (
          <Redirect to={isPrivate ? "/" : "/home"} />
        )
      }
    />
  );
};
