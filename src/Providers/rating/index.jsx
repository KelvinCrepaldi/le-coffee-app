import { createContext, useState } from "react";
import api from "../../Services";

export const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [rating, setRating] = useState([]);

  const getRatingProducts = () => {
    api
      .get("ratingProducts")
      .then((response) => {
        setRating(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getRatingByProductId = (id) => {
    api
      .get(`ratingProducts?productsId=${id}`)
      .then((response) => {
        setRating(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleRating = (data, token) => {
    api
      .post("ratingProducts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {})
      .catch((error) => console.log(error));
  };

  const deleteRating = (ratingId, token) => {
    api
      .delete(`ratingProducts/${ratingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(console.log("deleted"))
      .catch((error) => console.log(error));
  };

  return (
    <RatingContext.Provider
      value={{
        rating,
        getRatingByProductId,
        getRatingProducts,
        handleRating,
        deleteRating,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
};
