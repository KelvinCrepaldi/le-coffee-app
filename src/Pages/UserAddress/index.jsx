import { Page } from "../../Styles/PagesStyles/UserAddress";
import Navbar from "../../Components/Navbar";
import UserAddress from "../../Components/UserAddress";
import Cover from "../../assets/cover-user.png";

const UserAddressPage = () => {
  return (
    <Page>
      <img src={Cover} alt="Cover" className="Cover" />
      <div className="navBar">
        <Navbar />
      </div>
      <UserAddress />
    </Page>
  );
};

export default UserAddressPage;
