import React, { createContext } from "react";
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
import { MdOutlineLogout } from "react-icons/md";
import { CgShoppingBag } from "react-icons/cg";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../../Providers/loginProvider/index";

const Navbar = () => {
  const history = useHistory();
  const { logout } = useContext(LoginContext);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout(history)
  }

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
          <NavLink to="/cart">
            <CgShoppingBag />
          </NavLink>
        </li>
        <li onClick={handleLogout}>
          <MdOutlineLogout />
        </li>
      </ul>
    </Nav>
  );
};
export default Navbar;
