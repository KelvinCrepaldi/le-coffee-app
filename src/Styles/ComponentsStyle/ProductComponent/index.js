import styled from "styled-components";

export const ProductContainer = styled.section`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  top: 40px;

  width: 90vw;
  z-index: 11;
  border-radius: 10px;

  background-color: var(--white-primary);
  .close-button {
    display: flex;
    justify-content: right;

    width: 100%;
    height: 50px;

    button {
      width: 50px;
      height: 50px;

      background: none;
      border: none;
    }
  }

  .item-content {
    padding: 0 20px 20px;
    margin: 4px;

    height: 80vh;
    overflow-y: auto;

    .image-container {
      width: 70vw;
      max-width: 400px;
      margin: 0 auto;

      img {
        width: 100%;
      }
    }

    .content-container {
      display: flex;
      flex-wrap: wrap;

      h1 {
        width: 100%;
        padding: 10px;

        color: var(--black-primary);
        font-size: var(--font-size-xlarge);
      }
      label {
        width: 100%;
        padding: 10px;
      }
      .category {
        font-size: var(--font-size-medium);
        font-weight: var(--font-w-normal);
        font-family: "normal";
        color: var(--gray-primary);
      }
      .price {
        font-size: var(--font-size-medium);
        font-weight: var(--font-w-bold);
        color: #732f16;
      }

      .description {
        font-weight: var(--font-w-normal);
        font-size: var(--font-size-medium);
        color: var(--gray-primary);
        margin-bottom: 0px;
      }

      .buttons-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }

      .top-buttons-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .top-button {
        margin: 0px 10px;
        width: 50%;
        height: 50px;
        font-size: var(--font-size-standart);
      }

      .botton-button {
        margin: 20px 10px;
        width: 100%;
        height: 50px;
        font-size: var(--font-size-standart);
      }

      h1 {
        margin-top: 20px;
        margin-bottom: 10px;
        padding-bottom: 10px;
        width: 100%;
        border-bottom: 1px solid var(--brown-xlight);
      }
    }

    //SCROLLBAR ============================
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
    //SCROLLBAR ============================
  }

  /* width */

  @media (min-width: 1024px) {
    .item-content {
      display: flex;
      flex-flow: wrap;

      .image-container {
        max-width: none;
        width: 50%;
      }

      .content-container {
        width: 50%;

        h1 {
          margin-top: 0px;
          font-size: 30px;
        }
      }
    }
    .item-rating {
      width: 100%;

      h1 {
        margin: 10px;
        padding: 10px;
        border-bottom: 1px solid var(--brown-xlight);
      }
    }
  }
`;

export const BackgroundTransparent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 9;
  background-color: rgb(0, 0, 0, 0.7);
`;
