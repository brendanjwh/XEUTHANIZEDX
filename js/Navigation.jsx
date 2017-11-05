import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";

const Navigation = () => (
  <Navbar className="navbar navbar-nav nav navbar-fixed-top">
    <Nav className="pullRight">
      <NavItem href="/About" id="nav-item" className="btn btn-outline-primary">
        About
      </NavItem>
      <NavItem href="/Music" id="nav-item" className="btn btn-outline-primary">
        Music
      </NavItem>
      <NavItem href="/" id="home" className="btn btn-outline-primary">
        XEUTHANIZEDX
      </NavItem>
      <NavItem href="/Merch" id="nav-item" className="btn btn-outline-primary">
        Merch
      </NavItem>
      <NavItem href="/Shows" id="nav-item" className="btn btn-outline-primary">
        Shows
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
