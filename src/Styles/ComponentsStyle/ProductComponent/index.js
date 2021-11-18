import styled from "styled-components";

export const ProductContainer = styled.section`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;

  width: 90vw;
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
    button:hover {
      font-size: 25px;
      color: var(--brown-light);
    }
  }

  .item-content {
    padding: 0 20px 20px;
    margin: 4px;
    font-size: 0.5rem;
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
        padding: 10px;
        width: 100%;
        color: var(--black-primary);
        font-size: var(--font-size-xlarge);
      }
      .titleContainer {
        display: flex;
        width: 100%;
        border-bottom: 1px solid var(--brown-xlight);
      }

      .rate {
        display: flex;
        align-items: center;

        font-size: 30px;
        color: var(--brown-xlight);
        width: 110px;
        padding: 0;
      }
      span {
        padding: 10px;
      }
      .category {
        width: 100%;
        font-size: var(--font-size-medium);
        font-weight: var(--font-w-normal);
        font-family: "normal";
        color: var(--gray-primary);
      }
      .price {
        width: 100%;
        font-size: var(--font-size-medium);
        font-weight: var(--font-w-bold);
        color: #732f16;
      }

      .description {
        width: 100%;
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

      .top-button:hover {
        border-color: var(--brown-light);
        transition: 0.1s;
      }

      .top-button:active {
        border-color: var(--brown-dark);
        color: var(--brown-dark);
      }

      .botton-button {
        margin: 20px 10px;
        width: 100%;
        height: 50px;
        font-size: var(--font-size-standart);
        
      }

      .botton-button:hover {
        background-color: var(--brown-light);
        transition: 0.1s;
      }

      .botton-button:active {
        background-color: var(--brown-medium);
      }

      h1 {
        margin-top: 20px;
        margin-bottom: 10px;
        padding-bottom: 10px;
      }
    }

    .item-rating {
      width: 100%;


      h1 {
        color: var(--black-primary);
        margin: 10px;
        padding: 10px;
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
