import { UserAddressContainer } from "../../Styles/ComponentsStyle/UserAddress";
import { ButtonComponent } from "../Button";
import { useHistory } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../Input";

const UserAddress = () => {
  /*  const [userId] = useState(() => {
    const current = localStorage.getItem("userId") || "";
    return parseInt(current);
  });

  const usrToken = localStorage.getItem("token") || "";
 */

  const history = useHistory();

  const registerSchema = yup.object({
    street: yup
      .string()
      .max(150, "Campo obrigatório. Máximo de 150 caracteres.")
      .required("Endereço é obrigatório"),
    number: yup.number().required("Número é obrigatório"),
    state: yup
      .string()
      .max(40, "Campo obrigatório. Máximo de 40 caracteres.")
      .required("Estado é obrigatório"),
    city: yup
      .string()
      .max(40, "Campo obrigatório. Máximo de 50 caracteres.")
      .required("Cidade é obrigatório"),
    country: yup
      .string()
      .max(50, "Campo obrigatório. Máximo de 50 caracteres.")
      .required("País é obrigatório"),
    district: yup.string(),
    postalcode: yup
      .string()
      .max(9, "Campo obrigatório. Máximo de 50 caracteres.")
      .required("CEP é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleRegisterSubmit = (e) => {
    history.push("/user");
  };

  return (
    <UserAddressContainer onSubmit={handleSubmit(handleRegisterSubmit)}>
      <div className="center-mobile">
        <div className="title">
          <h1>Cadastrar Endereço</h1>
        </div>
        <div>
          <Input
            placeholder="Endereço"
            register={register}
            name="street"
            error={errors.street?.message}
          ></Input>
          <Input
            placeholder="Número"
            type="number"
            register={register}
            name="number"
            error={errors.number?.message}
          ></Input>
          <Input
            placeholder="Cidade"
            register={register}
            name="city"
            error={errors.city?.message}
          ></Input>
          <Input
            placeholder="Estado"
            register={register}
            name="state"
            error={errors.state?.message}
          ></Input>
          <Input
            placeholder="País"
            register={register}
            name="country"
            error={errors.country?.message}
          ></Input>
          <Input
            placeholder="CEP"
            register={register}
            name="postalcode"
            error={errors.postalcode?.message}
          ></Input>
        </div>

        <div className="button-container">
          <ButtonComponent type="none" variant="brown" text="Cadastrar" />
          <ButtonComponent
            variant="unfill"
            text="Voltar"
            onClick={() => history.push("/home")}
          />
        </div>
      </div>
    </UserAddressContainer>
  );
};
export default UserAddress;
