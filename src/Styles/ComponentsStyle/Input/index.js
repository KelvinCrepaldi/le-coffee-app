import styled from "styled-components";

export const InputContainer = styled.form`
 
 margin-bottom: 25px;
 .inputBox {
    display: flex;
    flex-direction: row;

    height: 46px;
    
    border: 2px solid var(--brown-primary);
    border-radius: 10px;

    input{
      width: inherit;
      border: none;
      border-radius: 10px;
      outline: none;
      caret-color: var(--brown-primary);
    }
  }
`;
