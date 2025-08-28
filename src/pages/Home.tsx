import { Container, Row, Col, Button, Carousel, Badge } from "react-bootstrap";
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
      <section className="position-relative overflow-hidden">
        <div className="hero-particles"></div>
        <Carousel fade interval={6000} controls indicators className="hero-carousel">
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
                height: "75vh",
                cursor: slide.link !== "/" ? "pointer" : "default",
                backgroundImage: `linear-gradient(45deg, rgba(10,15,44,0.3), rgba(19,26,51,0.6)), url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                position: "relative",
              }}
              onClick={() => {
                if (slide.link !== "/") {
                  window.location.href = slide.link;
                }
              }}
            >
              <div className="d-flex flex-column align-items-center justify-content-center h-100 hero-overlay position-relative">
                <div className="text-center animate-fade-up">
                  <h1
                    className="hero-title mb-4"
                    style={{
                      fontFamily: "Cormorant Garamond",
                      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                      fontWeight: "400",
                      textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
                      letterSpacing: "2px",
                    }}
                  >
                    {slide.title}
                  </h1>
                  <div className="tagline-container mb-5">
                    <p className="lead tagline" style={{ 
                      fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
                      fontWeight: "300",
                      letterSpacing: "1px",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
                    }}>
                      <span className="text-warning fw-bold">Build.</span>{" "}
                      <span className="text-info fw-bold">Code.</span>{" "}
                      <span className="text-success fw-bold">Write.</span>
                    </p>
                  </div>
                </div>
                {slide.link !== "/" && (
                  <div className="d-flex gap-3 justify-content-center animate-fade-up-delay">
                    <Button
                      variant="outline-warning"
                      size="lg"
                      className="hero-btn px-4 py-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = slide.link;
                      }}
                    >
                      <i className="bi bi-arrow-right me-2"></i>
                      Explore This Path
                    </Button>
                    <Button
                      variant="outline-light"
                      size="lg"
                      className="hero-btn-secondary px-4 py-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = "/about";
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                )}
                {slide.link === "/" && (
                  <div className="hero-stats d-flex gap-4 mt-5">
                    <div className="text-center">
                      <div className="stat-number">4+</div>
                      <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="stat-number">50+</div>
                      <div className="stat-label">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="stat-number">4</div>
                      <div className="stat-label">Books Published</div>
                    </div>
                  </div>
                )}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Four Paths, One Vision */}
      <section className="py-5" style={{ position: "relative", overflow: "hidden" }}>
        <div className="section-bg"></div>
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3" style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>
              EXPERTISE
            </Badge>
            <h2
              className="section-title"
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: "300",
                marginBottom: "1.5rem",
                background: "linear-gradient(135deg, #ffd700, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Four Paths, One Vision
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Combining technical expertise, creative craftsmanship, sustainable energy solutions, and artistic expression
            </p>
          </div>
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
                  className="expertise-card p-4 h-100 rounded position-relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  style={{ 
                    background: "linear-gradient(135deg, #131a33 0%, #1a2142 100%)",
                    border: "1px solid rgba(255, 215, 0, 0.1)",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  <div className="expertise-img-container mb-4 position-relative">
                    <img
                      src={section.img}
                      alt={section.title}
                      className="img-fluid rounded expertise-img"
                      style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                    <div className="expertise-overlay position-absolute top-0 start-0 w-100 h-100 rounded d-flex align-items-center justify-content-center">
                      <i className={`bi ${idx === 0 ? 'bi-code-slash' : idx === 1 ? 'bi-sun' : idx === 2 ? 'bi-hammer' : 'bi-pen'} fs-1 text-warning opacity-0`}></i>
                    </div>
                  </div>
                  <h5 className="expertise-title mb-3" style={{ 
                    fontFamily: "Cormorant Garamond", 
                    fontSize: "1.4rem",
                    fontWeight: "600",
                    color: "#ffd700"
                  }}>
                    {section.title}
                  </h5>
                  <p className="expertise-desc mb-4" style={{ 
                    fontSize: "0.95rem", 
                    color: "#bbb",
                    lineHeight: "1.6"
                  }}>
                    {section.desc}
                  </p>
                  <Button 
                    variant="outline-warning" 
                    href={section.link}
                    className="expertise-btn w-100 py-2"
                    style={{
                      borderWidth: "2px",
                      fontWeight: "500",
                      letterSpacing: "0.5px"
                    }}
                  >
                    <i className="bi bi-arrow-right me-2"></i>
                    Explore
                  </Button>
                  <div className="card-glow"></div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Latest Insights */}
      <section className="py-5 insights-section" style={{ 
        background: "linear-gradient(135deg, rgba(19,26,51,0.8) 0%, rgba(10,15,44,0.9) 100%)",
        position: "relative"
      }}>
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <Badge bg="info" text="white" className="px-4 py-2 mb-3" style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>
              LATEST INSIGHTS
            </Badge>
            <h2
              className="section-title"
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: "300",
                marginBottom: "1.5rem",
                background: "linear-gradient(135deg, #17a2b8, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Thoughts & Reflections
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Exploring ideas at the intersection of technology, culture, and human experience
            </p>
          </div>
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
                  className="insight-card p-4 rounded h-100 position-relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                  style={{
                    background: "linear-gradient(135deg, rgba(23,162,184,0.1) 0%, rgba(255,215,0,0.1) 100%)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div className="d-flex align-items-start gap-3">
                    <div className="insight-icon">
                      <i className="bi bi-lightbulb fs-4 text-info"></i>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-2" style={{ color: "#ffd700" }}>
                        {item.title}
                      </h5>
                      <p className="mb-3" style={{ fontSize: "1rem", color: "#ccc", lineHeight: "1.6" }}>
                        {item.preview}
                      </p>
                      <div className="d-flex align-items-center text-info small">
                        <span>Read more</span>
                        <i className="bi bi-arrow-right ms-2"></i>
                      </div>
                    </div>
                  </div>
                  <div className="insight-glow"></div>
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
              <p><i className="bi bi-envelope me-2"></i>contact@zewo.dev</p>
              <p><i className="bi bi-phone me-2"></i>(787) 555-1234</p>
              <p><i className="bi bi-geo-alt me-2"></i>San Juan, Puerto Rico</p>
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
