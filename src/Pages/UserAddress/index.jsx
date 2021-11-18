import { useHistory } from "react-router-dom";

import UserAddress from "../../Components/UserAddress";

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
