import { Container, Row, Col, Button, Form, Badge, Card } from "react-bootstrap";
import engineerHero from "../assets/engineer.jpeg";
import "../styles/Engineer.css";

const Engineer = () => {
  const cards = [
    {
      icon: "bi bi-window",
      title: "Custom Web Apps",
      en: "Bespoke websites & web tools crafted to your workflow.",
      es: "Sitios web y herramientas a medida para tu flujo de trabajo.",
    },
    {
      icon: "bi bi-robot",
      title: "Automations",
      en: "Automate repetitive tasks, save time & scale effortlessly.",
      es: "Automatiza tareas repetitivas, ahorra tiempo y escala fácilmente.",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Systems Integration",
      en: "Connect your tools & data for a unified experience.",
      es: "Conecta tus herramientas y datos para una experiencia unificada.",
    },
    {
      icon: "bi bi-plug",
      title: "API Development",
      en: "Robust, secure APIs for seamless third-party connections.",
      es: "APIs robustas y seguras para integraciones sin problemas.",
    },
    {
      icon: "bi bi-headset",
      title: "Consulting & Maintenance",
      en: "Expert advice & reliable support for your projects.",
      es: "Asesoría experta y soporte confiable para tus proyectos.",
    },
    {
      icon: "bi bi-github",
      title: "See My Work",
      en: "Explore my open-source and portfolio on GitHub.",
      es: "Explora mi código abierto y portafolio en GitHub.",
      github: "https://github.com/YOUR_GITHUB_USERNAME",
    },
  ];

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white" }}>
      {/* Hero */}
      <section
        className="engineer-hero d-flex flex-column align-items-center justify-content-center text-center position-relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10,15,44,0.8), rgba(19,26,51,0.6)), url(${engineerHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "70vh",
        }}
      >
        <div className="hero-pattern"></div>
        <div className="hero-content position-relative z-3" data-aos="fade-up">
          <div className="mb-4">
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3 badge-pulse">
              <i className="bi bi-code-slash me-2"></i>FULL-STACK ENGINEER
            </Badge>
          </div>
          <h1
            className="engineer-title mb-4"
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
              letterSpacing: "2px",
            }}
          >
            <span className="text-warning">Automate.</span>{" "}
            <span className="text-info">Build.</span>{" "}
            <span className="text-success">Scale.</span>
          </h1>
          <p className="lead mb-5" style={{
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            maxWidth: "600px",
            margin: "0 auto",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
          }}>
            Transforming ideas into powerful, scalable digital solutions with modern technology and clean architecture.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button
              variant="warning"
              className="engineer-btn px-5 py-3"
              size="lg"
              href="#engineer-cards"
            >
              <i className="bi bi-rocket me-2"></i>
              Let's Build Together
            </Button>
            <Button
              variant="outline-light"
              className="engineer-btn-secondary px-5 py-3"
              size="lg"
              href="/resume.pdf"
              target="_blank"
            >
              <i className="bi bi-file-earmark-person me-2"></i>
              View Resume
            </Button>
          </div>
          <div className="mt-5 d-flex justify-content-center gap-4 tech-stack">
            <div className="tech-badge" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-filetype-js"></i>
              <span>JavaScript</span>
            </div>
            <div className="tech-badge" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-database"></i>
              <span>Databases</span>
            </div>
            <div className="tech-badge" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-cloud"></i>
              <span>Cloud</span>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section id="engineer-cards" className="py-5 services-section" style={{ position: "relative" }}>
        <div className="services-bg"></div>
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <Badge bg="info" text="white" className="px-4 py-2 mb-3">
              <i className="bi bi-tools me-2"></i>SERVICES
            </Badge>
            <h2
              className="section-title mb-4"
              style={{ 
                fontFamily: "Cormorant Garamond",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: "300",
                background: "linear-gradient(135deg, #17a2b8, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              What I Can Do For You
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              From concept to deployment, I deliver end-to-end solutions that drive business growth and operational efficiency.
            </p>
          </div>
          <Row className="g-4 justify-content-center">
            {cards.map((card, idx) => (
              <Col md={6} lg={4} key={idx}>
                <Card
                  className="service-card h-100 border-0 position-relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  style={{
                    background: "linear-gradient(135deg, rgba(14,19,55,0.9) 0%, rgba(19,26,51,0.8) 100%)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,215,0,0.1)"
                  }}
                >
                  <Card.Body className="p-4 text-center position-relative">
                    <div className="service-icon-wrapper mb-4">
                      <div className="service-icon-bg"></div>
                      <i
                        className={`${card.icon} service-icon`}
                        style={{ 
                          fontSize: "3rem",
                          color: "#ffd700",
                          position: "relative",
                          zIndex: 2
                        }}
                      ></i>
                    </div>
                    <h5 className="service-title mb-3" style={{
                      fontFamily: "Cormorant Garamond",
                      fontSize: "1.4rem",
                      fontWeight: "600",
                      color: "#ffd700"
                    }}>
                      {card.title}
                    </h5>
                    <div className="bilingual-text position-relative" style={{ minHeight: "80px" }}>
                      <p className="service-desc-en" style={{ 
                        fontSize: "0.95rem", 
                        color: "#ccc",
                        lineHeight: "1.6",
                        position: "absolute",
                        width: "100%",
                        transition: "opacity 0.4s ease"
                      }}>
                        {card.en}
                      </p>
                      <p className="service-desc-es" style={{ 
                        fontSize: "0.95rem", 
                        color: "#ccc",
                        lineHeight: "1.6",
                        position: "absolute",
                        width: "100%",
                        opacity: 0,
                        transition: "opacity 0.4s ease"
                      }}>
                        {card.es}
                      </p>
                    </div>
                    <div className="mt-4">
                      {card.github ? (
                        <Button
                          variant="warning"
                          href={card.github}
                          target="_blank"
                          className="service-btn w-100 py-2"
                        >
                          <i className="bi bi-github me-2"></i>
                          Visit GitHub
                        </Button>
                      ) : (
                        <Button 
                          variant="outline-warning" 
                          href="#contact"
                          className="service-btn w-100 py-2"
                        >
                          <i className="bi bi-arrow-right me-2"></i>
                          Get Started
                        </Button>
                      )}
                    </div>
                    <div className="service-glow"></div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Request Form */}
      <section id="contact" className="py-5 contact-section" style={{ 
        background: "linear-gradient(135deg, rgba(19,26,51,0.8), rgba(10,15,44,0.9))",
        position: "relative"
      }}>
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <Badge bg="success" text="white" className="px-4 py-2 mb-3">
              <i className="bi bi-chat-dots me-2"></i>GET IN TOUCH
            </Badge>
            <h2 className="section-title mb-4" style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "300",
              background: "linear-gradient(135deg, #28a745, #fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Request a Consultation</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Ready to transform your idea into reality? Let's discuss your project and create something amazing together.
            </p>
          </div>
          <div
            className="contact-form-wrapper"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              background: "linear-gradient(135deg, rgba(19,26,51,0.8), rgba(14,19,55,0.9))",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              maxWidth: "700px",
              margin: "0 auto",
              padding: "3rem",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
            }}
          >
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="custom-input"
                  style={{
                    backgroundColor: "rgba(10,15,44,0.8)",
                    color: "white",
                    border: "2px solid rgba(255,215,0,0.2)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease"
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="custom-input"
                  style={{
                    backgroundColor: "rgba(10,15,44,0.8)",
                    color: "white",
                    border: "2px solid rgba(255,215,0,0.2)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease"
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Describe your project, goals, and timeline..."
                  className="custom-input"
                  style={{
                    backgroundColor: "rgba(10,15,44,0.8)",
                    color: "white",
                    border: "2px solid rgba(255,215,0,0.2)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease",
                    resize: "vertical"
                  }}
                />
              </Form.Group>

              <Button 
                variant="warning" 
                type="submit"
                size="lg"
                className="submit-btn w-100 py-3 mt-3"
                style={{
                  borderRadius: "10px",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease"
                }}
              >
                <i className="bi bi-send me-2"></i>
                Send Request
              </Button>
            </Form>
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

export default Engineer;
