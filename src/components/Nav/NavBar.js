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
        </Nav>
        <Form inline>
          <DropdownButton
            className="dropdown-settings"
            id="dropdown-basic-button"
            variant="outline-success"
            title="settings"
          >
            <Dropdown.Item href="/update-profile">Update Profile</Dropdown.Item>
            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          </DropdownButton>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
