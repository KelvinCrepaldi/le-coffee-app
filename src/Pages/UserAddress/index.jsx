import { useHistory } from "react-router-dom";
import { ButtonComponent } from "../../Components/Button";

import UserAddress from "../../Components/UserAddress";

const UserAddressPage = () => {
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

export default UserAddressPage;
