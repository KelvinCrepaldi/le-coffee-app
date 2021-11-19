import { createContext } from "react";
import api from "../../Services";
import { ErrorAlert } from "../../Components/Alerts";
import { useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoged, setIsLoged] = useState(() => {
    const isLoged = localStorage.getItem("token") || false;
    if (isLoged) {
      return true;
    } else {
      return false;
    }
  });

  const handleLogin = (data, history) => {
    api
      .post("login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));
        localStorage.setItem("userId", JSON.stringify(res.data.user.id));
        localStorage.setItem("username", JSON.stringify(res.data.user.name));
        setIsLoged(true);
        history.push("/home");
      })
      .catch((err) => {
        ErrorAlert("Usuário não encontrado!", "top-center");
      });
  };
  const logout = (history) => {
    setIsLoged(false);
    history.push("/");
    localStorage.clear();
  };

  return (
    <LoginContext.Provider value={{ handleLogin, logout, isLoged }}>
      {children}
    </LoginContext.Provider>
  );
};
