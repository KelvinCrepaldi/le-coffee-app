import { Page, PageContent } from "../../Styles/PagesStyles/Register";

const Register = () => {
  return (
    <Page>
      <PageContent>
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
        <div>
          <button>Cadastrar</button>
          <label>Já possui uma conta?</label>
          <button>Fazer login</button>
        </div>
      </PageContent>
    </Page>
  );
};

export default Register;
