import { createContext, useState } from "react";
import api from "../../Services";

export const CommentContext = createContext();

export const RatingProvider = ({ children }) => {
  const [rating, setRating] = useState([]);
  
  const getRatingProducts = () => {
    api.get("ratingProducts")
        .then((response) => {
            console.log(response.data);
            setRating(response.data);
        })
        .catch((error) => console.log(error))
  };

  const handleRating = (data, token) => {
      api.post("ratingProducts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
          console.log(response.data);
      })
      .catch((error) => console.log(error));
  }

  const deleteRating =  (ratingId, token) => {
    api.delete(`ratingProducts/${ratingId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(console.log("deleted"))
    .catch((error) => console.log(error));
  }

  return (
    <CommentContext.Provider value={{ getRatingProducts, handleRating, deleteRating }}>{children}</CommentContext.Provider>
  );
};
