import { createContext, useState } from "react";
import { ErrorAlert, SuccessAlert } from "../../Components/Alerts";
import api from "../../Services";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [cartList, setCartList] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const getUser = (usrID, usrToken) => {
    if (usrID !== "") {
      api
        .get(`users/${usrID}`, {
          headers: {
            Authorization: `Bearer ${usrToken}`,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }
  };

  // Function change name, email and password
  const changeUserData = (usrID, usrToken, data) => {
    console.log(data);
    const { email, password, name } = data;
    if (usrID !== "") {
      api
        .put(
          `users/${usrID}`,
          {
            headers: {
              Authorization: `Bearer ${usrToken}`,
            },
          },
          {
            email: email,
            password: password,
            userId: usrID,
            name: name,
          }
        )
        .then((res) => {
          setUser(res.data);
          console.log("Dados alterados com sucesso:", res.data);
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }
  };

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

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
    <UserContext.Provider
      value={{
        getUser,
        user,
        changeUserData,
        getCartList,
        cartList,
        addToCart,
        removeFromCart,
        modalIsOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
