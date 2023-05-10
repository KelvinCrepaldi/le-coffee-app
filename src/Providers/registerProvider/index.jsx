import { createContext } from "react";
import api from "../../Services/index";
import toast from "react-hot-toast";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const sucessToast = () =>
    toast.success("Conta de usuário criada com sucesso!");
  const errorToast = () =>
    toast.error(
      "Servidor desativado, mas ainda é possível visualizar as páginas!"
    );

  const handleRegister = (data) => {
    const { email, password, name } = data;
    console.log("passou");
    api
      .post("signup", { email: email, password: password, name: name })
      .then((e) => {
        sucessToast();
      })
      .catch((e) => {
        errorToast();
      });
  };

  return (
    <RegisterContext.Provider value={{ handleRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};
