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
import Todo from "../../components/Todo/Todo";

const NavBar = ({ logout, notify }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">LifeTracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="My Folder" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/update-profile">Account</NavDropdown.Item>
            <NavDropdown.Item href="/todos">
              Todo List{" "}
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">TBA</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav></Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
