import { Container, Row, Col, Card, Button } from "react-bootstrap";
import stillYou from "../assets/still-you.jpg";
import rome from "../assets/rome.jpg";
import oldGuitarist from "../assets/old-guitarist.jpg";
import fiveAM from "../assets/5am.jpg";

import poem1 from "../assets/poem1.jpg";
import poem2 from "../assets/poem2.jpg";
import poem3 from "../assets/poem3.jpg";
import poem4 from "../assets/poem4.jpg";

const poemImages = [poem1, poem2, poem3, poem4];
const randomPoemImage =
  poemImages[Math.floor(Math.random() * poemImages.length)];

const Poet = () => {
  return (
    <Container className="py-5">
      {/* Intro */}
      <section className="text-center mb-5">
        <h1 style={{ fontFamily: "Cormorant Garamond" }}>The Poet</h1>
        <p className="mt-3">
          Words saved me. I write to remember, to heal, to reach someone I may
          never meet.
        </p>
      </section>

      {/* Poem of the Week */}
      <section className="text-center mb-5">
        <h2 style={{ fontFamily: "Cormorant Garamond" }}>Poem of the Week</h2>
        <img
          src={randomPoemImage}
          alt="Poem of the Week"
          className="img-fluid rounded shadow mt-3"
          style={{ maxHeight: "500px" }}
        />
        <p className="mt-2">
          New excerpt every week from my poetry collections.
        </p>
      </section>

      {/* Books Section */}
      <section className="mb-5">
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Books
        </h2>
        <Row className="justify-content-center">
          <Col md={3} className="mb-4">
            <Card className="border-0 bg-transparent text-center">
              <Card.Img
                variant="top"
                src={stillYou}
                className="img-fluid shadow-sm"
              />
              <Card.Body>
                <Card.Title>Still, You</Card.Title>
                <Button
                  variant="dark"
                  href="https://amazon.com/still-you"
                  target="_blank"
                >
                  Buy on Amazon
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="border-0 bg-transparent text-center">
              <Card.Img
                variant="top"
                src={rome}
                className="img-fluid shadow-sm"
              />
              <Card.Body>
                <Card.Title>Rome</Card.Title>
                <Button
                  variant="dark"
                  href="https://amazon.com/rome"
                  target="_blank"
                >
                  Buy on Amazon
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="border-0 bg-transparent text-center">
              <Card.Img
                variant="top"
                src={oldGuitarist}
                className="img-fluid shadow-sm"
              />
              <Card.Body>
                <Card.Title>The Old Guitarist</Card.Title>
                <Button
                  variant="dark"
                  href="https://amazon.com/the-old-guitarist"
                  target="_blank"
                >
                  Buy on Amazon
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="border-0 bg-transparent text-center">
              <Card.Img
                variant="top"
                src={fiveAM}
                className="img-fluid shadow-sm"
              />
              <Card.Body>
                <Card.Title>5AM</Card.Title>
                <Button
                  variant="dark"
                  href="https://amazon.com/5am"
                  target="_blank"
                >
                  Buy on Amazon
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Poet;
