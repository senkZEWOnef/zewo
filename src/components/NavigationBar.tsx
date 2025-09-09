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
              Blog & Poetry
            </NavLink>

            <NavLink to="/about" className="nav-link nav-accent">
              About
            </NavLink>

            {/* Admin backdoor access */}
            <NavLink
              to="/admin"
              className="nav-link nav-accent ms-3"
              style={{
                opacity: 0.3,
                fontSize: "0.9rem",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "0.3")}
            >
              <i className="bi bi-gear"></i>
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
                  className="ms-2"
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
