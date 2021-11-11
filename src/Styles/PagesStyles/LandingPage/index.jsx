import styled from "styled-components";
import main from "../../../assets/main-desktop.png";

/**
{
position: absolute;
top: 50%
transform: translateY(-50%);
display: flex;
flex-direction: column;

width: 200px;
height: 100px;
padding: 10px;
margin: 10px;

background-color: #f5f5f5;
color: #000;
border: 1px solid #000;
border-radius: 10px;
box-shadow: 0px 10px 5px #000;
//cursor: pointer;
//outline: unset;
}
 */

export const SectionOne = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  overflow-x: hidden;



  height: 800px;

  p {
    padding: 0 40px 0 40px;
    margin-top: 75px;
    color: var(--white-primary);
    font-size: var(--font-size-medium);
    text-align: center;
  }

  .Cover {
    position: absolute;
    z-index: -1;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  .Logo {
    margin-top: 25px;
    height: 175px;
  }

  .GroupButtons {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 45px;

    button {
      margin: 17px;
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: center;

      .Cover {
        height: 100%;
      }

      p {

      }
    }
  }

  @media (min-width: 1024px) {
    flex-grow: 1;
    width: 100%;

    p {
      padding: 0 30px;
      font-size: var(--font-size-xlarge);
    }

    .Logo {
      height: 350px;
      width: 345px;
    }
  }
`;

export const SectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 600px;

  background-color: var(--gray-primary);
  border-radius: 0 0 25px 25px;

  p {
    padding: 0 35px 0 35px;
    color: var(--white-primary);
  }

  img {
    width: 45px;
    margin-right: 10px;
  }

  .S2 {
    margin-top: 25px;
    font-size: var(--font-size-large);
    align: center;
  }

  .Container {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 625px;
    }
  }

  .TextS2 {
    margin-top: 30px;
  }

  .Security {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 25px 0 25px 0;
    color: var(--white-primary);
  }

  @media (min-width: 1024px) {
    .S2 {
      font-size: var(--font-size-xlarge);
    }

    .Container {
      display: flex;
      flex-direction: row;
      flex-start: center;
      align-items: space-between;
    }

    .TextS2 {
      font-size: var(--font-size-large);
    }
  }
`;

export const SectionThree = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 600px;

  p {
    margin-top: 50px;
  }

  img {
    heigth: 225px;
  }

  .TitleS3 {
    margin-top: 25px;
    font-size: var(--font-size-xlarge);
  }

  @media (min-width: 1024px) {
    align-items: center;
    img {
      width: 450px;
    }
  }
`;

export const SectionFour = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 950px;

  background-color: var(--gray-primary);
  border-radius: 25px 25px 0 0;

  .TitleS4 {
    margin-top: 25px;
    font-size: var(--font-size-xlarge);
    color: var(--white-primary);
  }

  .Team {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1024px) {
    align-items: center;

    height: 550px;

    .Team {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;;
    }
  }
`;

export const Footer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 500px;

  background-color: var(--black-primary);

  img {
    width: 150px;
    margin-top: 25px;
  }

  p {
    text-align: center;
    padding: 25px 40px 25px 40px;
    color: var(--white-primary);
  }

  .TitleS4 {
    font-size: var(--font-size-large);
    color: var(--white-primary);
  }

  @media (min-width: 1024px) {
    align-items: center;

    padding: 45px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  .Logo {
    top: 3%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Member = styled.div`
  img {
    width: 175px;
  }

  p {
    position: relative;
    top: -17%;
    font-size: var(--font-size-large);
    text-align: center;
    color: var(--white-primary);
  }

  @media (min-width: 1024px) {
    margin-top: 35px;

    img {
      width: 375px;
    }

    p {
      font-size: var(--font-size-large);
    }
  }
`;
