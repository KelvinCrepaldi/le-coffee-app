import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  padding-top: 5vh;

  background-color: #504a59;

  .bgContent,
  .toLogin {
    display: none;
  }

  .topContent {
    height: 25vh;
    text-align: center;
  }

  .formContent {
    width: 90%;
    height: 70vh;
    padding: 16px 0;
    text-align: center;

    background-color: #f5f5f5;
    border-radius: 20px 20px 0 0;

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

        width: 146px;

      button{
          width: 60px;
          height: 60px;
          border: none;
          border-radius: 10px;

          font-size: 22px;

          .icon{
              margin-top: 6px;
              color: #adadad;
          }
      }
      p{
        color: #fff;
      }
    }

    .formContent {
      position: absolute;
      right: 22%;
      top: 50%;
      transform: translateY(-50%);

      width: 360px;
      border-radius: 18px;
      box-shadow: 3px 2px 12px var(--gray-600);
    }
  }
`;
