import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import ReactHover from '../node_modules/react-hover';

const optionsCursorTrueWithMargin = {
  followCursor: false,
  shiftX: 0,
  shiftY: 0
}

const hoverStyle = {
  color:'white'
}

const Navigation = () => (
  <Navbar className="navbar navbar-nav nav navbar-fixed-top">
    <Nav className="pullRight">
    <ReactHover
      options={optionsCursorTrueWithMargin}>
      <ReactHover.Trigger type='trigger'>
        <NavItem href="/About" id="nav-item" className="btn btn-outline-primary">
        About
        </NavItem>
      </ReactHover.Trigger>
      <ReactHover.Hover type='hover'>
        <NavItem href="/About" id="nav-item" className="btn btn-outline-primary" style={hoverStyle}>
        About
        </NavItem>
      </ReactHover.Hover>
    </ReactHover>
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
