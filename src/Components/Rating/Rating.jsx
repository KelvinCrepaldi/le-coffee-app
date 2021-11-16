import { RatingContainer } from "../../Styles/ComponentsStyle/Rating";
import { ButtonComponent } from "../Button";
import { useState, useContext } from "react";
import { RatingContext } from "../../Providers/rating";

export const RatingComponent = ({ product }) => {
  const [inputMessage, setInputMessage] = useState("");
  /* const userName = localStorage.getItem("userName"); */
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = parseInt(localStorage.getItem("userId"));
  const { handleRating } = useContext(RatingContext);

  const changeInputMessage = (e) => {
    setInputMessage(e);
  };

  const handleSendRate = () => {
    const obj = {
      userId: userId,
      productsId: product.id,
      text: inputMessage,
      rating: 1,
    };
    console.log(obj);
    console.log(token);

    handleRating(obj, token);
  };

  return (
    <RatingContainer>
      <div className="rate-container">
        <div className="rate-input">
          <span>Nome do usuário: </span>
          <input
            placeholder=" Adicionar uma avaliação..."
            value={inputMessage}
            onChange={(e) => changeInputMessage(e.target.value)}
          ></input>
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
            onClick={handleSendRate}
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
