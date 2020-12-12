import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./NavBar.css";
import { RiHome3Line } from "react-icons/ri";
import { RiNotification3Line } from "react-icons/ri";

const NavBar = ({ logout, notify }) => {
  return (
    <Navbar className="NavBar" bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="home-button" href="/">
            <RiHome3Line />
          </Nav.Link>
          <Nav.Link className="notification-button" href="#planner">
            <RiNotification3Line />
            <div href="#planner" className="notify-amount">
              <p>{notify}</p>
            </div>
          </Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Just in case
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Just in case
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Just in case
                </NavDropdown.Item>
              </NavDropdown> */}
        </Nav>
        <Form inline>
          {/* <Button onClick={logout} variant="outline-success">
            Logout
          </Button> */}
          <DropdownButton id="dropdown-basic-button" title="settings">
            <Dropdown.Item href="/update-profile">Profile</Dropdown.Item>
            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          </DropdownButton>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
