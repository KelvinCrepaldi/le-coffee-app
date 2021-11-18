import { ButtonComponent } from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import { ShowAddress } from "../../Components/ShowAddress";
import { Page } from "../../Styles/PagesStyles/ShowAddress";


const ShowAddressPage = () => {
  return (
    <Page>
      <div className="navBar">
        <Navbar />
      </div>

      <ShowAddress />
    </Page>
  );
};

export default ShowAddressPage;
