import { RegisterFormContainer } from "../../Styles/ComponentsStyle/RegisterForm";
import ButtonComponent from "../../Components/Button";

const RegisterForm = () => {
  return (
    <RegisterFormContainer>
      <div>
        <div className="title">
          <h1>Registre-se</h1>
          <span>
            e prove dos <br />
            melhores cafés
          </span>
        </div>
        <form>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
        </form>
      </div>

      <div className="button-container">
        <ButtonComponent variant="brown" text="Cadastrar" />
        <label className="text-register">Já possui uma conta?</label>
        <ButtonComponent variant="white" text="Fazer login" />
      </div>
    </RegisterFormContainer>
  );
};
export default RegisterForm;
