import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./style.scss";

const CustomNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light style={{ paddingLeft: 30, paddingRight: 30 }}>
        <NavbarBrand onClick={() => document.getElementById("body").scrollIntoView()} className="mr-auto cursor-pointer">
          <h2>Wrthy</h2>
          <p>Tu coach inteligente</p>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="cursor-pointer" onClick={() => document.getElementById("objectives").scrollIntoView()}>
                Miramos por ti
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="cursor-pointer" onClick={() => document.getElementById("eDetail").scrollIntoView()}>
                Mejora contínua
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="cursor-pointer" onClick={() => document.getElementById("motivation").scrollIntoView()}>
                Motivación
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="cursor-pointer" onClick={() => document.getElementById("rates").scrollIntoView()}>
                Tarifas ajustadas a ti
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="cursor-pointer" onClick={() => document.getElementById("contact-form").scrollIntoView()}>
                Ponte en contacto
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
