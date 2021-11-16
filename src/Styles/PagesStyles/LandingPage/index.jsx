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
    font-size: var(--font-size-small);
    text-align: justify;
    width: 89%;
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
      padding: 21px;
    }
  }

  @media (min-width: 1024px) {
    width: 100vw;
    img{
      width: 100%;
    }

    p {
      padding: 0 30px;
      max-width:850px;
      font-size: var(--font-size-medium);
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

  height: 625px;

  background-color: var(--gray-primary);
  border-radius: 0 0 25px 25px;

  p {
    padding: 0 35px 0 35px;
    color: var(--white-primary);
    width: 89%;
  }

  button {
    width: 195px;
    margin: 17px;
    padding: 17px;
  }

  .S2 {
    margin-top: 25px;
    font-size: var(--font-size-large);
    text-align: center;
    font-weight: bold;
    color: #ffff;
    width: 81%;
    text-align: left;

    @media (min-width:1024px){
      max-width: 580px ;
     
    }
  }

  .Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .p {
      width: 650px;
    }
    .Cup {
      display: none;
    }
  }

  .TextS2 {
    margin-top: 30px;
    font-size: var(--font-size-small);
    text-align: justify;
    width: 100%;

    @media (min-width:1024px){
      max-width: 650px ;

    }
  }

  .Security {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 25px 0 25px 0;
    color: var(--white-primary);

    img {
      width: 20px;
    }

    span {
      margin: 10px;
      text-align: center;
      font-size: 13px;
    }
  }

  @media only screen and (min-device-width: 768px) {
    .Container {
      .Cup {
        display: none;
      }
    }
  }

  @media (min-width: 1024px) {
    .S2 {
      font-size: var(--font-size-xlarge);

    }

    .Container {
      display: flex;
      flex-direction: row;
      align-items: space-between;
      position: relative;

      .Cup {
        display: inline;
        position: absolute;
        z-index: 1;
        width: 675px;
      }

      p {
        margin: 0 25px 0 575px;
        font-size: var(--font-size-medium);
      }
    }

    .S2 {
      margin: 0 25px 75px 575px;
      font-size: var(--font-size-xlarge);
    }

    .S3 {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 25px 75px 575px;

      button {
        height: 75px;
        width: 275px;
        margin: 10px;
      }
    }
  }
`;

export const SectionThree = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 750px;

  p {
    margin-top: 20px;
  }

  .Mobile {
    display: initial;
  }

  .Desktop {
    display: none;
  }

  .TitleS3 {
    margin-top: 15px;
    font-size: var(--font-size-xlarge);
  }

  @media (min-width: 1024px) {
    .Mobile {
      display: none;
    }

    .Desktop {
      display: initial;
    }
  }
`;

export const SectionFour = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  height: 950px;

  background-color: var(--gray-primary);
  border-radius: 35px 35px 0 0;

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

      img{
        width: 250px;
      }
    }
  }

  @media (min-width: 1024px) {
    align-items: center;
  
    height: 450px;
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
