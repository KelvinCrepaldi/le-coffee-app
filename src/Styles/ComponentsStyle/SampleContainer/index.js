import styled from "styled-components";

export const SampleContent = styled.div`
  z-index: 40;
  background-color: var(--white-primary);
  width: 60vw;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 20px;
  box-shadow: 2px 2px 5px 0px black;
  border: 5px solid var(--brown-xlight);
  padding: 30px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .closeButton {
    display: flex;
    justify-content: right;
    width: 100%;
  }

  h1 {
    margin: 20px 0px;
    color: var(--brown-xlight);
    text-shadow: 1px 1px 2px black;
    width: 100%;
    text-align: center;
  }
  span {
    color: var(--brown-dark);
    text-shadow: 1px 1px 2px black;
    width: 100%;
    text-align: center;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
    button {
      width: 100px;
      height: 30px;
      margin: 3px 10px;
      border: 2px solid var(--brown-xlight);
      color: var(--brown-xlight);
      border-radius: 5px;
    }
    button:hover {
      border-color: var(--brown-dark);
      color: var(--brown-dark);
    }
  }
`;
