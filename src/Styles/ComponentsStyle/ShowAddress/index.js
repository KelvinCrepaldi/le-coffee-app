import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: 100vh;

  .Title {
    margin-top: 115px;
    font-size: var(--font-size-xlarge);
  }

  .Card {
    width: 94vw;
    margin: 26px 0 26px 0;
    border: 1px solid var(--brown-light);
    border-radius: 15px;


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