import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";
import Logo from "./Logo";

const NavigationBar = () => {
  const userContext = useUser();
  const user = userContext?.user;
  const signOut = userContext?.signOut;
  const { getTotalItems } = useCart();

  return (
    <Navbar
      style={{ backgroundColor: "#131a33" }}
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <Logo variant="dark" size="md" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink to="/engineer" className="nav-link nav-accent">
              Engineer
            </NavLink>
            <NavLink to="/solar" className="nav-link nav-accent">
              Solar Energy
            </NavLink>
            <NavLink to="/builder" className="nav-link nav-accent">
              Builder
            </NavLink>
            <NavLink to="/poet" className="nav-link nav-accent">
              Poet
            </NavLink>

            <NavLink to="/shop" className="nav-link nav-accent">
              Shop
            </NavLink>

            <NavLink to="/about" className="nav-link nav-accent">
              About
            </NavLink>

            {!user && (
              <>
                <NavLink to="/signup" className="nav-link nav-accent">
                  Sign Up
                </NavLink>
                <NavLink to="/login" className="nav-link nav-accent">
                  Login
                </NavLink>
              </>
            )}

            {user && (
              <>
                <NavLink to="/admin" className="nav-link nav-accent">
                  Admin
                </NavLink>
                <span className="nav-link text-light">
                  Welcome, {user.email}
                </span>
                <Button
                  variant="outline-warning"
                  size="sm"
                  onClick={signOut}
                  className="ms-2"
                >
                  Logout
                </Button>
              </>
            )}

            <NavLink to="/cart" className="nav-link fs-5 ms-3 nav-accent position-relative">
              <i className="bi bi-cart"></i>
              {getTotalItems() > 0 && (
                <Badge
                  bg="warning"
                  text="dark"
                  className="position-absolute top-0 start-100 translate-middle rounded-pill"
                  style={{ fontSize: '0.7rem' }}
                >
                  {getTotalItems()}
                </Badge>
              )}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
