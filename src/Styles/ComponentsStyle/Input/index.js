import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  .inputBox {
    display: flex;
    flex-direction: row;

    height: 46px;
    width: 64vw;
    max-width: 315px;
    border: 2px solid var(--gray-100);
    border-radius: 8px;

    input {
      width: 100%;
      padding: 0 10px;
      border: none;
      background-color: transparent;
      outline: none;
      caret-color: var(--brown-details);
      :focus {
        border: 2px solid var(--brown-light);
        border-radius: 8px;
      }
    }
  }
  .inputError {
    margin-top: 5px;
    padding-left: 10px;
    line-height: 20px;
    color: tomato;
  }
`;
