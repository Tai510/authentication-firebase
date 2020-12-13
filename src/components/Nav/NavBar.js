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
import { GrUserSettings } from "react-icons/gr";

const NavBar = ({ logout, notify }) => {
  return (
    <Navbar className="NavBar" bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="home-button" href="/">
            <RiHome3Line id="nav-icons" />
            <label>Home</label>
          </Nav.Link>
          <Nav.Link className="home-button" href="/update-profile">
            <GrUserSettings id="nav-icons" />
            <label>Update Profile</label>
          </Nav.Link>
          <Nav.Link className="notification-button" href="#planner">
            <RiNotification3Line id="nav-icons" />
            <label>Noitification</label>
            <div href="#planner" className="notify-amount">
              <p>{notify}</p>
            </div>
          </Nav.Link>
        </Nav>
        <Form inline>
          <Button
            onClick={logout}
            className="dropdown-settings"
            variant="outline-success"
          >
            Logout
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
