import { Input } from "../Input";
import { ButtonComponent } from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginFormContainer } from "../../Styles/ComponentsStyle/LoginForm";

export const LoginForm = () => {
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
    console.log(data);
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(login)}>
      <Input
        placeholder="Email"
        register={register}
        name="email"
        error={errors.email?.message}
      />

      <Input
        placeholder="Senha"
        register={register}
        name="password"
        error={errors.password?.message}
      />

      <div className="bttnContainer">
        {/* <button className="bttnLogin" type="submit">
          Entrar
        </button> */}
        <ButtonComponent type="submit" variant="brown" text="Entrar" />
      </div>
    </LoginFormContainer>
  );
};
