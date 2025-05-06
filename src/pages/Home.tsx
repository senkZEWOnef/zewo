import { Container, Row, Col, Button } from "react-bootstrap";
import homeImage from "../assets/home.jpg";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f5efe6" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontFamily: "Cormorant Garamond", fontSize: "4rem" }}>
          I build things. I write things. I make things real.
        </h1>
        <Button variant="light" className="mt-4" href="#overview">
          Explore My Work
        </Button>
      </section>

      {/* Overview Section */}
      <Container className="py-5" id="overview">
        {/* Poet Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 style={{ fontFamily: "Cormorant Garamond" }}>Poetry</h2>
            <p>
              I’ve published books like <strong>Still, You</strong> and{" "}
              <strong>Rome</strong> — collections that dive into memory, love,
              and longing.
            </p>
            <Button variant="dark" href="/poet">
              Visit Poet Page
            </Button>
          </Col>
          <Col md={6}>
            <img
              src={homeImage}
              alt="Poetry"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Engineer Section */}
        <Row className="align-items-center mb-5 flex-md-row-reverse">
          <Col md={6}>
            <h2 style={{ fontFamily: "Cormorant Garamond" }}>Engineering</h2>
            <p>
              I build software that solves problems. From personal sites to
              functional tools — clean code with heart.
            </p>
            <Button variant="dark" href="/engineer">
              Visit Engineer Page
            </Button>
          </Col>
          <Col md={6}>
            <img
              src={homeImage}
              alt="Engineer"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Builder Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 style={{ fontFamily: "Cormorant Garamond" }}>Builder</h2>
            <p>
              Kitchens, closets, furniture — custom built from scratch in my
              workshop. Beauty meets functionality.
            </p>
            <Button variant="dark" href="/builder">
              Visit Builder Page
            </Button>
          </Col>
          <Col md={6}>
            <img
              src={homeImage}
              alt="Builder"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Shop Section */}
        <Row className="text-center">
          <Col>
            <h2 style={{ fontFamily: "Cormorant Garamond" }}>Shop</h2>
            <p>Browse my books and custom cabinetry options.</p>
            <Button variant="dark" href="/shop">
              Visit Shop
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
