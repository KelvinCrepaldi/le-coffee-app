import { useHistory } from "react-router-dom";
import bgImageLeft from "./cover-rodape.png";
import bgImageRight from "./about-us-cover-2.png";
import RegisterForm from "../../Components/RegisterForm";
import { Page } from "../../Styles/PagesStyles/Register";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Register = () => {
  const history = useHistory();

  const handleBackToLogin = () => {
    history.push("/login");
  };

  return (
    <Page>
      <div className="bgContent">
        <img className="imgLeft" src={bgImageLeft} alt="Mug logo" />
        <img className="imgRight" src={bgImageRight} alt="Mug logo" />
      </div>
      <div className="toLogin">
        <button onClick={handleBackToLogin}>
          <AiOutlineArrowLeft className="icon" />
        </button>
        <p>Ir para Login</p>
      </div>
      <div className="formContent">
        <RegisterForm />
      </div>
    </Page>
  );
};

export default Register;
