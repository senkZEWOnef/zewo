import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      {/* Hero Section */}
      <Row className="mb-5 text-center">
        <Col>
          <h1>Welcome to My World</h1>
          <p className="lead">
            I’m a software engineer, a builder with my own workshop, a published
            poet, and a creator of things that matter.
          </p>
        </Col>
      </Row>

      {/* 3 Identities */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>👨‍💻 Engineer</Card.Title>
              <Card.Text>
                Explore my work in software development, frontend apps, and tech
                experiments.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/engineer")}>
                View Projects
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🛠️ Builder</Card.Title>
              <Card.Text>
                Cabinets, kitchens, closets — crafted by hand and made to last.
              </Card.Text>
              <Button variant="success" onClick={() => navigate("/builder")}>
                Visit Workshop
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>📝 Poet</Card.Title>
              <Card.Text>
                Author of several poetry books — writing about love, longing,
                and life.
              </Card.Text>
              <Button variant="dark" onClick={() => navigate("/poet")}>
                Read Poetry
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Shop Teaser */}
      <Row className="my-5 text-center">
        <Col>
          <h3>🛒 Shop Coming Soon</h3>
          <p>
            You’ll soon be able to order books and custom-made items directly
            from the site.
          </p>
          <Button variant="outline-secondary" onClick={() => navigate("/shop")}>
            Visit Shop
          </Button>
        </Col>
      </Row>

      {/* Social Links */}
      <Row className="mt-5 text-center">
        <Col>
          <p>Follow me:</p>
          <a
            href="https://github.com/senkZEWOnef"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.instagram.com/_zewo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{" "}
          |{" "}
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
