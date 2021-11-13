import styled from "styled-components";

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
  align-items: center;
  position: relative;
  overflow-x: hidden;

  height: 850px;

  p {
    padding: 0 20px 0 20px;
    margin-top: 35px;
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
    height: 175px;
  }

  .GroupButtons {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 15px;

    button {
      width: 195px;
      margin: 17px;
      padding: 17px;
    }
  }

  @media (min-width: 1024px) {
    width: 100%;

    p {
      padding: 0 30px;
      font-size: var(--font-size-xlarge);
    }

    .Cover {
      width: 100%;
    }

    .Logo {
      height: 350px;
      width: 345px;
      margin-top: 35px;
    }

    .GroupButtons {
      flex-direction: row;
      margin-top: 55px;
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
    text-align: center;
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


  .TitleS3 {
    margin-top: 25px;
    font-size: var(--font-size-xlarge);
  }

  .Products {
    height: 350px;
  }

  @media (min-width: 1024px) {
    justify-content: center;

    .Products {
      width: 100%;
    }
  }
`;

export const SectionFour = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 950px;

  background-color: var(--gray-primary);
  border-radius: 25px 25px 0 0;

  .TitleS4 {
    margin-top: 25px;
    font-size: var(--font-size-xlarge);
    color: var(--white-primary);
  }

  .Member {
    display: flex;
    align-items: center;
    width: 210px;

    @media (min-width: 1024px) {
      margin-top: 35px;
      width: 335px;
    }
  }

  .Team {
    display: flex; 
    flex-direction: column;
    justify-items: center;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }

  @media (min-width: 1024px) {
    align-items: center;

    height: 550px;
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
