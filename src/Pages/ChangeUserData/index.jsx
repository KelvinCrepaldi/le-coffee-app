import { useHistory } from "react-router-dom";
import UserForm from "../../Components/UserForm";
import Navbar from "../../Components/Navbar";
import { Page } from "../../Styles/PagesStyles/ChangeUserData";

const ChangeUserData = () => {
  const history = useHistory();

  const handleBackToUserPage = () => {
    history.push("/user");
  };

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
