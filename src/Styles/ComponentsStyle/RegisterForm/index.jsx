import styled from "styled-components";

export const RegisterFormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  margin: 0 auto;

  width: 270px;

  h1 {
    font-size: var(--font-size-medium);
    color: #401309;
    font-weight: var(--font-w-normal);
    width: 100%;
  }
  span {
    width: 100%;
    font-size: var(--font-size-small);
    color: #212621;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  input {
    margin: 7px;
    width: 100%;
    height: 45px;
  }

  .title {
    width: 176px;
    text-align: center;
    margin: 22px auto 19px;
  }

  .button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
    height: 135px;
    margin-bottom: 30px;
  }

  .text-register {
    display: flex;
    align-items: center;

    font-size: var(--font-size-xsmall);
    font-weight: var(--font-w-normal);
    height: 29px;
  }
`;
