import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Engineer = () => {
  return (
    <Container className="py-5">
      {/* Intro */}
      <section className="mb-5 text-center">
        <h1 style={{ fontFamily: "Cormorant Garamond" }}>
          Engineer & Problem Solver
        </h1>
        <p className="mt-3">
          I build digital tools that make life easier — from custom lead
          generators to full websites. I mix logic and creativity to bring real
          ideas to life with code.
        </p>
      </section>

      {/* Resume */}
      <section className="mb-5 text-center">
        <h2 style={{ fontFamily: "Cormorant Garamond" }}>Resume</h2>
        <p>You can view or download my resume below:</p>
        <Button variant="dark" href="/resume.pdf" target="_blank">
          View Resume
        </Button>
        {/* Or embed as iframe or image later */}
      </section>

      {/* Gallery */}
      <section className="mb-5">
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Project Gallery
        </h2>
        <Row>
          {[1, 2, 3].map((_, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Img variant="top" src="/placeholder-code.jpg" />
                <Card.Body>
                  <Card.Title>Project Title</Card.Title>
                  <Card.Text>Short description or tool used.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* GitHub Section */}
      <section className="text-center mb-5">
        <h2 style={{ fontFamily: "Cormorant Garamond" }}>See More on GitHub</h2>
        <p className="mb-3">Explore my repositories and ongoing projects:</p>
        <Button
          variant="dark"
          href="https://github.com/your-username"
          target="_blank"
        >
          Visit My GitHub
        </Button>
      </section>

      {/* Contact Section */}
      <section id="engineer-contact" className="mt-5">
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Work With Me
        </h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" variant="dark">
                Send
              </Button>
            </form>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Engineer;
