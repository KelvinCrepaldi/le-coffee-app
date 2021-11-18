import styled from "styled-components";

export const ButtonContainer = styled.div`
  button {
    width: 35px;
    height: 35px;
    font-size: 30px;
    border: none;
    margin: 3px;

  }

  button:hover ~ button {
    color: red;
  }
`;
