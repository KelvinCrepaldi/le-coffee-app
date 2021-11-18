import { CardTop, Page } from "../../Styles/ComponentsStyle/ShowAddress";

export const User = () => {
  return (
    <Page>
      <div className="Title">Meus Endereços Cadastrados</div>

      <div className="Card Address">
        <CardTop>
          <div>Endereço</div>
        </CardTop>
        <div className="CardContent">
          <div>Address</div>
        </div>
      </div>
    </Page>
  );
};
