import UserForm from "../../Components/UserForm";
import Navbar from "../../Components/Navbar";
import { Page } from "../../Styles/PagesStyles/ChangeUserData";

const ChangeUserData = () => {

  return (
    <Page>
      <div className="navBar">
       <Navbar /> 
      </div>
      
      <UserForm />
    </Page>
  );
};

export default ChangeUserData;
