import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Logo from "./Logo";

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
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <Logo variant="dark" size="md" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink to="/about" className="nav-link nav-accent">
              About
            </NavLink>
            <NavLink to="/engineer" className="nav-link nav-accent">
              Engineer
            </NavLink>
            <NavLink to="/solar" className="nav-link nav-accent">
              Solar Energy
            </NavLink>
            <NavLink to="/blog" className="nav-link nav-accent">
              Blog
            </NavLink>
            <NavLink to="/shop" className="nav-link nav-accent">
              Shop
            </NavLink>


            {user && (
              <>
                <span className="nav-link text-light">
                  Hey Zewo
                </span>
                <Button
                  variant="outline-warning"
                  size="sm"
                  onClick={signOut}
                  className="ms-lg-2 ms-0 mt-2 mt-lg-0"
                >
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
