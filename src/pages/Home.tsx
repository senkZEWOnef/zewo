import { Container, Row, Col, Button } from "react-bootstrap";

// Real images
import homeImage from "../assets/home.jpg";
import builderImg from "../assets/builder.jpeg";
import engineerImg from "../assets/engineer.jpeg";
import poetImg from "../assets/poet.jpeg";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white" }}>
      {/* Hero Section */}
      <section
        className="hero-section text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          textShadow: "0 2px 4px rgba(0,0,0,0.7)",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontFamily: "Cormorant Garamond", fontSize: "3.2rem" }}>
            Welcome to Zewo
          </h1>
          <p className="lead mb-4" style={{ fontSize: "1.5rem" }}>
            Build. Code. Write.
          </p>
          <Button variant="light" size="lg" href="/shop">
            Explore My World
          </Button>
        </div>
      </section>

      {/* My World in Three Words */}
      <section className="py-5" style={{ backgroundColor: "#0a0f2c" }}>
        <Container>
          <h2
            className="text-center mb-5"
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2.5rem",
              fontWeight: "lighter",
            }}
          >
            My World in Three Words
          </h2>
          <Row>
            {[
              {
                title: "Builder",
                desc: "Custom kitchens, vanities, and furniture — built from scratch in my workshop.",
                img: builderImg,
                link: "/builder",
              },
              {
                title: "Engineer",
                desc: "I develop web tools, systems, and automations with modern tech.",
                img: engineerImg,
                link: "/engineer",
              },
              {
                title: "Poet",
                desc: "Books and verses about love, identity, and memory — written from the heart.",
                img: poetImg,
                link: "/poet",
              },
            ].map((section, idx) => (
              <Col md={4} className="text-center mb-4" key={idx}>
                <div
                  className="p-4 h-100 shadow-sm rounded"
                  style={{ backgroundColor: "#131a33" }}
                >
                  <img
                    src={section.img}
                    alt={section.title}
                    className="img-fluid rounded mb-3"
                    style={{
                      height: "180px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <h4 style={{ fontFamily: "Cormorant Garamond" }}>
                    {section.title}
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: "#ccc" }}>
                    {section.desc}
                  </p>
                  <Button variant="outline-light" href={section.link}>
                    Learn More
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Opinions Section */}
      <section
        className="py-5"
        style={{ backgroundColor: "#0a0f2c", color: "white" }}
      >
        <Container>
          <h2
            className="text-center mb-5"
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2.5rem",
              fontWeight: "lighter",
            }}
          >
            Opinions & Reflections
          </h2>
          <Row>
            {[
              {
                category: "Sports",
                quote:
                  "The beauty of the game isn’t just in victory, but in how we lose with grace.",
              },
              {
                category: "Politics",
                quote:
                  "When power listens more than it speaks, the world changes.",
              },
              {
                category: "Haiti & PR Stories",
                quote:
                  "From street corners in Port-au-Prince to sunsets in Mayagüez — resistance is culture.",
              },
              {
                category: "Other",
                quote:
                  "Not every loud voice is wise. Stillness has taught me more than crowds ever could.",
              },
            ].map((item, idx) => (
              <Col md={6} className="mb-4" key={idx}>
                <div
                  onClick={() => (window.location.href = "/poet#opinions")}
                  className="p-4 rounded shadow-sm h-100"
                  style={{
                    backgroundColor: "#131a33",
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "scale(1)";
                  }}
                >
                  <h5 className="text-info">{item.category}</h5>
                  <p style={{ fontSize: "1.1rem", fontStyle: "italic" }}>
                    “{item.quote}”
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
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
                  <a href="/builder" className="text-white">
                    Builder
                  </a>
                </li>
                <li>
                  <a href="/engineer" className="text-white">
                    Engineer
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

export default Home;
