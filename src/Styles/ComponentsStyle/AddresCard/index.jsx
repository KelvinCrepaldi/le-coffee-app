import styled from "styled-components";

export const AdCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 5px 10px;
  height: 50px;
  text-align: center;
  border: none;

  &::after{
    content: " ";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;

    height: 1px;
    width: 100%;

    background: var(--gray-medium);
  }
`;
