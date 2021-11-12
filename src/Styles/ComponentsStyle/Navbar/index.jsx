import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  padding: 0.5rem calc((65vw - 1000px) / 2);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    margin-right: 168px;
    margin-top: 10px;
    width: 150px;
    height: 150px;
    cursor: pointer;
  }

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    list-style: none;
    li {
      margin: 0.8rem;

      svg {
        font-size: 34px;
        color: var(--gray-300);
        
        cursor: pointer;
        :hover{
          color: var(--white-primary);
        }
      }
    }
    @media screen and (max-width: 768px) {
      position: absolute;
      right: 0;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    img {
      position: absolute;
      left: 50%;
      width: 60px;
      height:60px;
      transform: translateX(-50%);
    
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1.5rem;

  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  :hover {
    background: var(--brown-primary);
    transition: all 0.2s ease-in-out;
  }
  &.active {
    color: var(--brown-primary);
  }
`;

export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ open }) => (open ? "#fff" : "#ffffff6f")};
    transition: all 0.3s linear;
    z-index: 1001;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  .invalid {
    color: gray;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    width: 400px;

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    padding-top: 3.5rem;
    text-align: left;
    transition: transform 0.5s ease-in-out;
    background: var(--brown-light);
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  margin-left: 24px;
  @media screen and (max-width: 768px) {
    background: none;
  }
`;

export const NavBtnLink = styled(Link)`
  transition: all 0.2s ease-in-out;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
    background: none;
  }
`;
