import { createContext, useState } from "react";
import api from "../../Services";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

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

  const addUserAddress = (usrID, usrToken, data) => {
    const { city, state, postalcode, country, address, number } = data;
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
            address: address,
            number: number,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          console.log(res.data);
          console.log("Done");
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

  const getUserAddress = (usrID, usrToken) => {
    if (usrID !== "") {
      api
        .get(`userAddress?userId=${usrID}`, {
          headers: {
            Authorization: `Bearer ${usrToken}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          console.log("Done");
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

  return (
    <UserContext.Provider
      value={{
        getUser,
        user,
        changeUserData,
        addUserAddress,
        getUserAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
