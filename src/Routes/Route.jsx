import { CgPacman } from "react-icons/cg";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import GlobalStyles from "../Styles/GlobalStyles";
import { useEffect, useState, useContext } from "react";
import { LoginContext } from "../Providers/loginProvider";

export const Route = ({
  isPrivate = false,
  component: Component,
  test,
  ...rest
}) => {
  // pegar o token acessToken
  const { isLoged } = useContext(LoginContext);

  /* const [token, setToken] = useState(() => {
    const isLoged = localStorage.getItem("token") || false;
    console.log(isLoged + " key");
    if (isLoged) {
      return true;
    } else {
      return false;
    }
  });
  console.log(token); */

  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!isLoged ? (
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
