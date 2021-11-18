import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginContext } from "../../Providers/loginProvider";
import { UserContext } from "../../Providers/userProvider";
import Navbar from "../../Components/Navbar";

const ShowAddress = () => {
  const [userId] = useState(() => {
    const current = localStorage.getItem("userId") || "";
    return parseInt(current);
  });

  const usrToken = localStorage.getItem("token") || "";

  const history = useHistory();

  const { logout } = useContext(LoginContext);

  const { user, getUser } = useContext(UserContext);

  useEffect(() => {
    getUser(userId, usrToken);
  }, []);

  return (
    <>
      <Navbar />
      <ShowAddress />
    </>
  );
};

export default ShowAddress;
