import { HomeContainer } from "../../Styles/PagesStyles/LandingPage";

import carousel from "../../assets/carousel.png";
import logo from "../../assets/logo-main-white.png";
import main from "../../assets/main-desktop.png";
import security from "../../assets/security.png";
import kelvin from "../../assets/kelvin.png";
import leonam from "../../assets/leonam.png";
import luan from "../../assets/luan.png";
import roberto from "../../assets/roberto.png";



const Home = () => {
  return (
    <HomeContainer>
      <img src={logo} alt="Logo Le Coffee" />
      <img src={main} alt="Cover" />
    </HomeContainer>
  );
};

export default Home;

