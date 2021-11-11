import { createContext } from "react";
import api from "../../Services";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  
  const handleLogin = (data, history) => {
    api
      .post("login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));
        localStorage.setItem("userId", JSON.stringify(res.data.user.id));
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logout = (history) => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <LoginContext.Provider value={{ handleLogin, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
