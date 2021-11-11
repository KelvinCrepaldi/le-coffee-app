import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: var(--font-size-medium);
  font-weight: var(--font-w-normal);
  box-sizing: border-box;
  border: none;
  border-radius: 17px;

  &.white {
    background-color: #fff;
    color: #808080;
  }

  &.brown {
    background-color: var(--brown-xlight);
    color: var(--white-primary);
  }
  &.unfill {
    border: 2px solid var(--brown-xlight);
    border-radius: 8px;
    background: var(--white-primary);
    color: var(--brown-xlight);
  }
`;
