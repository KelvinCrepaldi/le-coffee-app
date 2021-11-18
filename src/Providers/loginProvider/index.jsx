import { createContext } from "react";
import api from "../../Services";
import { ErrorAlert } from "../../Components/Alerts";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const handleLogin = (data, history) => {
    api
      .post("login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));
        localStorage.setItem("userId", JSON.stringify(res.data.user.id));
        localStorage.setItem("username", JSON.stringify(res.data.user.name));
        history.push("/home");
      })
      .catch((err) => {
        ErrorAlert("Usuário não encontrado!", "top-center");
      });
  };
  const logout = (history) => {
    history.push("/");
    localStorage.clear();
  };

  return (
    <LoginContext.Provider value={{ handleLogin, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
