import { Page, PageContent } from "../../Styles/PagesStyles/Register";
import ButtonComponent from "../../Components/Button/";

const Register = () => {
  return (
    <Page>
      <PageContent>
        <div>
          <div className="title">
            <h1>Registre-se</h1>
            <span>
              e prove dos <br />
              melhores cafés
            </span>
          </div>
          <form>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
          </form>
        </div>

        <div className="button-container">
          <ButtonComponent buttonFunction="signup" />
          <label className="text-register">Já possui uma conta?</label>
          <ButtonComponent buttonFunction="gotoLogin" />
        </div>
      </PageContent>
    </Page>
  );
};

export default Register;
