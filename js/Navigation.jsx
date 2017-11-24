import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import style, { css } from 'emotion'


const navItem = css`
  font-size: 175%;
  vertical-align: middle;
  opacity: .65;
  color: white;
  font-family: 'UnifrakturMaguntia', cursive;
`

const centerItem = css`
  font-size: 275%;
  vertical-align: middle;
  opacity: .9;
  color: white;
  font-family: 'Macondo Swash Caps', cursive;
`

const Navigation = () => (
  <Navbar className="navbar navbar-nav nav navbar-fixed-top">
    <Nav className="pullRight">
      <NavItem href="/About" className={navItem}>
        About
      </NavItem>
      <NavItem href="/Music" className={navItem}>
        Music
      </NavItem>
      <NavItem href="/" id="home" className={centerItem}>
        XEUTHANIZEDX
      </NavItem>
      <NavItem href="/Merch" className={navItem}>
        Merch
      </NavItem>
      <NavItem href="/Shows" className={navItem}>
        Shows
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
