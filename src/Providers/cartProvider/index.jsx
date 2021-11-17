import { createContext, useState } from "react";
import { ErrorAlert, SuccessAlert } from "../../Components/Alerts";
import api from "../../Services";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const getCartList = (usrID) => {
    if (usrID !== "") {
      api
        .get(`users/${usrID}?_embed=userCart`)
        .then((res) => {
          setCartList(res.data.userCart);
        })
        .catch((err) => console.log(err));
    }
  };

  const addToCart = (newPdt, usrToken) => {
    api
      .post("userCart", newPdt, {
        headers: {
          Authorization: `Bearer ${usrToken}`,
        },
      })
      .then((res) => SuccessAlert("Adicionado", "top-right"))
      .catch((err) =>
        ErrorAlert("Não foi possível adicionar o produto", "top-right")
      );
  };

  const removeFromCart = (pdtID, usrToken) => {
    api
      .delete(`userCart/${pdtID}`, {
        headers: {
          Authorization: `Bearer ${usrToken}`,
        },
      })
      .then((res) => SuccessAlert("Removido", "top-right"))
      .catch((err) =>
        ErrorAlert("Não foi possível remover o produto", "top-right")
      );
  };

  return (
    <CartContext.Provider
      value={{
        getCartList,
        cartList,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
