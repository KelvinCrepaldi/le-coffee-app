import styled from "styled-components";

export const Page = styled.div`
  .Cover {
    position: absolute;
    z-index: -1;
    height: 100vh;
    width: 100%;
    //backdrop-filter: brightness(60%);
    filter: grayscale(70%);
  }

  .navBar {
    display: flex;
    align-items: center;
    height: 72px;
    width: 100vw;
    margin-bottom: 20px;
    background-color: var(--brown-dark);
  }

  .center-mobile {
    height: 500px;
    width: 80%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  }

  @media (min-width: 1024px) {
    .center-mobile {
      height: 700px;
      width: 470px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      border-radius: 15px;
      background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
    }
  }
`;
