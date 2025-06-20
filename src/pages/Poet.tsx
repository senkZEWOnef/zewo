import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import poetHero from "../assets/poet.jpeg";
import fiveamCover from "../assets/fiveamcover.jpeg";
import romeCover from "../assets/romecover.jpeg";
import oldGuitaristCover from "../assets/theoldguitaristcover.jpeg";
import stillYouCover from "../assets/stillyoucover.jpeg";

const Poet = () => {
  const [view, setView] = useState<"poetry" | "opinions">("poetry");

  const todayPoem = {
    title: "The Quiet Sea",
    content: `Today's tide carries my thoughts  
to shores where you wait —  
where silence is our language,  
and every wave a soft confession.`,
  };

  const poemArchive = [
    { title: "Dusk Song", excerpt: "At dusk, your name is a lantern..." },
    { title: "Unwritten Letters", excerpt: "So many letters I never sent..." },
    { title: "After Rain", excerpt: "After rain, everything whispers you..." },
  ];

  const todayOpinion = {
    title: "On Stillness and Noise",
    content: `In a world so loud, stillness is a rebellion.  
A place where ideas grow slowly, without applause.`,
  };

  const opinionsArchive = [
    {
      title: "Why Silence Matters",
      category: "Other",
      preview: "Thoughts on the wisdom found in stillness...",
    },
    {
      title: "Haiti: Beyond Headlines",
      category: "Haiti & PR Stories",
      preview: "A personal look at roots, history, and hope...",
    },
    {
      title: "Sportsmanship Redefined",
      category: "Sports",
      preview: "The true measure of a game well played...",
    },
  ];

  const books = [
    {
      title: "Five AM",
      cover: fiveamCover,
      intro: "Poems born in the quiet, restless early hours of dawn.",
      link: "/books/five-am",
    },
    {
      title: "Rome",
      cover: romeCover,
      intro: "A lyrical journey through the eternal city's hidden moments.",
      link: "/books/rome",
    },
    {
      title: "The Old Guitarist",
      cover: oldGuitaristCover,
      intro: "Verses inspired by Picasso’s painting — blue, broken, beautiful.",
      link: "/books/the-old-guitarist",
    },
    {
      title: "Still You",
      cover: stillYouCover,
      intro: "A deeply personal collection about love, distance, and return.",
      link: "/books/still-you",
    },
  ];

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white" }}>
      {/* Hero */}
      <section
        className="d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${poetHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "40px",
            borderRadius: "12px",
          }}
        >
          <h1
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "3.5rem",
              fontWeight: 700,
            }}
          >
            Poetry & Reflections
          </h1>
          <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
            Words to carry, thoughts to linger.
          </p>
          <div className="mt-3">
            <Button
              variant="outline-warning"
              className="me-2"
              onClick={() => setView("poetry")}
            >
              Today's Poem
            </Button>
            <Button
              variant="outline-warning"
              onClick={() => setView("opinions")}
            >
              Read Opinions
            </Button>
          </div>
        </div>
      </section>

      {/* Toggle */}
      <section className="text-center my-5">
        <Button
          variant={view === "poetry" ? "warning" : "outline-warning"}
          className="me-2 px-4"
          onClick={() => setView("poetry")}
        >
          Poetry
        </Button>
        <Button
          variant={view === "opinions" ? "warning" : "outline-warning"}
          className="px-4"
          onClick={() => setView("opinions")}
        >
          Opinions
        </Button>
      </section>

      {/* Poetry View */}
      {view === "poetry" && (
        <section className="pb-5">
          <Container>
            <h2
              className="mb-4 text-center"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Today's Poem
            </h2>
            <Card
              className="p-5 mb-5 mx-auto"
              style={{ backgroundColor: "#131a33", maxWidth: "800px" }}
            >
              <h4 style={{ fontFamily: "Cormorant Garamond" }}>
                {todayPoem.title}
              </h4>
              <p
                style={{
                  fontStyle: "italic",
                  whiteSpace: "pre-line",
                  fontSize: "1.2rem",
                }}
              >
                {todayPoem.content}
              </p>
            </Card>

            <h2
              className="mb-4 text-center"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Poetry Archive
            </h2>
            <Row className="g-4">
              {poemArchive.map((poem, idx) => (
                <Col md={4} key={idx}>
                  <Card
                    className="p-4 h-100 card-hover"
                    style={{ backgroundColor: "#131a33" }}
                  >
                    <h5>{poem.title}</h5>
                    <p>{poem.excerpt}</p>
                    <Button variant="outline-warning">Read More</Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Opinions View */}
      {view === "opinions" && (
        <section className="pb-5">
          <Container>
            <h2
              className="mb-4 text-center"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Today's Reflection
            </h2>
            <Card
              className="p-5 mb-5 mx-auto"
              style={{ backgroundColor: "#131a33", maxWidth: "800px" }}
            >
              <h4 style={{ fontFamily: "Cormorant Garamond" }}>
                {todayOpinion.title}
              </h4>
              <p style={{ whiteSpace: "pre-line", fontSize: "1.1rem" }}>
                {todayOpinion.content}
              </p>
            </Card>

            <h2
              className="mb-4 text-center"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Opinions Archive
            </h2>
            <Row className="g-4">
              {opinionsArchive.map((op, idx) => (
                <Col md={4} key={idx}>
                  <Card
                    className="p-4 h-100 card-hover"
                    style={{ backgroundColor: "#131a33" }}
                  >
                    <h5>{op.title}</h5>
                    <span className="text-info">{op.category}</span>
                    <p>{op.preview}</p>
                    <Button variant="outline-warning">Read Full</Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Books Showcase */}
      <section className="py-5">
        <Container>
          <h2
            className="text-center mb-5"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            My Books
          </h2>
          <Row className="g-4 justify-content-center">
            {books.map((book, idx) => (
              <Col md={6} lg={3} key={idx}>
                <Card
                  className="h-100 book-card"
                  style={{ backgroundColor: "#131a33", overflow: "hidden" }}
                >
                  <Card.Img
                    variant="top"
                    src={book.cover}
                    style={{ transition: "transform 0.4s ease" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.intro}</Card.Text>
                    <Button variant="outline-warning" href={book.link}>
                      Explore Book
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Gentle Quote */}
      <section
        className="py-5 text-center"
        style={{ backgroundColor: "#0e1337" }}
      >
        <Container>
          <blockquote style={{ fontStyle: "italic", fontSize: "1.2rem" }}>
            “Poetry is the language we whisper when the world is too loud.”
          </blockquote>
        </Container>
      </section>

      {/* Footer */}
      <footer
        className="text-white py-5"
        style={{ backgroundColor: "#131a33" }}
      >
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h4 style={{ fontFamily: "Cormorant Garamond" }}>Zewo</h4>
              <p style={{ color: "#ccc" }}>Build. Code. Write.</p>
            </Col>
            <Col md={4} className="mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled" style={{ color: "#aaa" }}>
                <li>
                  <a href="/" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/engineer" className="text-white">
                    Engineer
                  </a>
                </li>
                <li>
                  <a href="/solar" className="text-white">
                    Solar Energy
                  </a>
                </li>
                <li>
                  <a href="/builder" className="text-white">
                    Builder
                  </a>
                </li>
                <li>
                  <a href="/poet" className="text-white">
                    Poet
                  </a>
                </li>
                <li>
                  <a href="/shop" className="text-white">
                    Shop
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Contact</h5>
              <p>Email: your@email.com</p>
              <p>Phone: (787) 555-1234</p>
              <div className="d-flex gap-3 fs-4">
                <a
                  href="https://instagram.com/yourhandle"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://github.com/yourhandle"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://facebook.com/yourhandle"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://youtube.com/@yourhandle"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </Col>
          </Row>
          <p className="text-center mt-4 small text-muted">
            &copy; {new Date().getFullYear()} Zewo by Ralph Ulysse
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Poet;
