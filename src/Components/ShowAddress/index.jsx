import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/userProvider";
import { CardTop, Page } from "../../Styles/ComponentsStyle/ShowAddress";

export const ShowAddress = () => {
  const { getUserAddress, userAddress } = useContext(UserContext);

  const [userId] = useState(() => {
    const current = localStorage.getItem("userId") || "";
    return parseInt(current);
  });

  const usrToken = localStorage.getItem("token") || "";

  useEffect(() => {
    getUserAddress(userId, usrToken);
  }, []);

  console.log("Array:", userAddress);

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
              <div>CEP: {elem.postalCode}</div>
              <div>
                {elem.city} - {elem.state}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Page>
  );
};
