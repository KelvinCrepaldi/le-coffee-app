import { useContext } from "react";
import { RatingContainer, RateCard } from "../../Styles/ComponentsStyle/Rating";
import { ButtonComponent } from "../Button";
import { RatingContext } from "../../Providers/rating";
import { useEffect, useState } from "react";

export const RatingComponent = ({ product }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = parseInt(localStorage.getItem("userId"));
  const userName = "Nome de usuario"; /* localStorage.getItem("token"); */

  const { rating, getRatingByProductId, handleRating } =
    useContext(RatingContext);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    getRatingByProductId(product.id);
  }, [getRatingByProductId, product.id]);

  const changeInputText = (e) => {
    setInputText(e);
  };

  const handleSendRate = () => {
    const data = {
      userId: userId,
      productsId: product.id,
      text: inputText,
      rating: 5,
      name: userName,
    };
    handleRating(data, token);
    setInputText("");
  };
  const handleCancelSendRate = () => {
    setInputText("");
  };

  return (
    <RatingContainer>
      <div className="rate-container">
        <div className="rate-input">
          <span>Nome do usuário: </span>
          <input
            value={inputText}
            onChange={(e) => changeInputText(e.target.value)}
            placeholder=" Adicionar uma avaliação..."
          ></input>
        </div>
        <div className="rate-button">
          <ButtonComponent
            className="buttonCancel brown "
            variant="brown"
            text="Cancelar"
            onClick={handleCancelSendRate}
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
        {rating.map((e) => (
          <RateCard>
            <h2>Nome do usuário</h2>
            <span className="rating">{e.rating}</span>
            <span className="text">{e.text}</span>
          </RateCard>
        ))}
      </div>
    </RatingContainer>
  );
};
