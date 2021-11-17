import { RegisterFormContainer } from "../../Styles/ComponentsStyle/RegisterForm";
import { ButtonComponent } from "../../Components/Button";

import { RegisterContext } from "../../Providers/registerProvider/index";
import { useContext } from "react";
import { useHistory } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../Input";

const RegisterForm = () => {
  const { handleRegister } = useContext(RegisterContext);
  const history = useHistory();

  const registerSchema = yup.object({
    name: yup
      .string()
      .max(48, "Campo obrigatório. Máximo de 48 dígitos.")
      .required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .min(6, "Campo obrigatório. Mínimo de 6 dígitos")
      .required("Campo obrigatório. Senha deve ter no mínimo 6 caracteres."),
    secondPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleRegisterSubmit = (e) => {
    handleRegister(e);
    history.push("/login");
  };

  const handleBackToLogin = () => {
    history.push("/login");
  };

  return (
    <RegisterFormContainer onSubmit={handleSubmit(handleRegisterSubmit)}>
      <div className="center-mobile">
        <div className="title">
          <h1>Registre-se</h1>
          <span>
            e prove dos
            melhores cafés
          </span>
        </div>
        <div className = "content">
        
          <Input
            placeholder="Digite seu nome"
            register={register}
            name="name"
            error={errors.name?.message}
          ></Input>
            
          <Input
            placeholder="Digite seu email"
            register={register}
            name="email"
            error={errors.email?.message}
          ></Input>
             
          <Input
            placeholder="Digite sua senha"
            type="password"
            register={register}
            name="password"
            error={errors.password?.message}
          ></Input>
            
          <Input
            placeholder="Confirme sua senha"
            type="password"
            register={register}
            name="secondPassword"
            error={errors.secondPassword?.message}
          ></Input>
        </div>
      </div>
      <div className="button-container">
        <ButtonComponent type="submit" variant="brown" text="Cadastrar" />
        <label className="text-register display-desktop">
          Já possui uma conta?
        </label>
        <ButtonComponent
          className="display-desktop white"
          variant="white"
          text="Fazer login"
          onClick={handleBackToLogin}
        />
      </div>
    </RegisterFormContainer>
  );
};
export default RegisterForm;
