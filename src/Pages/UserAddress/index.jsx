import { useHistory } from "react-router-dom";

import UserAddress from "../../Components/UserAddress";
import { Page } from "../../Styles/PagesStyles/UserAddress";

import { ButtonComponent } from "../../Components/Button";

const UserAddress = () => {
  const history = useHistory();

  const handleBackToUserPage = () => {
    history.push("/user");
  };

  return (
    <div>
      <UserAddress />
    </div>
  );
};

export default UserAddress;
