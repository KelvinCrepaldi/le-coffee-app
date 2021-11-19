import { UserFormContainer } from "../../Styles/ComponentsStyle/UserForm";
import { ButtonComponent } from "../../Components/Button";

import { UserContext } from "../../Providers/userProvider";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../Input";

const UserForm = () => {
  const [userId] = useState(() => {
    const current = localStorage.getItem("userId") || "";
    return parseInt(current);
  });

  const usrToken = localStorage.getItem("token") || "";

  const { user, getUser, changeUserData } = useContext(UserContext);

  useEffect(() => {
    getUser(userId, usrToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();

  console.log(user);

  const registerSchema = yup.object({
    name: yup
      .string()
      .max(48, "Campo obrigatório. Máximo de 48 dígitos.")
      .required("Nome é obrigatório"),
    email: yup
      .string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório"),
    password: yup.string().min(6, "Campo obrigatório. Mínimo de 6 dígitos"),
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
    console.log(e);
    changeUserData(userId, usrToken, e);
    history.push("/user");
  };

  return (
    <UserFormContainer onSubmit={handleSubmit(handleRegisterSubmit)}>
      <div className="center-mobile">
        <div className="title">
          <h1>Alterar Dados</h1>
        </div>
        <div>
          <Input
            placeholder={user.name}
            register={register}
            name="name"
            error={errors.name?.message}
          ></Input>
          <Input
            placeholder={user.email}
            register={register}
            name="email"
            error={errors.email?.message}
          ></Input>
          <Input
            placeholder="Digite uma nova senha"
            type="password"
            register={register}
            name="password"
            error={errors.password?.message}
          ></Input>
          <Input
            placeholder="Confirme a nova senha"
            type="password"
            register={register}
            name="secondPassword"
            error={errors.secondPassword?.message}
          ></Input>
        </div>

        <div className="button-container">
          <ButtonComponent type="submit" variant="brown" text="Alterar" />
          <ButtonComponent
            type="submit"
            variant="unfill"
            text="Voltar"
            onClick={() => history.push("/user")}
          />
        </div>
      </div>
    </UserFormContainer>
  );
};
export default UserForm;
