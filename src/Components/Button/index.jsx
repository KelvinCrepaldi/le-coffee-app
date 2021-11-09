import { ButtonContainer } from "../../Styles/ComponentsStyle/Button";

const ButtonComponent = ({ buttonFunction }, { ...rest }) => {
  return (
    <>
      {buttonFunction === "login" && (
        <ButtonContainer variant="brown" {...rest}>
          Entrar
        </ButtonContainer>
      )}
      {buttonFunction === "signup" && (
        <ButtonContainer variant="brown" {...rest}>
          Cadastrar
        </ButtonContainer>
      )}
      {buttonFunction === "gotoLogin" && (
        <ButtonContainer variant="white" {...rest}>
          Fazer login
        </ButtonContainer>
      )}
      {buttonFunction === "gotoRegister" && (
        <ButtonContainer variant="white" {...rest}>
          Registrar-se
        </ButtonContainer>
      )}
    </>
  );
};

export default ButtonComponent;
