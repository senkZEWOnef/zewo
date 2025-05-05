import { Container, Row, Col, Button } from "react-bootstrap";

const Poet = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center mb-4">
        <Col md={8} data-aos="fade-down">
          <h1 className="text-center">Poet</h1>
          <p className="lead text-center">
            I write about love, longing, memory, and truth. These verses are not
            just words — they’re echoes of a life lived deeply.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} data-aos="fade-right">
          <h3>Published Books</h3>
          <ul>
            <li>
              <strong>Still, You</strong> (2025)
            </li>
            <li>
              <strong>Letters That Stayed</strong> (2023)
            </li>
            <li>
              <strong>Midnight Shapes</strong> (2021)
            </li>
          </ul>
        </Col>
        <Col md={6} data-aos="fade-left">
          <h3>Sample Poem</h3>
          <blockquote className="blockquote">
            <p>
              I wrote your name inside the wind, <br />
              just to see if it would come back. <br />
              It did. Every time.
            </p>
            <footer className="blockquote-footer">
              Excerpt from <cite title="Still, You">Still, You</cite>
            </footer>
          </blockquote>
        </Col>
      </Row>

      <Row className="text-center" data-aos="fade-up">
        <Col>
          <Button variant="dark" href="/shop">
            Buy a Book
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Poet;
