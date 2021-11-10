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

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 98vw;
  max-width: 100%;
  padding: 5px 0;
  margin: 15px auto;
  
  @media(min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  
  @media(min-width: 1024px){
    flex-grow:1;
    width: 90vw;
  }
`;