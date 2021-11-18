import { CardTop, Page } from "../../Styles/PagesStyles/User";
import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginContext } from "../../Providers/loginProvider";
import { UserContext } from "../../Providers/userProvider";
import Navbar from "../../Components/Navbar";

const User = () => {
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
    <Page>
      <div className="NavBar">
        <Navbar className="nv" />
      </div>
      <div className="Title">Minha Conta</div>
      <p>Bem-vindo, {user.name}</p>
      <button type="submit" onClick={() => logout(history)} className="Logout">
        Logout
      </button>

      <div className="Card Account">
        <CardTop>
          <div>Detalhes da Conta</div>
        </CardTop>
        <div className="CardContent">
          <Link to="/user">Ver Meus Dados</Link>
          <Link to="/user/change">Alterar Dados</Link>
        </div>
      </div>

      <div className="Card Orders">
        <CardTop>
          <div>Endereços</div>
        </CardTop>
        <div className="CardContent">
          <Link to="/user/address">Cadastrar Endereço</Link>
          <Link to="/user">Ver Endereços</Link>
          <Link to="/user">Alterar Endereços</Link>
        </div>
      </div>
    </Page>
  );
};

export default User;
