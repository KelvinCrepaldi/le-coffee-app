import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: 100vh;

  #close {
    color: red;
    width: 100px;
  }
  .navBar {
    display: flex;
    align-items: center;
    height: 72px;
    width: 100vw;
    margin-bottom: 20px;
    background-color: var(--brown-dark);
  }
  .card {
    height: 200px;
    width: 94vw;
    margin-bottom: 26px;

    border-radius: 15px;
    text-align: center;
    button {
      height: 45px;
      width: 170px;
      margin-top: 40px;
    }
  }
  .summary {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 80%;
    font-size: 13px;
    margin: 25px auto 0;

    button {
      background: var(--alert-success);
      width: 100%;
      height: 60px;
    }

    p {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--gray-100);
      padding: 10px;
    }

    div {
      margin-top: 20px;
      margin-bottom: -30px;
      background: rgba(161, 253, 208, 0.21);
      padding: 15px;
      font-weight: bold;
      width: 100%;
      strong {
        color: #00b894;
      }
      span {
        display: block;
        margin-top: 10px;
        font-size: 24px;
        color: #00b894;
      }
    }
  }
  .totalPrice {
    display: flex;
    background: green;
    margin: 0 auto;
    flex-direction: column;
    width: 60%;

    span {
      font-size: 20px;
    }
  }

  .card--address {
    margin-top: 200px;
    height: 220px;
    border: 1px solid var(--brown-light);
    .addressList {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 150px;
      padding: 5px 10px;
      overflow: hidden;
      overflow-y: scroll;
    }
  }
  @media (min-width: 768px) {
    .content {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 96vw;
      .card {
        width: 35vw;
      }
      .card--address {
        margin-top: 200px;
      }
    }
  }
  @media (min-width: 1024px) {
    .content {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 96vw;
      .card {
        width: 380px;
      }
      .card--address {
        margin-top: 200px;
      }
    }
  }
`;

export const CartContainer = styled.section`
  height: 600px;
  width: 94vw;
  margin-bottom: 26px;
  margin-top: 150px;
  border-radius: 15px;

  @media (min-width: 1024px) {
    margin-top: 0px;
  }
  .listContainer {
    display: flex;
    overflow: hidden;
    overflow-y: scroll;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    height: 88%;
    width: 100%;
    ::-webkit-scrollbar {
      width: 6px;
      padding: 5px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      margin: 10px;
    }
    ::-webkit-scrollbar-thumb {
      height: 5px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--brown-xlight);
      border-radius: 10px;
    }
  }

  @media (min-width: 768px) {
    height: 500px;
    width: 50vw;
  }
  @media (min-width: 1024px) {
    height: 500px;

    width: 60vw;
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 45px;
  padding: 0 20px;

  background-color: var(--brown-light);
  color: var(--white-primary);
  border-radius: 12px 12px 0 0;

  .total {
    font-weight: var(--font-w-bold);
  }
`;
