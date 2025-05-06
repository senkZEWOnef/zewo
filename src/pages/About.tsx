import { Container, Row, Col, Button } from "react-bootstrap";
import profileImg from "../assets/home.jpg"; // use any placeholder for now

const About = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src={profileImg}
            alt="Ralph Ulysse"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h1 style={{ fontFamily: "Cormorant Garamond" }}>About Me</h1>
          <p className="mt-3">
            I’m Ralph Ulysse — a poet, a software engineer, and a builder. I’ve
            spent years shaping wood, shaping words, and shaping tools to bring
            visions to life.
          </p>
          <p>
            I was born in Haiti. I’ve built a workshop, published poetry, and
            launched apps — all in pursuit of honest, beautiful work.
          </p>
          <Button variant="dark" href="/contact">
            Reach Out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
