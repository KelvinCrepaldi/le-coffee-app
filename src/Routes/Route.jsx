import { Redirect, Route as ReactRoute } from "react-router-dom";
import GlobalStyles from "../Styles/GlobalStyles";
import { useContext } from "react";
import { LoginContext } from "../Providers/loginProvider";

export const Route = ({
  isPrivate = false,
  component: Component,
  test,
  ...rest
}) => {
  const { isLoged } = useContext(LoginContext);

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
