import { useState } from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import poetHero from "../assets/poet.jpeg";
import "../styles/Poet.css";
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
        className="poet-hero d-flex flex-column align-items-center justify-content-center text-center position-relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10,15,44,0.7), rgba(25,25,112,0.5)), url(${poetHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "75vh",
        }}
      >
        <div className="hero-literary-pattern"></div>
        <div className="poet-hero-content" data-aos="fade-up">
          <div className="mb-4">
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3 poet-badge-pulse">
              <i className="bi bi-pen me-2"></i>POET & WRITER
            </Badge>
          </div>
          <h1
            className="poet-title mb-4"
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 400,
              letterSpacing: "2px",
            }}
          >
            Poetry & Reflections
          </h1>
          <p 
            className="poet-subtitle mb-5"
            style={{ 
              fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
              maxWidth: "600px",
              margin: "0 auto 2rem"
            }}
          >
            "Words to carry, thoughts to linger — where silence speaks louder than noise."
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button
              className={`poet-hero-btn ${view === 'poetry' ? 'active' : ''}`}
              onClick={() => setView("poetry")}
            >
              <i className="bi bi-book me-2"></i>
              Today's Poem
            </Button>
            <Button
              className={`poet-hero-btn ${view === 'opinions' ? 'active' : ''}`}
              onClick={() => setView("opinions")}
            >
              <i className="bi bi-chat-quote me-2"></i>
              Read Reflections
            </Button>
          </div>
        </div>
      </section>

      {/* Toggle Navigation */}
      <section className="text-center my-5">
        <div className="poet-toggle-nav">
          <Button
            className={`toggle-btn ${view === "poetry" ? "active" : ""}`}
            onClick={() => setView("poetry")}
          >
            <i className="bi bi-journal-text me-2"></i>
            Poetry
          </Button>
          <Button
            className={`toggle-btn ${view === "opinions" ? "active" : ""}`}
            onClick={() => setView("opinions")}
          >
            <i className="bi bi-lightbulb me-2"></i>
            Reflections
          </Button>
        </div>
      </section>

      {/* Poetry View */}
      {view === "poetry" && (
        <section className="content-section fade-in-content">
          <div className="content-bg"></div>
          <Container>
            <div className="text-center mb-5" data-aos="fade-up">
              <Badge bg="info" text="white" className="px-4 py-2 mb-3">
                <i className="bi bi-heart me-2"></i>FEATURED POEM
              </Badge>
              <h2
                className="section-title mb-4"
                style={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 300,
                  background: "linear-gradient(135deg, #8b4513, #fff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Today's Verse
              </h2>
            </div>
            
            <div className="featured-content-card" data-aos="fade-up" data-aos-delay="200">
              <h3 className="featured-title">{todayPoem.title}</h3>
              <div className="featured-content">{todayPoem.content}</div>
              <div className="text-center mt-4">
                <small className="text-muted">
                  <i className="bi bi-calendar3 me-2"></i>
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </small>
              </div>
            </div>

            <div className="text-center mb-5" data-aos="fade-up">
              <Badge bg="secondary" text="white" className="px-4 py-2 mb-3">
                <i className="bi bi-collection me-2"></i>ARCHIVE
              </Badge>
              <h2
                className="section-title mb-4"
                style={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  fontWeight: 300,
                  color: "#daa520",
                }}
              >
                From the Collection
              </h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
                Explore verses from my journey — each poem a moment captured in time.
              </p>
            </div>
            
            <Row className="g-4">
              {poemArchive.map((poem, idx) => (
                <Col md={4} key={idx}>
                  <div
                    className="archive-card"
                    data-aos="fade-up"
                    data-aos-delay={idx * 150}
                  >
                    <h5 className="archive-card-title">{poem.title}</h5>
                    <p className="archive-card-excerpt">{poem.excerpt}</p>
                    <Button className="archive-card-btn">
                      <i className="bi bi-arrow-right me-2"></i>
                      Read Full Poem
                    </Button>
                    <div className="archive-glow"></div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Opinions View */}
      {view === "opinions" && (
        <section className="content-section fade-in-content">
          <div className="content-bg"></div>
          <Container>
            <div className="text-center mb-5" data-aos="fade-up">
              <Badge bg="success" text="white" className="px-4 py-2 mb-3">
                <i className="bi bi-chat-square-quote me-2"></i>TODAY'S THOUGHTS
              </Badge>
              <h2
                className="section-title mb-4"
                style={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 300,
                  background: "linear-gradient(135deg, #4b0082, #fff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Daily Reflections
              </h2>
            </div>
            
            <div className="featured-content-card" data-aos="fade-up" data-aos-delay="200">
              <h3 className="featured-title">{todayOpinion.title}</h3>
              <div className="featured-content" style={{ fontStyle: 'normal' }}>{todayOpinion.content}</div>
              <div className="text-center mt-4">
                <small className="text-muted">
                  <i className="bi bi-lightbulb me-2"></i>
                  Reflection • {new Date().toLocaleDateString()}
                </small>
              </div>
            </div>

            <div className="text-center mb-5" data-aos="fade-up">
              <Badge bg="secondary" text="white" className="px-4 py-2 mb-3">
                <i className="bi bi-journal-bookmark me-2"></i>ARCHIVE
              </Badge>
              <h2
                className="section-title mb-4"
                style={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  fontWeight: 300,
                  color: "#daa520",
                }}
              >
                Thoughts & Commentary
              </h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
                Essays on culture, identity, and the human experience — perspectives shaped by heritage and observation.
              </p>
            </div>
            
            <Row className="g-4">
              {opinionsArchive.map((op, idx) => (
                <Col md={4} key={idx}>
                  <div
                    className="archive-card"
                    data-aos="fade-up"
                    data-aos-delay={idx * 150}
                  >
                    <div className="archive-card-category">{op.category}</div>
                    <h5 className="archive-card-title">{op.title}</h5>
                    <p className="archive-card-excerpt">{op.preview}</p>
                    <Button className="archive-card-btn">
                      <i className="bi bi-arrow-right me-2"></i>
                      Read Full Article
                    </Button>
                    <div className="archive-glow"></div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Books Showcase */}
      <section className="py-5 books-section">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3">
              <i className="bi bi-journals me-2"></i>PUBLISHED WORKS
            </Badge>
            <h2
              className="section-title mb-4"
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                background: "linear-gradient(135deg, #daa520, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Literary Collection
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Four books of poetry exploring love, loss, identity, and the spaces between silence and song.
            </p>
          </div>
          <Row className="g-4 justify-content-center">
            {books.map((book, idx) => (
              <Col md={6} lg={3} key={idx}>
                <div
                  className="book-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-100"
                  />
                  <div className="book-card-body">
                    <h4 className="book-title">{book.title}</h4>
                    <p className="book-intro">{book.intro}</p>
                    <Button className="book-btn" href={book.link}>
                      <i className="bi bi-book me-2"></i>
                      Explore Collection
                    </Button>
                  </div>
                  <div className="book-glow"></div>
                </div>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-5" data-aos="fade-up">
            <p className="text-muted">
              <i className="bi bi-shop me-2"></i>
              Available in digital and print editions • <a href="/shop" className="text-warning">Visit Shop</a>
            </p>
          </div>
        </Container>
      </section>

      {/* Literary Quote */}
      <section className="poet-quote-section">
        <Container>
          <div className="poet-quote-content" data-aos="fade-up">
            <div className="poet-quote">
              Poetry is the language we whisper when the world becomes too loud — 
              where silence holds more truth than a thousand spoken words.
            </div>
            <div className="text-center mt-4">
              <small className="text-muted">
                <i className="bi bi-dash-lg"></i> Ralph Ulysse <i className="bi bi-dash-lg"></i>
              </small>
            </div>
          </div>
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
