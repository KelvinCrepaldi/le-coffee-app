import React from "react";
import logoNavbar from "../../assets/logo.png";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Content,
} from "../../Styles/ComponentsStyle/Navbar/index";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Nav>
        <Bars open={open} onClick={() => setOpen(!open)} />

        <NavMenu open={open}>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/products" activeStyle>
            Produtos
          </NavLink>
          <NavLink to="/region" activeStyle>
            Região
          </NavLink>
        </NavMenu>

        <img src={logoNavbar}></img>

        <ul>
          <li>
            <AiOutlineShoppingCart />
          </li>
          <li>
            <MdOutlineLogout />
          </li>
        </ul>
      </Nav>
    </>
  );
};
export default Navbar;
