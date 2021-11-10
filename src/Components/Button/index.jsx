import { ButtonContainer } from "../../Styles/ComponentsStyle/Button";

const ButtonComponent = ({ variant, text, ...rest }) => {
  return (
    <>
      {variant === "brown" && (
        <ButtonContainer variant="brown" {...rest}>
          {text}
        </ButtonContainer>
      )}

      {variant === "white" && (
        <ButtonContainer variant="white" {...rest}></ButtonContainer>
      )}
    </>
  );
};

export default ButtonComponent;
