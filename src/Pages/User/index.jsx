import { CardTop, Page } from "../../Styles/PagesStyles/User";
import { useHistory } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const User = () => {
  const history = useHistory();

  return (
    <Page>
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="Title">Minha Conta</div>
      <button type="submit" className="Logout">
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
