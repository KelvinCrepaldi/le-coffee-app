import { Page } from "../../Styles/PagesStyles/UserAddress";
import Navbar from "../../Components/Navbar";
import UserAddress from "../../Components/UserAddress";
const UserAddressPage = () => {
  return (
    <Page>
      <div className="navBar">
        <Navbar />
      </div>
      <UserAddress />
    </Page>
  );
};

export default UserAddressPage;
