import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

const NavigationBar = () => {
  const userContext = useUser();
  const user = userContext?.user;
  const signOut = userContext?.signOut;

  return (
    <Navbar
      style={{ backgroundColor: "#131a33" }}
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Zewo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/engineer" className="nav-link">
              Engineer
            </NavLink>
            <NavLink to="/builder" className="nav-link">
              Builder
            </NavLink>
            <NavLink to="/poet" className="nav-link">
              Poet
            </NavLink>
            <NavLink to="/shop" className="nav-link">
              Shop
            </NavLink>

            {!user && (
              <>
                <NavLink to="/signup" className="nav-link">
                  Sign Up
                </NavLink>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </>
            )}

            {user && (
              <>
                <NavLink to="/admin" className="nav-link">
                  Admin
                </NavLink>
                <span className="nav-link text-light">
                  Welcome, {user.email}
                </span>
                <Button variant="outline-light" size="sm" onClick={signOut}>
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
