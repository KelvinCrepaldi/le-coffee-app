import styled from "styled-components";
export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
  }
  input {
    width: 100%;
  }

  h2 {
    margin: 20px;
    color: var(--gray-primary);
  }
  p {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    color: #636e72;
  }
  button {
    width: 100%;
    border-radius: 0px;
    padding: 20px;
    color: #61db61;
    margin-top: 20px;

    :hover {
      opacity: 0.8;
    }
  }
`;

export const OrderSuccess = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;

    text-align: center;
    color: var(--gray-primary);
    flex-wrap: wrap;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 50px;
    width: 69%;
    p {
      color: var(--gray-primary);
    }
    svg {
      font-size: 96px;
      color: #61db61;
      margin: 40px;
    }
  }
`;
