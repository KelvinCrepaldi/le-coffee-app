import { LoginForm } from '../../Components/LoginForm';
import { Page } from '../../Styles/PagesStyles/Login';
import logo from './Logo-main-black-4.png';
const LoginPage = () => {
  return (
    <Page>
    <img src={logo} alt="Mug logo" />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
    <div>
      <h1>Bem vindo</h1>
      <LoginForm/>
    </div>
    </Page>
  );
};

export default LoginPage;
