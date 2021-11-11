import { ButtonContainer } from "../../Styles/ComponentsStyle/Button";

export const ButtonComponent = ({ variant, text, ...rest }) => {
  return (
    <>
      {variant === "brown" && (
        <ButtonContainer variant="brown" {...rest}>
          {text}
        </ButtonContainer>
      )}

      {variant === "white" && (
        <ButtonContainer variant="white" {...rest}>
          {text}
        </ButtonContainer>
      )}
    </>
  );
};