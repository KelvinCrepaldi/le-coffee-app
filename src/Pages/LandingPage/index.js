import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  Footer,
  Member,
} from "../../Styles/PagesStyles/LandingPage";

import { useHistory } from "react-router-dom";

import cafe from "../../assets/cafe-7.png";
import cup from "../../assets/cup-of-coffee.png";
import logo from "../../assets/logo-main-white.png";
import main from "../../assets/main-desktop.png";

import security from "../../assets/security.png";
import kelvin from "../../assets/kelvin.png";
import leonam from "../../assets/leonam.png";
import luan from "../../assets/luan.png";
import roberto from "../../assets/roberto.png";

import { ButtonComponent } from "../../Components/Button";
// import { CarouselNewProducts } from "../../Components/"

const LandingPage = () => {
  const history = useHistory();
  return (
    <>
      <SectionOne>
        <img src={main} alt="Cover Photo" className="Cover" />

        <img src={logo} alt="Logo Le Coffee" className="Logo" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <div className="GroupButtons">
          <ButtonComponent
            variant="white"
            text="Login"
            onClick={() => history.push("/login")}
          />
          <ButtonComponent
            variant="brown"
            text="Cadastre-se"
            onClick={() => history.push("/register")}
          />
        </div>
      </SectionOne>

      <SectionTwo>
        <p className="Title S2">
          Encontre os melhores produtos e produtores do Brasil
        </p>
        <div className="Container Section2">
          {/* <div className="Figure 2">
            <img src={cup} alt="Cup of coffee" />
          </div> */}
          <p className="TextS2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="Security">
          <img src={security} alt="100% Security" />
          <span>100% Seguro</span>
        </div>
        <ButtonComponent buttonFunction="signup" className="Button SignUp" />
      </SectionTwo>

      <SectionThree>
        <p className="TitleS3">Novos Produtos</p>
        <CarouselNewProducts />
      </SectionThree>

      <SectionFour>
        <div className="TitleS4">Nosso Time</div>

        <div className="Team">
          <img src={kelvin} alt="Kelvin Crepaldi" className="Member" />

          <img src={leonam} alt="Leonam Rodrigues" className="Member" />

          <img src={luan} alt="Luan Ferreira" className="Member" />

          <img src={roberto} alt="Roberto Rocha" className="Member" />
        </div>
      </SectionFour>

      <Footer>
        <img src={logo} alt="Logo Le Coffee" className="Logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>© Copyright 2021 Todos os direitos reservados - Le Coffe 2021</p>
      </Footer>
    </>
  );
};

export default LandingPage;
