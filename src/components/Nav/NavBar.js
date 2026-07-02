import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory, Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand as={Link} to="/" className="nav-brand">
        <span className="brand-icon">🌿</span>
        <span>Sonoma</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="main-navbar" />

      <Navbar.Collapse id="main-navbar">
        {currentUser ? (
          <>
            <Nav className="nav-left">
              <Nav.Link as={NavLink} exact to="/" activeClassName="active-nav">
                Dashboard
              </Nav.Link>

              <NavDropdown title="Apps" id="apps-dropdown">
                <NavDropdown.Item as={Link} to="/">
                  🌤️ Weather
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/todos">
                  ✅ Todo
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  📅 Calendar
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  📰 News
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  💬 Quotes
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="ml-auto nav-right">
              <NavDropdown title="👤 Tai" id="account-dropdown" alignRight>
                <NavDropdown.Item as={Link} to="/update-profile">
                  👤 Update Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  🚪 Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </>
        ) : (
          <Nav className="ml-auto nav-right">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="signup-pill">
              Sign Up
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
