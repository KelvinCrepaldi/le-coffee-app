import styled from "styled-components"
import backgroundTop from "../../../assets/coverTop.png";
export const BoxCard = styled.div`
    width: 290px;
    height: 366px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 15px auto;
    border: 2px solid var(--gray-100);
    box-shadow: 2px 3px 3px  rgba(0,0,0,0.05);
    button {
        margin-left: -3px;
        margin-top: 5px;
        background: var(--gray-100);
    }
    :hover{
        transition: 0.3s;
        border: 2px solid  var(--brown-xlight);
        button{
            background:var(--brown-xlight);
           
        }
    }
    div{
        align-self: flex-start;
        line-height:33px;
        width: 95%;
        margin-top: 2px;
        margin: 5px;
        span {
            font-size: 12px;
            color: var(--gray-primary);
        }
        h3 {
            color: #333333
        }
        p{
            font-weight: 600;
            font-size: 14px;
            color: var(--brown-xlight);
        }
    }
    img{ 
        width: 100%;
        max-width: 177px;
        height: 177px;
        align-self: center;
}
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
    box-shadow: 1px 4px 4px 2px rgba(0,0,0,0.25);
`
export const Container = styled.div`
    color: #fff;
    text-shadow: 0 4px 4px rgba(0,0,0,0.25);
    width: 100%;



`
export const ImageTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75vh;
  background: url(${backgroundTop});
  background-position: center;
  background-size: cover;

  h1{
      font-size:30px;
      text-align: center;
      line-height: 0.8;
      span{
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