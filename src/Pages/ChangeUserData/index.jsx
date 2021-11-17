import { useHistory } from "react-router-dom";

import logo from "../../assets/Logo-main-black-4.png";
import bgImageLeft from "../../assets/cover-rodape.png";
import bgImageRight from "../../assets/about-us-cover-2.png";
import UserForm from "../../Components/UserForm";
import { Page } from "../../Styles/PagesStyles/Register";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ProductComponent } from "../../Components/ProductComponent";

const ChangeUserData = () => {
  const history = useHistory();

  const handleBackToUserPage = () => {
    history.push("/user");
  };

  return (
    <Page>
      <div className="bgContent">
        <img className="imgLeft" src={bgImageLeft} alt="Mug logo" />
        <img className="imgRight" src={bgImageRight} alt="Mug logo" />
      </div>
      <div className="toLogin">
        <button onClick={handleBackToUserPage}>
          <AiOutlineArrowLeft className="icon" />
        </button>
        <p>Ir para Página do Usuário</p>
      </div>
      <div className="formContent">
        <UserForm />
      </div>
    </Page>
  );
};

export default ChangeUserData;