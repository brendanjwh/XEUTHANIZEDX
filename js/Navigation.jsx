import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import style, { css } from 'emotion'

const Navigation = () => (
  <Navbar className="navbar navbar-nav nav navbar-fixed-top">
    <Nav className="pullRight">
      <NavItem href="/About" id="nav-item" className="btn">
        About
      </NavItem>
      <NavItem href="/Music" id="nav-item" className="btn">
        Music
      </NavItem>
      <NavItem href="/" id="home" className={css`font-size:275%`}>
        XEUTHANIZEDX
      </NavItem>
      <NavItem href="/Merch" id="nav-item" className="btn">
        Merch
      </NavItem>
      <NavItem href="/Shows" id="nav-item" className="btn">
        Shows
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
