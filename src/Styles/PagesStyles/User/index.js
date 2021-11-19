import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  min-height: 100vh;

  p {
    font-size: var(--font-size-xsmall);
  }

  button {
    margin-top: 15px;
    padding: 10px;
  }

  .Cover {
    position: absolute;
    z-index: -1;
    height: 100vh;
    width:100%;
    //backdrop-filter: brightness(60%);
    filter: grayscale(70%);
  }

  .NavBar {
    display: flex;
    align-items: center;
    height: 72px;
    width: 100vw;
    margin-bottom: 20px;
    background-color: var(--brown-dark);
  }

  .Title {
    margin-top: 55px;
    font-size: var(--font-size-xlarge);
  }

  .Logout {
    margin-top: 10px;
  }

  .Card {
    height: 200px;
    width: 94vw;
    margin: 26px 0 26px 0;
    // border: 1px solid var(--brown-light);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);

    .Top {
      background: var(--brow-light);
    }

    .CardContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 150px;
      a {
        color: var(--black-primary);
      }
      a:hover {
        color: var(--brown-light);
      }
    }
  }

  @media (min-width: 768px) {
    .Card {
      width: 40vw;
    }
  }
  @media (min-width: 1024px) {
    .Card {
      width: 380px;
    }
  }
`;

export const ImageTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75vh;
  background-position: center;
  background-size: cover;

  h1 {
    font-size: 30px;
    text-align: center;
    line-height: 0.8;
    span {
      font-size: 14px;
    }
  }
`;

export const CardTop = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0 20px;

  background-color: var(--brown-light);
  color: var(--white-primary);
  border-radius: 12px 12px 0 0;
`;
