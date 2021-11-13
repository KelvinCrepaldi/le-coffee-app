import {
  Container,
  Content,
  Footer,
  ImageTop,
  BoxMembers,
  MemberPhoto,
  Head,
  Box,
  Icons,
} from "../../Styles/ComponentsStyle/AboutUsComponent/index";
import logoNavbar from "../../assets/Logo-main-black 4.png";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Kelvin from "../../assets/kelvin.jpeg";
import Leonam from "../../assets/leonamphoto.jpeg";
import Luan from "../../assets/luanphoto.png";
import Roberto from "../../assets/robertophoto.png";
const AboutUsComponent = () => {
  return (
    <Container>
      <ImageTop>
        <h1>
          QUEM SOMOS <br /> <span>Home &gt; Quem somos</span>
        </h1>
      </ImageTop>
      <Content>
        <Head>
          <h2>
            <span>NOSSO</span> TIME
          </h2>
          <p>
            Somos o grupo 5 do projeto Capstone proporcionado pela Kenzie
            Academy Brasil, realizado durante a sprint 6 do módulo Q2 - Front
            end.
          </p>
        </Head>
        <Box>
          <BoxMembers>
            <MemberPhoto src={Leonam}></MemberPhoto>
            <h4>Leonam Rodrigues - Product Owner</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet consectetur, adipisicing elit.
            </p>
            <Icons>
              <a
                href="https://www.linkedin.com/in/leonam-rodrigues/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/Leonam1212" target="_blank">
                <FaGithubSquare />
              </a>
            </Icons>
          </BoxMembers>

          <BoxMembers>
            <MemberPhoto src={Kelvin}></MemberPhoto>
            <h4>Kelvin Crepaldi - Teach Lead</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet consectetur, adipisicing elit.
            </p>
            <Icons>
              <a
                href="https://www.linkedin.com/in/kelvincrepaldi/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/KelvinCrepaldi" target="_blank">
                <FaGithubSquare />
              </a>
              <FaLinkedin />
              <FaGithubSquare />
            </Icons>
          </BoxMembers>

          <BoxMembers>
            <MemberPhoto></MemberPhoto>
            <h4>Roberto Rocha - Quality Assurance</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet consectetur, adipisicing elit.
            </p>
            <Icons>
              <a
                href="https://www.linkedin.com/in/kelvincrepaldi/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/KelvinCrepaldi" target="_blank">
                <FaGithubSquare />
              </a>
            </Icons>
          </BoxMembers>

          <BoxMembers>
            <MemberPhoto src={Luan}></MemberPhoto>
            <h4>Luan Ferreira - Scrum Master</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet consectetur, adipisicing elit.
            </p>
            <Icons>
              <a
                href="https://www.linkedin.com/in/luanferreira02/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/luan-ferreir4" target="_blank">
                <FaGithubSquare />
              </a>
            </Icons>
          </BoxMembers>
        </Box>
      </Content>

      <Footer>
        <img src={logoNavbar}></img>
        <p>
          © Copyright 2021 Todos os direitos reservados <br /> Le Coffe 2021{" "}
        </p>
      </Footer>
    </Container>
  );
};
export default AboutUsComponent;
