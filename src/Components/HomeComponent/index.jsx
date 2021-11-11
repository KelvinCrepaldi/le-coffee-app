import {
  Container,
  SectionsMod,
  ImageTop,
  Footer,
  Content,
  Sections,
  SectionProducts,
  SectionAboutUs,
  SectionMap,
  NavLink
} from "../../Styles/ComponentsStyle/HomeComponent";
import logoNavbar from "../../assets/Logo-main-black 4.png";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <Container>
      <ImageTop>
        <h1>Home</h1>
      </ImageTop>

      <Content>
          
          <Sections to = "catalogue">
      
            <h3>
              PRODUTOS <br /> <span>Ver mais</span>
            </h3>
    
          </Sections>

          <SectionsMod to = "aboutUs">
            <h3>
              SOBRE NÓS
              <br /> <span>Ver mais</span>
            </h3>
          </SectionsMod>
   

      </Content>

        <SectionMap to = "region">
          <h3>
            MAPA <br /> <span>Ver mais</span>
          </h3>
        </SectionMap>


      <Footer>
        <img src={logoNavbar}></img>
        <p>
          © Copyright 2021 Todos os direitos reservados <br /> Le Coffe 2021{" "}
        </p>
      </Footer>
    </Container>
  );
};
export default HomeComponent;
