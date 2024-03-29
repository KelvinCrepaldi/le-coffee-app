import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Providers/userProvider";
import { CardTop, Page } from "../../Styles/ComponentsStyle/ShowAddress";
import { ButtonComponent } from "../Button";

export const ShowAddress = () => {
  const { userAddress } = useContext(UserContext);

  const history = useHistory();

  /* const [userId] = useState(() => {
    const current = localStorage.getItem("userId") || "";
    return parseInt(current);
  });

  const [userToken] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return JSON.parse(current);
  });
  useEffect(() => {
    getUserAddress(userId, userToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  return (
    <Page>
      <div className="Title">Meus Endereços</div>
      {userAddress.map((elem) => (
        <div className="Card Address">
          <CardTop>
            <div>Endereço {elem.id}</div>
          </CardTop>
          <div className="CardContent">
            <div>
              <div>
                Rua: {elem.street}, {elem.number}
              </div>
              <div>CEP: {elem.postalcode}</div>
              <div>
                {elem.city} - {elem.state}
              </div>
            </div>
          </div>
        </div>
      ))}
      <ButtonComponent
        variant="brown"
        text="Voltar"
        onClick={() => history.push("/user")}
      />
    </Page>
  );
};
