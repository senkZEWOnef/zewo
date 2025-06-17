import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import "../styles/Home.css";

// Real images
import homeImage from "../assets/home.jpg";
import builderImg from "../assets/builder.jpeg";
import engineerImg from "../assets/engineer.jpeg";
import poetImg from "../assets/poet.jpeg";
import solarImg from "../assets/solar.jpg";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white" }}>
      {/* Hero Slideshow */}
      <section>
        <Carousel fade interval={5000} controls indicators>
          {[
            {
              img: homeImage,
              title: "Welcome to Zewo",
              link: "/", // stays on Home
            },
            {
              img: engineerImg,
              title: "Engineering Your Ideas",
              link: "/engineer",
            },
            {
              img: solarImg,
              title: "Powering You with Solar",
              link: "/solar",
            },
            {
              img: builderImg,
              title: "Building with Heart",
              link: "/builder",
            },
            {
              img: poetImg,
              title: "Writing from the Soul",
              link: "/poet",
            },
          ].map((slide, idx) => (
            <Carousel.Item
              key={idx}
              style={{
                height: "50vh",
                cursor: slide.link !== "/" ? "pointer" : "default",
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
              onClick={() => {
                if (slide.link !== "/") {
                  window.location.href = slide.link;
                }
              }}
            >
              <div className="d-flex flex-column align-items-center justify-content-center h-100 hero-overlay">
                <h1
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: "3.2rem",
                  }}
                >
                  {slide.title}
                </h1>
                <p className="lead mb-4" style={{ fontSize: "1.5rem" }}>
                  Build. Code. Write.
                </p>
                {slide.link !== "/" && (
                  <Button
                    variant="light"
                    size="lg"
                    className="hero-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = slide.link;
                    }}
                  >
                    Explore This Path
                  </Button>
                )}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Four Paths, One Vision */}
      <section className="py-5">
        <Container>
          <h2
            className="text-center mb-5"
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2.5rem",
              fontWeight: "lighter",
            }}
          >
            Four Paths, One Vision
          </h2>
          <Row>
            {[
              {
                title: "Engineer",
                desc: "I develop web tools, systems, and automations with modern tech.",
                img: engineerImg,
                link: "/engineer",
              },
              {
                title: "Solar Energy Consultant",
                desc: "Consulting services for sustainable, efficient solar energy solutions tailored to your home or business.",
                img: solarImg,
                link: "/solar",
              },
              {
                title: "Builder",
                desc: "Custom kitchens, vanities, and furniture — built from scratch in my workshop.",
                img: builderImg,
                link: "/builder",
              },
              {
                title: "Poet",
                desc: "Books and verses about love, identity, and memory — written from the heart.",
                img: poetImg,
                link: "/poet",
              },
            ].map((section, idx) => (
              <Col md={6} lg={3} className="text-center mb-4" key={idx}>
                <div
                  className="p-4 h-100 rounded card-hover"
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
                  <h5 style={{ fontFamily: "Cormorant Garamond" }}>
                    {section.title}
                  </h5>
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

      {/* Opinions & Reflections */}
      <section className="py-5">
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
                title: "Why We Play",
                preview: "A look at sportsmanship beyond winning.",
              },
              {
                title: "Power and Silence",
                preview: "Thoughts on listening and governance.",
              },
              {
                title: "Haitian Corners",
                preview: "Stories from Port-au-Prince to Mayagüez.",
              },
              {
                title: "The Quiet Teacher",
                preview: "Lessons learned in stillness.",
              },
            ].map((item, idx) => (
              <Col md={6} className="mb-4" key={idx}>
                <div
                  onClick={() => (window.location.href = "/poet#opinions")}
                  className="p-4 rounded shadow-sm h-100 opinion-box"
                >
                  <h5 className="fw-bold">{item.title}</h5>
                  <p style={{ fontSize: "1rem", color: "#ccc" }}>
                    {item.preview}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
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

export default Home;
