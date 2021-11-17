import { useContext } from "react";
import { RatingContainer, RateCard } from "../../Styles/ComponentsStyle/Rating";
import { ButtonComponent } from "../Button";
import { RatingContext } from "../../Providers/rating";
import { useEffect, useState } from "react";
import { RatingButton } from "../RatingButton";

export const RatingComponent = ({ product, setRateMedia }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = parseInt(localStorage.getItem("userId"));
  const userName = localStorage.getItem("userName");
  const [ratingValue, setRatingValue] = useState();
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
      rating: ratingValue,
      name: userName,
    };
    handleRating(data, token);
    setInputText("");
  };
  const handleCancelSendRate = () => {
    setInputText("");
  };

  const mediaFilter = (number) => {
    return rating.filter((e) => e.rating === number).length;
  };

  const rateList = {
    5: mediaFilter(5),
    4: mediaFilter(4),
    3: mediaFilter(3),
    2: mediaFilter(2),
    1: mediaFilter(1),
  };

  const media =
    (5 * rateList[5] +
      4 * rateList[4] +
      3 * rateList[3] +
      2 * rateList[2] +
      1 * rateList[1]) /
    (rateList[5] + rateList[4] + rateList[3] + rateList[2] + rateList[1]);

  setRateMedia(media);
  return (
    <RatingContainer>
      <div className="rate-container">
        <div className="rate-input">
          <span>{userName}</span>
          <input
            value={inputText}
            onChange={(e) => changeInputText(e.target.value)}
            placeholder=" Adicionar uma avaliação..."
          ></input>
        </div>

        <div className="rate-button">
          <RatingButton setRatingValue={setRatingValue} />
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
