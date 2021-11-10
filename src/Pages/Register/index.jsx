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
          <ButtonComponent variant="brown" text="Cadastrar" />
          <label className="text-register">Já possui uma conta?</label>
          <ButtonComponent variant="white" text="Fazer login" />
        </div>
      </PageContent>
    </Page>
  );
};

export default Register;
