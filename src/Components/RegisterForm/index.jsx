import { RegisterFormContainer } from "../../Styles/ComponentsStyle/RegisterForm";
import ButtonComponent from "../../Components/Button";
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
      .max(50, "Campo obrigatório. Máximo de 50 dígitos.")
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
  };

  const handleBackToLogin = () => {
    history.push("/login");
  };

  return (
    <RegisterFormContainer onSubmit={handleSubmit(handleRegisterSubmit)}>
      <div>
        <div className="title">
          <h1>Registre-se</h1>
          <span>
            e prove dos <br />
            melhores cafés
          </span>
        </div>
        <div>
          <Input
            placeholder="Nome"
            register={register}
            name="name"
            error={errors.name?.message}
          ></Input>
          <Input
            placeholder="E-mail"
            register={register}
            name="email"
            error={errors.email?.message}
          ></Input>
          <Input
            placeholder="Senha"
            type="password"
            register={register}
            name="password"
            error={errors.password?.message}
          ></Input>
          <Input
            placeholder="Confirmar senha"
            type="password"
            register={register}
            name="secondPassword"
            error={errors.secondPassword?.message}
          ></Input>
        </div>
        <div className="button-container">
          <ButtonComponent type="submit" variant="brown" text="Cadastrar" />
          <label className="text-register">Já possui uma conta?</label>
          <ButtonComponent
            variant="white"
            text="Fazer login"
            onClick={handleBackToLogin}
          />
        </div>
      </div>
    </RegisterFormContainer>
  );
};
export default RegisterForm;
