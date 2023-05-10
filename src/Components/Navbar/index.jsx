import React from "react";
import logoNavbar from "../../assets/logo.png";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "../../Styles/ComponentsStyle/Navbar/index";
import { useState } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { CgShoppingBag } from "react-icons/cg";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../../Providers/loginProvider/index";
import { CartContext } from "../../Providers/cartProvider";
import { BiUser } from "react-icons/bi";
const Navbar = () => {
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const { logout } = useContext(LoginContext);
  const { clearCart } = useContext(CartContext);

  const handleLogout = () => {
    clearCart("userToken");
    logout(history);
  };

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
        <NavLink to="/regionmap" activeStyle>
          Região
        </NavLink>
      </NavMenu>

      <img src={logoNavbar} alt="Logo" />

      <ul>
        <li>
          <NavLink to="/user">
            <BiUser />
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <CgShoppingBag />
          </NavLink>
        </li>
        <li onClick={handleLogout}>
          <NavLink to="/">
            <MdOutlineLogout />
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};
export default Navbar;
