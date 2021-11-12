import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: 100vh;
  .card {
    height: 200px;
    width: 94vw;
    margin-bottom: 26px;
    border: 1px solid var(--brown-light);
    border-radius: 15px;

    button {
      position: absolute;

      height: 45px;
      width: 170px;
      margin: 40px 0 0 64px;
    }
  }
  .chosenAddress {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    font-size: var(--font-size-large);
    margin: 25px auto 0;
  }
`;

export const CartContainer = styled.section`
  height: 700px;
  width: 94vw;
  margin-bottom: 26px;
  border: 1px solid var(--brown-light);
  border-radius: 15px;
`;

export const CardTop = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 45px;
  padding: 0 20px;

  background-color: var(--brown-light);
  color: var(--white-primary);
  border-radius: 15px 15px 0 0;

  .total {
    font-weight: var(--font-w-bold);
  }
`;
