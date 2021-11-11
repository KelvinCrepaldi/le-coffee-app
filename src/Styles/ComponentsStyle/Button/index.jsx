import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 265px;
  height: 54px;
  font-size: var(--font-size-medium);
  font-weight: var(--font-w-normal);

  border: none;
  border-radius: 17px;
  background-color: ${(props) =>
    props.variant === "white" ? "#FFFF" : "var(--brown-primary)"};
  color: ${(props) =>
    props.variant === "white" ? "var(--gray-300)" : "var(--white-primary)"};

  @media (min-width: 1024px) {
    display: ${(props) => props.variant === "white" && "none"};
  }
`;
