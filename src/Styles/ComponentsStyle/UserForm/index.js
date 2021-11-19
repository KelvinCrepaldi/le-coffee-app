import styled from "styled-components";

export const UserFormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-evenly;

  h1 {
    font-size: var(--font-size-medium);
    font-weight: var(--font-w-normal);
    width: 100%;

    color: #401309;
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

  .title {
    text-align: center;

    width: 176px;
    margin: 22px auto 19px;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-bottom: 30px;

    button {
      margin-top: 20px;
      width: 265px;
      height: 54px;
    }
  }

  .text-register {
    display: flex;
    align-items: center;

    font-size: var(--font-size-xsmall);
    font-weight: var(--font-w-normal);
    height: 29px;
  }

  .center-mobile {
    margin: 125px auto 0 auto;
  }

  @media (min-width: 1024px) {
    
  }
`;
