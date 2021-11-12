import styled from "styled-components";
import backgroundTop from "../../../assets/coverTop.png";
import backgroundProducts from "../../../assets/backgroundProducts.png";
import backgroundAboutUs from "../../../assets/backgroundAboutUs.png";
import mapHomePage from "../../../assets/mapHome.png";
import { NavLink as Link } from "react-router-dom";
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  color: var(--white-primary);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;
export const ImageTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75vh;
  background: url(${backgroundTop});
  background-position: center;
  background-size: cover;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 88.5vw;
  margin: 20px auto;
`;
export const Sections = styled(Link)`
  background: url(${backgroundProducts});
  background-position: center;
  background-size: cover;
  height: 400px;
  width: 95vw;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-in;
 
  h3 {
    transition: 0.3s ease-in;
    text-align: center;
    font-size: 34px;
    line-height: 0.8;
    span {
      font-size: 18px;
      font-weight: 400;
    }
  }
  :hover {
    transition: 0.3s ease-in;
    filter: grayscale(60%);
    h3 {
      transition: 0.3s ease-in;
      transform: translateY(-5px);
    }
  }
  @media(min-width: 768px){
    width: 48vw;
  }
`;
export const SectionsMod = styled(Link)`
  background: url(${backgroundAboutUs});
  background-position: center;
  background-size: cover;
  height: 400px;
  width: 95vw;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h3 {
    transition: 0.3s ease-in;
    text-align: center;
    font-size: 34px;
    line-height: 0.8;
    span {
      font-size: 18px;
      font-weight: 400;
    }
  }

  :hover {
    transition: 0.5s ease;
    filter: grayscale(60%);
    h3 {
      transition: 0.5s ease;
      transform: translateY(-5px);
    }
  }
  @media(min-width: 768px){
    width: 48vw;
  }
`;

export const SectionMap = styled(Link)`
  background: url(${mapHomePage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 85vw;
  height: 450px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s ease;
  h3 {
    transition: 0.3s ease-in;
    text-align: center;
    font-size: 34px;
    line-height: 0.8;
    span {
      font-size: 18px;
      font-weight: 400;
    }
  }
  
  :hover {
      
    transition: 0.5s ease;
    filter: grayscale(60%);

    h3 {
        transition: 0.3s ease-in;
      
      transform: translateY(-5px);
    }
  }
`;

export const Footer = styled.div`
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.94);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  text-align: center;
  p {
    margin-top: 50px;
  }
`;
