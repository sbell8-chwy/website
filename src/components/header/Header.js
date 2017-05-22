import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Nav bsStyle="tabs">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/about">About Me</NavItem>
      </Nav>
    );
  }
}

export default Header;
