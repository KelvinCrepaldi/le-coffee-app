import { LoginForm } from "../../Components/LoginForm";
import { Page } from "../../Styles/PagesStyles/Login";

import logo from "../../assets/Logo-main-black-4.png";
import bgImageLeft from "../../assets/cover-rodape.png";
import bgImageRight from "../../assets/about-us-cover-2.png";

import { AiOutlineArrowLeft } from "react-icons/ai";

const LoginPage = () => {
  return (
    <Page>
      <div className="bgContent">
        <img className="imgLeft" src={bgImageLeft} alt="Mug logo" />
        <img className="imgRight" src={bgImageRight} alt="Mug logo" />
      </div>
      <div className="toLogin">
        <button>
          <AiOutlineArrowLeft className="icon"/>
        </button>
        <p>Cadastro</p>
      </div>
      <div className="topContent">
        <img src={logo} alt="Mug logo" />
      </div>
      <div className="formContent">
        <h1>Bem vindo(a)!</h1>
        <LoginForm />
      </div>
    </Page>
  );
};

export default LoginPage;
