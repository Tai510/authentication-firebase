import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const dashboard = <Link to='/'></Link>

  // LogOut Function
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  //////////////////////////////////

  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">MyDashBoard</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="settings & apps" id="collasible-nav-dropdown">
              <NavDropdown.Item href='/'><Link to="/">DashBoard</Link></NavDropdown.Item>
              <NavDropdown.Item href='/update-profile'>
              <Link to="/update-profile">Update Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href='/todos'>
              <Link to="/todos">My Todo</Link> <span id="Noti"></span>{" "}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default NavBar;
