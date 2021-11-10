import { createContext } from "react";
import { useHistory } from "react-router";
import api from "../../Services/index";
import toast from "react-hot-toast";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const sucessToast = () =>
    toast.success("Conta de usuário criada com sucesso!");
  const errorToast = () => toast.error("Erro ao criar conta de usuário!");
  const history = useHistory();

  const handleRegister = (data) => {
    const { email, password, name } = data;
    api
      .post("signup", { email: email, password: password, name: name })
      .then((e) => {
        sucessToast();
        history.push("/login");
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
