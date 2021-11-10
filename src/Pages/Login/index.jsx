import { LoginForm } from "../../Components/LoginForm";
import { Page } from "../../Styles/PagesStyles/Login";
import logo from "./Logo-main-black-4.png";
const LoginPage = () => {
  return (
    <Page>
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
