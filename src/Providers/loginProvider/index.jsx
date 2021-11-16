import { createContext } from "react";
import api from "../../Services";
import toast from "react-hot-toast";
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const errorToast = () =>
    toast.error("Usuário não encontrado!", {
      style: {
        border: "1px solid var(--alert-error)",
        padding: "16px",
        color: "var(--alert-error)",
        background: "var(--white-primary)",
      },
      iconTheme: {
        primary: "var(--alert-error)",
        secondary: "var(--white-primary)",
      },
    });

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
        errorToast();
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
