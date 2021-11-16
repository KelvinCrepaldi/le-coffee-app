import { CardTop, Page } from "../../Styles/PagesStyles/User";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../../Providers/loginProvider";
import Navbar from "../../Components/Navbar";

const User = () => {
  const history = useHistory();

  const { logout } = useContext(LoginContext);

  return (
    <Page>
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="Title">Minha Conta</div>
      <button type="submit" onClick={logout} className="Logout">
        Logout
      </button>

      <div className="Card Account">
        <CardTop>
          <div>Detalhes da Conta</div>
        </CardTop>
        <div className="CardContent">
          <div>Alterar dados da conta</div>
          <div>Excluir conta</div>
        </div>
      </div>

      <div className="Card Orders">
        <CardTop>
          <div>Meus Pedidos</div>
        </CardTop>
        <div className="CardContent">
            <div>Produtos cadastrados</div>
        </div>
      </div>
    </Page>
  );
};

export default User;
