import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/crm.jpg";
function Header() {
  return (
    <Navbar collapseOnSelect bg='info' variant='dark' expand='md'>
      <Navbar.Brand>
        <img src={logo} alt='logo' width='50px'></img>
      </Navbar.Brand>
      <Navbar.Toggle arial-controls='basic-navbar-nav'></Navbar.Toggle>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
          <Nav.Link href='/dashboard'>Tickets</Nav.Link>
          <Nav.Link href='/dashboard'>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
