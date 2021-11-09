import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 320px;
  min-height: 100vh;

  background-color: var(--white-primary);
`;

export const PageContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 270px;

  h1 {
    font-size: var(--font-size-medium);
    color: #401309;
    font-weight: var(--font-w-normal);
    width: 100%;
  }
  span {
    width: 100%;
    font-size: var(--font-size-small);
    color: #212621;
  }

  .title {
    width: 176px;
    text-align: center;
  }
`;
