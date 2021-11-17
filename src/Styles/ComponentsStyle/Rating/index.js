import styled from "styled-components";

export const RatingContainer = styled.div`
  width: 100%;
  padding: 10px;

  //============= USER RATE ==========================

  .rate-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .rate-input {
    width: 100%;
    display: flex;
    padding-bottom: 7px;
    border-bottom: 1px solid rgba(170, 102, 85, 0.3);
    span {
      font-size: var(--font-size-large);
      color: var(--black-primary);
    }
    input {
      flex-grow: 1;

      font-size: 13px;
      padding-left: 15px;

      border: none;
      background-color: transparent;

      ::placeholder {
        color: rgb(100, 100, 100, 0.7);
      }
      :focus {
        outline: none;
      }
    }
  }

  .rate-button {
    width: 100%;
    padding: 5px;

    .buttonCancel {
      background-color: rgb(100, 100, 100, 0.4);
      width: 100px;
      height: 35px;
      margin-right: 5px;
    }

    .buttonPost {
      width: 100px;
      height: 35px;
    }
  }

  .mobile-500px {
    margin-top: 20px;
  }

  @media screen and (min-width: 500px) {
    .rate-button {
      display: flex;
      justify-content: right;
    }

    .mobile-500px {
      margin-top: 0px;
    }
  }

  //============= USER RATE ==========================
`;

//============= RATE CARD ==========================

export const RateCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 20px;
  h2 {
    width: 100%;
    margin: 0;
    padding: 0;
    color: var(--black-primary);
    font-weight: 400px;
  }

  .rating {
    width: 100%;
    color: black;
  }

  .text {
    color: var(--gray-600);
    width: 100%;
    font-size: var(--size-medium);
    font-weight: var(--font-w-normal);
    margin: 0px 20px;
    padding: 0px 6px;
    padding-top: 5px;
    border-left: 1px solid var(--brown-xlight);
  }

  :hover {
    border-left: 3px solid var(--brown-xlight);
    transition: 0.1s;
  }
`;
//============= RATE CARD ==========================
