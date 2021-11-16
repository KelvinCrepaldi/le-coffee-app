import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  .bgContent,
  .toLogin {
    display: none;
  }

  .topContent {
    height: 25vh;
    text-align: center;
  }

  .formContent {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    text-align: center;
    background-color: #f5f5f5;

    h1 {
      font-size: 26px;
      color: #401309;
    }
  }

  @media (min-width: 1024px) {
    padding: 0;
    .topContent {
      display: none;
    }

    .bgContent {
      display: flex;
      height: 100vh;
      .imgLeft {
        width: 70vw;
      }
      .imgRight {
        width: 30vw;
      }
    }

    .toLogin {
      position: absolute;
      top: 5%;
      left: 5%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 250px;


      button {
        width: 60px;
        height: 60px;
        border: none;
        border-radius: 10px;

        font-size: 22px;

        .icon {
          margin-top: 6px;
          color: #adadad;
        }
      }
      p {
        color: #fff;
        width:180px;

      }
    }

    .formContent {
      position: absolute;
      right: 22%;
      top: 50%;
      transform: translateY(-50%);
      min-height: auto;

      padding: 0;
      width: 360px;
      border-radius: 18px;
      box-shadow: 3px 2px 12px var(--gray-600);
    }

    .text-register {
      display: none;
    }
  }
`;
