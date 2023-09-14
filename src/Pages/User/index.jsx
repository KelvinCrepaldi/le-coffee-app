import { CardTop, Page } from "../../Styles/PagesStyles/User";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginContext } from "../../Providers/loginProvider";
import { UserContext } from "../../Providers/userProvider";
import Navbar from "../../Components/Navbar";
import { ButtonComponent } from "../../Components/Button";

import Cover from "../../assets/cover-user.png";

const User = () => {
  const history = useHistory();
  const { logout } = useContext(LoginContext);
  const { user } = useContext(UserContext);

  /*   useEffect(() => {
    getUser(userId, usrToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  return (
    <Page>
      <img src={Cover} alt="Cover" className="Cover" />
      <div className="NavBar">
        <Navbar className="nv" />
      </div>
      <div className="Title">Minha Conta</div>
      <p>Bem-vindo, {user.name}</p>
      <ButtonComponent
        variant="brown"
        text="Logout"
        onClick={() => logout(history)}
      />

      <div className="Card Account">
        <CardTop>
          <div>Detalhes da Conta</div>
        </CardTop>
        <div className="CardContent">
          <div>Nome: {user.name}</div>
          <div>Email: {user.email}</div>
          <ButtonComponent
            variant="brown"
            text="Alterar Dados"
            onClick={() => history.push("/user/change")}
          />
        </div>
      </div>
      <div className="Card Orders">
        <CardTop>
          <div>Endereços</div>
        </CardTop>
        <div className="CardContent">
          <Link to="/user/address">Cadastrar Endereço</Link>
          <Link to="/user/showAddress">Ver Endereços</Link>
        </div>
      </div>
    </Page>
  );
};

export default User;
