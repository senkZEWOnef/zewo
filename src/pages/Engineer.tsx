import { Container, Row, Col, Button } from "react-bootstrap";

const Engineer = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center mb-4">
        <Col md={8} data-aos="fade-down">
          <h1 className="text-center">Engineer</h1>
          <p className="lead text-center">
            I'm a software engineer passionate about building clean, scalable
            solutions using modern technologies like React, TypeScript, and
            Python.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} data-aos="fade-right">
          <h3>Skills & Tools</h3>
          <ul>
            <li>React / Next.js / TypeScript</li>
            <li>Node.js, Express</li>
            <li>Python, Java, C++, SQL</li>
            <li>GitHub, Docker, AWS (basic)</li>
          </ul>
        </Col>
        <Col md={6} data-aos="fade-left">
          <h3>Projects</h3>
          <ul>
            <li>
              <strong>Portfolio Site</strong> – This very site!
            </li>
            <li>
              <strong>Poetry Web App</strong> – React-based digital poetry
              reader
            </li>
            <li>
              <strong>Solar Lead Generator</strong> – Full-stack lead capture
              app for Puerto Rico
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="text-center" data-aos="fade-up">
        <Col>
          <Button
            variant="primary"
            href="https://github.com/ralphulysse"
            target="_blank"
          >
            View GitHub
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Engineer;
