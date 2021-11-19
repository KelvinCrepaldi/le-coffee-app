import { createContext, useState } from "react";
import { ErrorAlert, SuccessAlert } from "../../Components/Alerts";
import api from "../../Services";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userAddress, setUserAddress] = useState([]);
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
            ErrorAlert(`User ${error.response.statusText}`, "top-left");
          }
        });
    }
  };

  // Function change name, email and password
  const changeUserData = (usrID, usrToken, data) => {
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
          SuccessAlert("Dados alterados com sucesso:", "center");
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            ErrorAlert("Usuário não cadastrado", "top-left");
          }
        });
    }
  };

  const addUserAddress = (usrID, usrToken, data) => {
    const { city, state, postalcode, country, street, number } = data;
    const token = JSON.parse(usrToken);
    if (usrID !== "") {
      api
        .post(
          "userAddress",
          {
            userId: usrID,
            city: city,
            state: state,
            postalcode: postalcode,
            country: country,
            street: street,
            number: number,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => SuccessAlert("Endereço cadastrado", "center"))
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            ErrorAlert(`${error.response.statusText}`, "top-left");
          }
        });
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const getUserAddress = (usrID, usrToken) => {
    if (usrID !== "") {
      api
        .get(`userAddress?userId=${usrID}`, {
          headers: {
            Authorization: `Bearer ${usrToken}`,
          },
        })
        .then((res) => {
          setUserAddress(res.data);
        })
        .catch((error) => {
          if (error.response) {
            ErrorAlert("Endereço(s) não encontrados(s)");
          }
        });
    }
  };

  return (
    <UserContext.Provider
      value={{
        getUser,
        user,
        changeUserData,
        modalIsOpen,
        openModal,
        closeModal,
        addUserAddress,
        getUserAddress,
        userAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
