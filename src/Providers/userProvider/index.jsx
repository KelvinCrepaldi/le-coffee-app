import { createContext, useState } from "react";
import api from "../../Services";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

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
    api.post("userCart", newPdt, {
      headers: {
        Authorization: `Bearer ${usrToken}`,
      },
    })
    .then(console.log("added"));
  };

  const removeFromCart = (pdtID, usrToken) => {
    api
      .delete(`userCart/${pdtID}`, {
        headers: {
          Authorization: `Bearer ${usrToken}`,
        },
      })
      .then(console.log("deleted"));
  };

  return (
    <UserContext.Provider
      value={{ getCartList, cartList, addToCart, removeFromCart }}
    >
      {children}
    </UserContext.Provider>
  );
};
