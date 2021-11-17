import { createContext, useState } from "react";
// import { ErrorAlert, SuccessAlert } from "../../Components/Alerts";
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

  return (
    <UserContext.Provider
      value={{
        getUser,
        user,
        changeUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
