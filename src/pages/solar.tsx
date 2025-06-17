import { Container, Row, Col, Form, Button } from "react-bootstrap";
import solarHero from "../assets/solar.jpeg";
import solarImg1 from "../assets/solarimage1.jpg";
import solarImg2 from "../assets/solarimage2.jpg";
import solarImg3 from "../assets/solarimage3.jpg";
import solarImg4 from "../assets/solarimage4.jpg";
import solarImg5 from "../assets/solarimage5.jpg";
import solarImg6 from "../assets/solarimage6.jpg";

const Solar = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("solar-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cards = [
    {
      img: solarImg1,
      title: "Wave of Blackouts",
      en: "Blackouts expected in Puerto Rico this summer.",
      es: "Apagones esperados en Puerto Rico este verano.",
      type: "default",
    },
    {
      img: solarImg2,
      title: "Lower Your Bill",
      en: "Pay less than your power bill.",
      es: "Paga menos que tu factura eléctrica.",
      type: "default",
    },
    {
      img: solarImg3,
      title: "Bad Credit? No Problem",
      en: "Solar with flexible plans.",
      es: "Solar con planes flexibles.",
      type: "default",
    },
    {
      img: solarImg4,
      title: "Clean Energy",
      en: "Use clean, renewable energy for your home.",
      es: "Energía limpia y renovable para tu hogar.",
      type: "default",
    },
    {
      img: solarImg5,
      title: "Increase Property Value",
      en: "Add value & independence.",
      es: "Aumenta el valor y la independencia.",
      type: "default",
    },
    {
      img: solarImg6,
      title: "Let's Meet for a Free Consultation",
      en: "Choose how you'd like to connect.",
      es: "",
      type: "action",
    },
  ];

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white" }}>
      {/* Hero */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${solarHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
        }}
      >
        <div className="hero-overlay">
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "3rem",
              fontWeight: 700,
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            }}
          >
            Solar Energy Consulting
          </h1>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
            }}
          >
            Power your home or business with clean, sustainable energy.
          </p>
        </div>
      </section>

      {/* Flip Cards */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {cards.map((card, idx) => (
              <Col md={6} lg={4} key={idx}>
                {card.type === "action" ? (
                  <div
                    className="solar-card"
                    style={{
                      backgroundImage: `url(${card.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "10px",
                      height: "250px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div className="solar-card-overlay d-flex flex-column justify-content-center align-items-center text-center px-3">
                      <h5>{card.title}</h5>
                      <p>{card.en}</p>
                      <div className="d-flex flex-column gap-2 mt-2">
                        <Button
                          variant="outline-warning"
                          size="sm"
                          onClick={scrollToForm}
                        >
                          Book a Zoom Call
                        </Button>
                        <Button
                          variant="outline-warning"
                          size="sm"
                          onClick={scrollToForm}
                        >
                          In-Person Meeting
                        </Button>
                        <Button
                          variant="outline-warning"
                          size="sm"
                          onClick={scrollToForm}
                        >
                          Request a Phone Call
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="flip-card"
                    onClick={scrollToForm}
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="flip-card-inner"
                      style={{
                        backgroundImage: `url(${card.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="flip-card-front">
                        <h5>{card.title}</h5>
                        <p>{card.en}</p>
                      </div>
                      <div className="flip-card-back">
                        <h5>{card.title}</h5>
                        <p>{card.es}</p>
                      </div>
                    </div>
                  </div>
                )}
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Form */}
      <section className="py-5" id="solar-form">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-4">
              <h2
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "2.5rem",
                }}
              >
                Request a Consultation
              </h2>
              <p style={{ color: "#ccc" }}>
                Fill out the form below and I'll get back to you to discuss your
                solar energy needs.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    style={{
                      backgroundColor: "#131a33",
                      color: "#fff",
                      border: "1px solid #444",
                      borderRadius: "8px",
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    style={{
                      backgroundColor: "#131a33",
                      color: "#fff",
                      border: "1px solid #444",
                      borderRadius: "8px",
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                    style={{
                      backgroundColor: "#131a33",
                      color: "#fff",
                      border: "1px solid #444",
                      borderRadius: "8px",
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell me more about your project..."
                    style={{
                      backgroundColor: "#131a33",
                      color: "#fff",
                      border: "1px solid #444",
                      borderRadius: "8px",
                    }}
                  />
                </Form.Group>
                <Button variant="outline-warning" type="submit">
                  Submit Request
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer - same as Home */}
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

export default Solar;
