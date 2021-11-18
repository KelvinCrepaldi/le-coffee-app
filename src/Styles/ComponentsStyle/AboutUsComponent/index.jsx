import styled from "styled-components";
import backgroundTop from "../../../assets/coverTop.png";
import Leonam from "../../../assets/leonamphoto.jpeg";

export const Head = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  color: var(--gray-300);
  line-height: 1.5;

  h2 {
    span {
      color: var(--brown-xlight);
    }
  }
  p {
    margin-top: 20px;
    width: 80%;
  }
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

  h1 {
    font-size: 30px;
    text-align: center;
    line-height: 0.8;
    span {
      font-size: 14px;
    }
  }
`;
export const Container = styled.div`
  color: #fff;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;

  margin: -150px auto;
  flex-wrap: wrap;
  background: #fff;

  border-radius: 30px;
  box-shadow: 1px 4px 4px 2px rgba(0, 0, 0, 0.25);
`;
export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 70px auto;
`;
export const BoxMembers = styled.div`
  width: 300px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);

  margin: 10px auto;

  :hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-8px);
  }
  h4 {
    padding: 20px;
    color: var(--brown-xlight);
  }
  P {
    margin-top: -20px;
    padding: 20px;
    color: var(--gray-300);
  }

  @media (min-width: 1024px) {
    margin: 5px;
  }
`;

export const Icons = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  width: 100px;

  a {
  }
  svg {
    font-size: 35px;
    color: #c5c2c2;

    :hover {
      color: var(--brown-xlight);
      cursor: pointer;
    }
  }
`;

export const MemberPhoto = styled.img`
  /* background: url(${Leonam}); */
  filter: grayscale(90%);
  border-radius: 8px;
  width: 100%;
  height: 310px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;

  align-items: flex-end;

  h3 {
    font-size: 30px;
    line-height: 0.8;
    span {
      font-size: 18px;
      font-weight: 200;
    }
  }
`;

export const Footer = styled.div`
  margin-top: 300px;
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
