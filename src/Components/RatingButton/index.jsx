import { GiCoffeeBeans } from "react-icons/gi";
import { ButtonContainer } from "../../Styles/ComponentsStyle/RatingButton";
import ReactStars from "react-rating-stars-component";

export const RatingButton = ({ setRatingValue }) => {
  const ratingChanged = (value) => {
    setRatingValue(value);
  };

  return (
    <ButtonContainer>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        value={1}
        size={30}
        emptyIcon={<GiCoffeeBeans />}
        fullIcon={<GiCoffeeBeans />}
        activeColor="#ffd700"
      />
    </ButtonContainer>
  );
};
