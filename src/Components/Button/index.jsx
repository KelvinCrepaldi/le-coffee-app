import { ButtonContainer } from "../../Styles/ComponentsStyle/Button";

export const ButtonComponent = ({ variant, text, ...rest }) => {
  return (
    <>
      {variant === "brown" && (
        <ButtonContainer className="brown" {...rest}>
          {text}
        </ButtonContainer>
      )}

      {variant === "white" && (
        <ButtonContainer className="white" variant="white" {...rest}>
          {text}
        </ButtonContainer>
      )}

      {variant === "unfill" && (
        <ButtonContainer className="unfill" {...rest}>
          {text}
        </ButtonContainer>
      )}
    </>
  );
};
