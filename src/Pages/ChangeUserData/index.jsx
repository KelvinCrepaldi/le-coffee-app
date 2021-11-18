import { useHistory } from "react-router-dom";

import bgImageLeft from "../../assets/cover-rodape.png";
import bgImageRight from "../../assets/about-us-cover-2.png";
import UserForm from "../../Components/UserForm";
import { Page } from "../../Styles/PagesStyles/User";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Navbar from "../../Components/Navbar";
import { ButtonComponent } from "../../Components/Button";

const ChangeUserData = () => {
  const history = useHistory();

  const handleBackToUserPage = () => {
    history.push("/user");
  };

  return (
    <Page>
      
      <div className="formContent">
        <UserForm />
      </div>
    </Page>
  );
};

export default ChangeUserData;