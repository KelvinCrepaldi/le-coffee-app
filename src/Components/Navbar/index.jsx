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
import { CgShoppingBag } from "react-icons/cg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <Bars open={open} onClick={() => setOpen(!open)} />

      <NavMenu open={open}>
        <NavLink to="/home" activeStyle>
          Home
        </NavLink>
        <NavLink to="/catalogue" activeStyle>
          Produtos
        </NavLink>
        <NavLink to="/aboutus" activeStyle>
          Quem somos
        </NavLink>
        <NavLink to="/region" activeStyle>
          Região
        </NavLink>
      </NavMenu>

      <img src={logoNavbar} alt="Logo" />

      <ul>
        <li>
          <CgShoppingBag />
        </li>
        <li>
          <MdOutlineLogout />
        </li>
      </ul>
    </Nav>
  );
};
export default Navbar;
