import { Container, Row, Col, Button, Form } from "react-bootstrap";
import engineerHero from "../assets/engineer.jpeg";

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
        className="d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${engineerHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "45vh",
        }}
      >
        <div className="hero-overlay">
          <h1
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "3rem",
              fontWeight: 700,
            }}
          >
            Automate. Build. Scale.
          </h1>
          <Button
            variant="outline-warning"
            className="mt-3"
            size="lg"
            href="#engineer-cards"
          >
            Let’s Build Together
          </Button>
          <a
            href="/resume.pdf"
            download
            className="text-warning mt-2"
            style={{ display: "block", textDecoration: "underline" }}
          >
            See Resume (Download)
          </a>
        </div>
      </section>

      {/* What I Do */}
      <section id="engineer-cards" className="py-5">
        <Container>
          <h2
            className="text-center mb-5"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            What I Can Do For You
          </h2>
          <Row className="g-4 justify-content-center">
            {cards.map((card, idx) => (
              <Col md={6} lg={4} key={idx}>
                <div
                  className="p-4 text-center bilingual-box h-100"
                  style={{
                    backgroundColor: "#0e1337",
                    borderRadius: "12px",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <i
                    className={`${card.icon} mb-3`}
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                  <h5 className="mb-3">{card.title}</h5>
                  <p className="desc-en">{card.en}</p>
                  <p className="desc-es">{card.es}</p>
                  {card.github ? (
                    <Button
                      variant="outline-warning"
                      href={card.github}
                      target="_blank"
                    >
                      Visit GitHub
                    </Button>
                  ) : (
                    <Button variant="outline-warning" href="#contact">
                      Get Started
                    </Button>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Request Form - styled same as Solar */}
      <section id="contact" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Request a Consultation</h2>
          <p className="text-center mb-4">
            Fill out the form below and I’ll get back to you to discuss your
            project.
          </p>
          <div
            className="p-4 rounded"
            style={{
              backgroundColor: "#131a33",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  style={{
                    backgroundColor: "#0a0f2c",
                    color: "white",
                    border: "1px solid #444",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    backgroundColor: "#0a0f2c",
                    color: "white",
                    border: "1px solid #444",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="How can I help you?"
                  style={{
                    backgroundColor: "#0a0f2c",
                    color: "white",
                    border: "1px solid #444",
                  }}
                />
              </Form.Group>

              <Button variant="warning" type="submit">
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
