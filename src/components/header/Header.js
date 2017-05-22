import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            Website
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight >
            <IndexLinkContainer to="/website"><NavItem>Home</NavItem></IndexLinkContainer>
            <LinkContainer to="/website/blog"><NavItem>Blog</NavItem></LinkContainer>
            <LinkContainer to="/website/about"><NavItem>About Me</NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
