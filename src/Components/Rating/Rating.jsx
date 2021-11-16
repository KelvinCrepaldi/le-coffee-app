import { RatingContainer } from "../../Styles/ComponentsStyle/Rating";
import { ButtonComponent } from "../Button";

export const RatingComponent = () => {
  return (
    <RatingContainer>
      <div className="rate-container">
        <div className="rate-input">
          <span>Nome do usuário: </span>
          <input placeholder=" Adicionar uma avaliação..."></input>
        </div>
        <div className="rate-button">
          <ButtonComponent
            className="buttonCancel brown "
            variant="brown"
            text="Cancelar"
          ></ButtonComponent>
          <ButtonComponent
            className="buttonPost brown"
            variant="brown"
            text="Enviar"
          ></ButtonComponent>
        </div>
      </div>
      <div>
        <h1>Nome do usuário</h1>
        <nota> </nota>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.{" "}
        </span>
      </div>
    </RatingContainer>
  );
};
