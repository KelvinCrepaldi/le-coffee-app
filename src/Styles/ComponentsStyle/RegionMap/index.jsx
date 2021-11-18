import styled from "styled-components";
import backgroundTop from "../../../assets/coverTop.png";

export const LeafletContainer = styled.div`
  width: 100%;
  height: 60vh;
  border
`;
export const Content = styled.div`
  display: flex;
  max-width: 1270px;
  justify-content: space-around;
  margin: -150px auto;
  flex-wrap: wrap;
  background: #fff;
  padding: 15px;
  border-radius: 30px;
  box-shadow: 1px 4px 4px 2px rgba(0, 0, 0, 0.25);
`;
export const Container = styled.div`
  color: #fff;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
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
