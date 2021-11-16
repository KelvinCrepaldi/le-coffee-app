import styled from "styled-components";

export const CartCard = styled.div`
  position: relative;
  display: flex;
  height: 165px;
  width: 88%;
  padding: 10px 0;
  margin: 0 auto;
  img {
    height: 60%;
  }

  .info {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    padding: 0 0 0 5px;
    margin-top: 10px;
    p {
      font-size: var(--font-size-medium);
      font-weight: var(--font-w-bold);
    }
    .price {
      color: var(--brown-light);
    }
  }

  button {
    position: absolute;
    bottom: 12%;
    right: 0;
    padding: 8px 10px;
    &:hover{
      background-color: var(--alert-error);
    }
  }
  &::after {
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
  @media (min-width: 768px) {
    width: 48vw;
    img{
      height: 100%;
    }
  }
  @media (min-width: 1024px) {
    width: 56vw;
    height: 125px;
  }
`;
