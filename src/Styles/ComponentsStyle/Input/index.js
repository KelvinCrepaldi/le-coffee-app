import styled from "styled-components";

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25px;

  .inputBox {
    display: flex;
    flex-direction: row;

    height: 46px;
    width: 64vw;
    max-width: 315px;
    border: 2px solid var(--brown-light);
    border-radius: 10px;

    input {
      width: 100%;
      padding: 0 10px;
      border: none;
      background-color: transparent;
      outline: none;
      caret-color: var(--brown-details);
    }
  }
  .inputError {
    margin-top: 5px;
    padding-left: 10px;
    line-height: 20px;
    color: tomato;
  }
`;
