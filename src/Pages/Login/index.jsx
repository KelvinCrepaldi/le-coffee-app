import { LoginForm } from "../../Components/LoginForm";
import { Page } from "../../Styles/PagesStyles/Login";
import logo from "../../assets/Logo-main-black-4.png";
import bgImageLeft from "../../assets/cover-rodape.png";
import bgImageRight from "../../assets/about-us-cover-2.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ButtonComponent } from "../../Components/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
const LoginPage = () => {
  const history = useHistory();

  return (
    <Page>
      <div className="bgContent">
        <img className="imgLeft" src={bgImageLeft} alt="Mug logo" />
        <img className="imgRight" src={bgImageRight} alt="Mug logo" />
      </div>
      <div className="toLogin">
        <button onClick={() => history.push("/register")}>
          <AiOutlineArrowLeft className="icon" />
        </button>
        <p>Cadastro</p>
      </div>
      <div className="topContent">
        <img src={logo} alt="Mug logo" />
      </div>
      <div className="formContent">
        <h1>
          Olá, <br /> <span>seja bem vindo(a)!</span>{" "}
        </h1>
        <LoginForm />
        <ButtonComponent
          variant="white"
          text="Registrar-se"
          className="bttnRegister"
          onClick={() => history.push("/register")}
        />
        <p style={{ marginTop: "10px", fontSize: "12px" }}>
          Voltar para o{" "}
          <Link style={{ color: "#AA6655" }} to="/home">
            {" "}
            inicio
          </Link>
        </p>
      </div>
    </Page>
  );
};

export default LoginPage;
