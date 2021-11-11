import styled from "styled-components";

export const ProductContainer = styled.section`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  top: 40px;

  width: 90vw;
  background-color: white;
  .close-button {
    display: flex;
    justify-content: right;

    width: 100%;
    height: 30px;

    button {
      width: 30px;
      height: 30px;
    }
  }

  .item-content {
    padding: 0 20px 20px;

    .image-container {
      width: 80vw;
      max-width: 400px;

      margin: 0 auto;

      border: 1px solid green;
      img {
        width: 100%;
      }
    }

    .content-container {
      display: flex;
      flex-wrap: wrap;

      border: 1px solid red;

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
      }
      .price {
        font-size: var(--font-size-medium);
        font-weight: var(--font-w-bold);
        color: #732f16;
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
        margin: 0px 20px;
        width: 50%;
        height: 45px;
        font-size: var(--font-size-standart);
      }

      .botton-button {
        margin: 15px 20px;
        width: 100%;
        height: 45px;
        font-size: var(--font-size-standart);
      }
    }
  }
`;
