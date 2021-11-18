import styled from "styled-components";

export const SelectionContainer = styled.div`
  .btts {
    display: none;
  }
  .slct {
    position: absolute;
    left: 50%;
    top: 48%;
    transform: translate(-50%, -50%);
    select {
      padding-bottom: 5px;
      margin-bottom: 20px;
      
      background-color: transparent;
      color:var(--white-primary);
      border: none;
      border-bottom: 3px solid var(--brown-xlight);
      outline: none;
    }
    select option {
      background-color: var(--brown-xlight);
      border: none;
}
  }
  @media (min-width: 768px) {
    .btts {
      position: absolute;
      left: 50%;
      top: 48%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 70vw;
      max-width: 800px;
      button{
      padding-bottom: 5px;
      
      background-color: transparent;
      color: var(--white-primary);
      border: none;
      border-bottom: 3px solid var(--brown-xlight);
      transition: 0.4s;

      &:hover{
        transform: translateY(-5px);
        transition: 0.4s;
        border-color: var(--white-primary);
      }
      }
    }
    .slct {
      display: none;
    }
  }
`;
