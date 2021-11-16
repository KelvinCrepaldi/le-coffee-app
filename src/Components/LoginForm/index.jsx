import { Input } from "../Input";
import { ButtonComponent } from "../Button";

import { LoginFormContainer } from "../../Styles/ComponentsStyle/LoginForm";
import { LoginContext } from "../../Providers/loginProvider";

import { useContext } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const LoginForm = () => {
  const history = useHistory();
  const { handleLogin } = useContext(LoginContext);

  const loginSchema = yup.object({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "mínimo de 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const login = (data) => {
    handleLogin(data, history);
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(login)}>
    
      <Input
        placeholder="Digite seu email"
        register={register}
        name="email"
        error={errors.email?.message}
      />
 
      <Input
        placeholder="Digite sua senha"
        type="password"
        register={register}
        name="password"
        error={errors.password?.message}
      />

      <div className="bttnContainer">
        <ButtonComponent
          className="bttnLogin"
          type="submit"
          variant="brown"
          text="Entrar"
        />
      </div>
    </LoginFormContainer>
  );
};
