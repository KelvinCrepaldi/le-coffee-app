import UserForm from "../../Components/UserForm";
import Navbar from "../../Components/Navbar";
import { Page } from "../../Styles/PagesStyles/ChangeUserData";
import Cover from "../../assets/cover-user.png";

const ChangeUserData = () => {

  return (
    <Page>
      <img src={Cover} alt="Cover" className="Cover" />
      <div className="navBar">
       <Navbar /> 
      </div>
      
      <UserForm />
    </Page>
  );
};

export default ChangeUserData;
