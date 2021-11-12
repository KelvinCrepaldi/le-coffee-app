import styled from "styled-components";

export const CounterCountainer = styled.div`
  width: 132;
  height: 69;
  display: flex;
  margin: 30px 10px;

  input {
    width: 70px;
    height: 70px;
    border: 4px solid var(--brown-xlight);
    border-radius: 20px 0 0 20px;
    text-align: center;
    font-size: 30px;
    color: var(--brown-xlight);
  }

  // Remove arrows input number ==============
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  // Remove arrows input number ==============

  button {
    width: 69px;
    height: 35px;
    background-color: var(--brown-xlight);
    border: none;
  }

  .buttonContainer {
    display: flex;
    flex-direction: column;
  }
  .top {
    border-top-right-radius: 20px;
    border-bottom: 1px solid white;
    color: white;
    font-size: 20px;
  }
  .bot {
    border-bottom-right-radius: 20px;
    border-top: 1px solid white;
    color: white;
    font-size: 20px;
  }
`;
