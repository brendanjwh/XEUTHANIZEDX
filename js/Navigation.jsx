import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
// import { Nav, Navbar, NavItem } from "react-bootstrap";
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

const navBar = css`
  width: 100%;
  float:none;
  display: inline;
  text-align: center; 
  background: rgba(0,0,0, .3);
  justify-content: center;
  align-items: center;
  height: 50px;
`

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Nav className={navBar}>
          <Collapse isOpen={!this.state.collapsed} navbar>
                <NavItem><NavLink href="/About" className={navItem}>About</NavLink></NavItem>
                <NavItem><NavLink href="/Music" className={navItem}>Music</NavLink></NavItem>
                <NavItem><NavLink href="/" className={centerItem}>EUTHANIZED</NavLink></NavItem>
                <NavItem><NavLink href="/Merch" className={navItem}>Merch</NavLink></NavItem>
                <NavItem><NavLink href="/Shows" className={navItem}>Shows</NavLink></NavItem>
          </Collapse>
        </Nav>
      </div>
    );
  }
}