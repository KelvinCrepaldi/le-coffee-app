import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../../Styles/ComponentsStyle/Navbar/index";
import { useState } from "react";
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

        <NavLink to="/">
          <h1 style={{ color: "white" }}>Le Coffee</h1>
        </NavLink>

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

      </Nav>
    </>
  );
};
export default Navbar;
