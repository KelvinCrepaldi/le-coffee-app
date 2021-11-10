import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  z-index: 10;
  margin: 0 auto;

  background: rgba(22, 22, 22, 0.522);
  box-shadow: 0 3px 3px rgba(255, 255, 255, 0.248);
  padding: 0.5rem calc((65vw - 1000px) / 2);
`;
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  :hover {
    background: var(--EletromagneticColor);
    transition: all 0.2s ease-in-out;
  }
  &.active {
    color: var(--orange);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
 
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({open}) =>  open ? "#333" : "#f1f1f1"};
    transition: all 0.3s linear;
    z-index: 1;
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
   
    position: fixed;
    background:  rgba(0, 0, 0, 0.9);
    top: 0;
    right:0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)" };
    height: 100vh;
    width:400px;
    padding-top: 3.5rem;
    text-align: left;
    transition: transform 0.5s ease-in-out
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
  border-radius: 4px;
  background: var(--orange);
  padding: 10px 22px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
    background: none;
  }
`;