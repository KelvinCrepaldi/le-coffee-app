import GlobalStyles from "../Styles/GlobalStyles";

export const Route = ({
  isPrivate = false,
  component: Component,
  test,
  ...rest
}) => {
  /*  return (
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
  ); */

  return (
    <>
      <GlobalStyles />
      <Component {...rest} />
    </>
  );
};
