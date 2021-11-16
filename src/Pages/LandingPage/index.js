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
import beans from "../../assets/coffee-beans.png";
import logo from "../../assets/logo-main-white.png";
import main from "../../assets/main-desktop.png";

import security from "../../assets/security.png";
import kelvin from "../../assets/kelvin.png";
import leonam from "../../assets/leonam.png";
import luan from "../../assets/luan.png";
import roberto from "../../assets/roberto.png";

import { ButtonComponent } from "../../Components/Button";
import { CarouselNewProducts } from "../../Components/CarouselNewProducts";
import { Carousel } from "react-responsive-carousel";

const LandingPage = () => {
  const history = useHistory();
  return (
    <>
      <SectionOne>
        <img src={main} alt="Cover Photo" className="Cover" />

        <img src={logo} alt="Logo Le Coffee" className="Logo" />

        <p>
          Le Coffee® é uma empresa de responsabilidade Eco-Social. Nosso
          objetivo é gerar renda para pequenos produtores sem perder o foco na
          redução das diferenças sociais e na melhoraria da qualidade de vida da
          sociedade. Para alcançar tal objetivo, ensinamos os pequenos
          produtores a harmonizar a exploração dos recursos naturais,
          desenvolvimento tecnológico e mudanças institucionais focadas no
          bem-estar social.
        </p>

        <div className="GroupButtons">
          <ButtonComponent
            variant="unfill"
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
        <h2 className="Title S2">
          Encontre os melhores produtos e produtores do Brasil
        </h2>
        <div className="Container Section2">
          <img src={cup} alt="Cup of Coffee" className="Cup" />
          <p className="TextS2">
            Um dos maiores diferenciais dos cafés da Le Coffee®, é que os
            produtores podem fazer uma colheita tardia, mantendo os grãos
            maduros por mais tempo no galho. O resultado é um produto
            equilibrado entre acidez e doçura.
          </p>
        </div>

        <div className="S3">
          <div className="Security">
            <img src={security} alt="100% Security" />
            <span>100% <br/> Seguro</span>
          </div>
          <ButtonComponent
            variant="brown"
            text="Cadastre-se"
            onClick={() => history.push("/register")}
          />
        </div>
      </SectionTwo>

      <SectionThree>
        <p className="TitleS3">NOVOS PRODUTOS</p>
          <span>Conheça os nossos novos produtos</span>
        <div className="Mobile">
          <CarouselNewProducts percentage={100} showThumbs={false}/>
        </div>

        <div className="Desktop">
          <CarouselNewProducts percentage={30} />
        </div>
      </SectionThree>

      <SectionFour>
        <h2 className="TitleS4">NOSSO TIME</h2>

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
        <p>Copyright 2021 - Todos os direitos reservados - Le Coffee® 2021</p>
      </Footer>
    </>
  );
};

export default LandingPage;
