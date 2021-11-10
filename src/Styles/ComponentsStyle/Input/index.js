import styled from "styled-components";

export const InputContainer = styled.form`
 
 margin-bottom: 25px;
 .inputBox {
    display: flex;
    flex-direction: row;

    height: 46px;
    width: 64vw;
    max-width: 315px;
    border: 2px solid var(--brown-primary);
    border-radius: 10px;

    input{
      width: 99%;
      padding: 0 10px;
      border: none;
      border-radius: 12px;
      outline: none;
      caret-color: var(--brown-primary);
    }
  }
`;
