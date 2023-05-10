import { createContext, useState } from "react";
import api from "../../Services";

export const RatingContext = createContext();

const ratings = [
  {
    userId: 1,
    productsId: 1,
    text: "Muito bom! Chegou em 15 dias.",
    rating: 5,
    id: 1,
    name: "olie",
  },
  {
    userId: 2,
    productsId: 1,
    text: "Adorei o sabor, gosto de café com muito açúcar",
    rating: 5,
    id: 2,
    name: "pinguim",
  },
  {
    userId: 3,
    productsId: 1,
    text: "Esperava mais, mas da pra beber.",
    rating: 4,
    id: 3,
    name: "Miguel Arthur",
  },
  {
    userId: 4,
    productsId: 1,
    text: "Não gostei!! Veio do tipo grãos em vez de moído!",
    rating: 2,
    id: 4,
    name: "Alice in Wonderland",
  },
  {
    userId: 5,
    productsId: 1,
    text: "Vou comprar mais, melhor café que já experimentei!",
    rating: 5,
    id: 5,
    name: "Leonardo da Vinci",
  },
  {
    userId: 6,
    productsId: 1,
    text: "Ok, é bom.",
    rating: 3,
    id: 6,
    name: "Neo",
  },
  {
    userId: 1,
    productsId: 2,
    text: "Muito bom! Chegou em 15 dias.",
    rating: 5,
    id: 7,
    name: "olie",
  },
  {
    userId: 2,
    productsId: 2,
    text: "Adorei o sabor, gosto de café com muito açúcar",
    rating: 5,
    id: 8,
    name: "pinguim",
  },
  {
    userId: 3,
    productsId: 2,
    text: "Esperava mais, mas da pra beber.",
    rating: 4,
    id: 9,
    name: "Miguel Arthur",
  },
  {
    userId: 4,
    productsId: 2,
    text: "Não gostei!! Veio do tipo grãos em vez de moído!",
    rating: 2,
    id: 10,
    name: "Alice in Wonderland",
  },
  {
    userId: 5,
    productsId: 2,
    text: "Vou comprar mais, melhor café que já experimentei!",
    rating: 5,
    id: 11,
    name: "Leonardo da Vinci",
  },
  {
    userId: 6,
    productsId: 2,
    text: "Ok, é bom.",
    rating: 3,
    id: 12,
    name: "Neo",
  },
  {
    userId: 1,
    productsId: 3,
    text: "Muito bom! Chegou em 15 dias.",
    rating: 5,
    id: 13,
    name: "olie",
  },
  {
    userId: 2,
    productsId: 3,
    text: "Adorei o sabor, gosto de café com muito açúcar",
    rating: 5,
    id: 14,
    name: "pinguim",
  },
  {
    userId: 3,
    productsId: 3,
    text: "Esperava mais, mas da pra beber.",
    rating: 4,
    id: 15,
    name: "Miguel Arthur",
  },
  {
    userId: 4,
    productsId: 3,
    text: "Não gostei!! Veio do tipo grãos em vez de moído!",
    rating: 2,
    id: 16,
    name: "Alice in Wonderland",
  },
  {
    userId: 5,
    productsId: 3,
    text: "Vou comprar mais, melhor café que já experimentei!",
    rating: 5,
    id: 17,
    name: "Leonardo da Vinci",
  },
  {
    userId: 6,
    productsId: 3,
    text: "Ok, é bom.",
    rating: 3,
    id: 18,
    name: "Neo",
  },
];

export const RatingProvider = ({ children }) => {
  const [rating, setRating] = useState(ratings);

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
