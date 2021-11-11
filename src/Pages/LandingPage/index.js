import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  Footer,
  Member,
} from "../../Styles/PagesStyles/LandingPage";

import cafe from "../../assets/cafe-7.png";
import logo from "../../assets/logo-main-white.png";
import main from "../../assets/main-desktop.png";
import security from "../../assets/security.png";
import kelvin from "../../assets/kelvin.png";
import leonam from "../../assets/leonam.png";
import luan from "../../assets/luan.png";
import roberto from "../../assets/roberto.png";
import { ButtonComponent } from "../../Components/Button";

const LandingPage = () => {
  return (
    <>
      <SectionOne>
        <img src={logo} alt="Logo Le Coffee" className="Logo" />

        <img src={main} alt="Cover" className="Cover" />

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
            buttonFunction="gotoLogin"
            className="Button Login"
          />
          <ButtonComponent buttonFunction="signup" className="Button SignUp" />
        </div>
      </SectionOne>

      <SectionTwo>
        <p className="Title S2">
          Encontre os melhores produtos e produtores do Brasil
        </p>
        <p className="TextS2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="Security">
          <img src={security} alt="100% Security" />
          <span>100% Seguro</span>
        </div>
        <ButtonComponent buttonFunction="signup" className="Button SignUp" />
      </SectionTwo>

      <SectionThree>
        <p className="TitleS3">Novos Produtos</p>
        <img src={cafe} alt="Carrossel" />
      </SectionThree>

      <SectionFour>
        <div className="TitleS4">Nosso Time</div>

        <div className="Team">
          <Member>
            <img src={kelvin} alt="Kelvin Crepaldi" />
            <p>Kelvin Crepaldi - TL</p>
          </Member>

          <Member>
            <img src={leonam} alt="Leonam Rodrigues" />
            <p>Leonam Rodrigues - PO</p>
          </Member>

          <Member>
            <img src={luan} alt="Luan Ferreira" />
            <p>Luan Ferreira - SM</p>
          </Member>

          <Member>
            <img src={roberto} alt="Roberto Rocha" />
            <p>Roberto Rocha - QA</p>
          </Member>
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
