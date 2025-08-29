import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap";
import solarHero from "../assets/solar.jpeg";
import "../styles/Solar.css";
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
        className="solar-hero d-flex align-items-center justify-content-center text-center position-relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10,15,44,0.7), rgba(34,139,34,0.4)), url(${solarHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "70vh",
        }}
      >
        <div className="hero-solar-pattern"></div>
        <div className="solar-hero-content" data-aos="fade-up">
          <div className="mb-4">
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3 solar-badge-pulse">
              <i className="bi bi-sun me-2"></i>SOLAR ENERGY EXPERT
            </Badge>
          </div>
          <h1
            className="solar-title mb-4"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 400,
              letterSpacing: "2px",
            }}
          >
            Solar Energy Solutions
          </h1>
          <p 
            className="solar-subtitle mb-5"
            style={{ 
              fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
              maxWidth: "700px",
              margin: "0 auto 2rem"
            }}
          >
            Escape Puerto Rico's blackouts forever. Clean, reliable energy that saves money and increases your home's value.
          </p>
          
          {/* PR-specific callout */}
          <div className="pr-callout mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="pr-callout-title">
              <i className="bi bi-lightning-charge me-2"></i>
              Puerto Rico's Energy Crisis Solved
            </div>
            <div className="pr-callout-text">
              Join thousands of families who've achieved energy independence with solar power
            </div>
          </div>
          
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button
              className="solar-hero-btn px-5 py-3"
              size="lg"
              onClick={scrollToForm}
            >
              <i className="bi bi-calendar-check me-2"></i>
              Free Consultation
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              className="px-5 py-3"
              style={{
                borderRadius: "25px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                borderWidth: "2px"
              }}
              href="#benefits"
            >
              <i className="bi bi-info-circle me-2"></i>
              Learn Benefits
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="solar-benefits-section" id="benefits">
        <div className="benefits-bg-pattern"></div>
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <Badge bg="success" text="white" className="px-4 py-2 mb-3 solar-badge-pulse">
              <i className="bi bi-lightbulb me-2"></i>WHY SOLAR ENERGY?
            </Badge>
            <h2
              className="section-title mb-4"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                background: "linear-gradient(135deg, #ff8c00, #ffd700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Transform Your Energy Future
            </h2>
            <p className="lead text-light mx-auto" style={{ maxWidth: "700px", opacity: 0.9 }}>
              Discover the powerful benefits of solar energy for Puerto Rico families
            </p>
          </div>
          <Row className="g-4">
            {cards.slice(0, -1).map((card, idx) => (
              <Col md={6} lg={4} key={idx}>
                <div
                  className="solar-benefit-card"
                  onClick={scrollToForm}
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  <div className="benefit-card-image">
                    <img src={card.img} alt={card.title} />
                    <div className="benefit-overlay">
                      <i className="bi bi-sun benefit-icon"></i>
                    </div>
                  </div>
                  <div className="benefit-card-content">
                    <h5 className="benefit-title">{card.title}</h5>
                    <div className="benefit-text">
                      <p className="english">{card.en}</p>
                      <p className="spanish">{card.es}</p>
                    </div>
                    <div className="benefit-cta">
                      <Button className="benefit-btn" size="sm">
                        <i className="bi bi-arrow-right me-2"></i>
                        Learn More
                      </Button>
                    </div>
                  </div>
                  <div className="benefit-glow"></div>
                </div>
              </Col>
            ))}
          </Row>
          
          {/* Consultation CTA Card */}
          <div className="consultation-cta-section mt-5" data-aos="fade-up">
            <div className="consultation-cta-card">
              <div className="consultation-bg-image"
                style={{
                  backgroundImage: `url(${cards[cards.length - 1].img})`,
                }}
              ></div>
              <div className="consultation-content">
                <h3 className="consultation-title">
                  <i className="bi bi-calendar-check me-3"></i>
                  Ready to Go Solar?
                </h3>
                <p className="consultation-subtitle">
                  Choose your preferred consultation method and let's discuss your energy independence
                </p>
                <div className="consultation-options">
                  <Button
                    className="consultation-btn zoom-btn"
                    onClick={scrollToForm}
                  >
                    <i className="bi bi-camera-video me-2"></i>
                    Virtual Consultation
                  </Button>
                  <Button
                    className="consultation-btn meeting-btn"
                    onClick={scrollToForm}
                  >
                    <i className="bi bi-house me-2"></i>
                    In-Person Visit
                  </Button>
                  <Button
                    className="consultation-btn phone-btn"
                    onClick={scrollToForm}
                  >
                    <i className="bi bi-telephone me-2"></i>
                    Phone Discussion
                  </Button>
                </div>
              </div>
              <div className="consultation-glow"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Solar Consultation Form */}
      <section className="solar-form-section" id="solar-form">
        <div className="form-bg-pattern"></div>
        <Container>
          <div className="form-container" data-aos="fade-up">
            <div className="form-header text-center mb-5">
              <Badge bg="warning" text="dark" className="px-4 py-2 mb-3">
                <i className="bi bi-lightning-charge me-2"></i>FREE CONSULTATION
              </Badge>
              <h2 className="form-title">
                Start Your Solar Journey Today
              </h2>
              <p className="form-subtitle">
                Get a personalized solar energy assessment for your Puerto Rico home.
                <br />No commitment required – just expert guidance toward energy independence.
              </p>
            </div>
            
            <Row>
              <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                <div className="solar-form-card">
                  <Form>
                    <div className="form-section">
                      <h5 className="section-header">
                        <i className="bi bi-person-circle me-2"></i>
                        Contact Information
                      </h5>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name *</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="First name"
                              className="solar-input"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last Name *</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Last name"
                              className="solar-input"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="your@email.com"
                          className="solar-input"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="phone">
                        <Form.Label>Phone Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="(787) 555-0123"
                          className="solar-input"
                          required
                        />
                      </Form.Group>
                    </div>
                    
                    <div className="form-section">
                      <h5 className="section-header">
                        <i className="bi bi-house me-2"></i>
                        Property Details
                      </h5>
                      <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Property Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Street address, city, PR"
                          className="solar-input"
                        />
                      </Form.Group>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="homeType">
                            <Form.Label>Home Type</Form.Label>
                            <Form.Select className="solar-input">
                              <option value="">Select type...</option>
                              <option value="single-family">Single Family Home</option>
                              <option value="townhouse">Townhouse</option>
                              <option value="condo">Condo/Apartment</option>
                              <option value="other">Other</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-4" controlId="monthlyBill">
                            <Form.Label>Monthly Electric Bill</Form.Label>
                            <Form.Select className="solar-input">
                              <option value="">Select range...</option>
                              <option value="under-100">Under $100</option>
                              <option value="100-200">$100 - $200</option>
                              <option value="200-300">$200 - $300</option>
                              <option value="300-400">$300 - $400</option>
                              <option value="over-400">Over $400</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                    
                    <div className="form-section">
                      <h5 className="section-header">
                        <i className="bi bi-calendar-event me-2"></i>
                        Consultation Preference
                      </h5>
                      <Form.Group className="mb-3" controlId="consultationType">
                        <Form.Label>Preferred Meeting Type</Form.Label>
                        <div className="consultation-radio-group">
                          <Form.Check
                            type="radio"
                            name="consultationType"
                            id="virtual"
                            label="Virtual Meeting (Zoom/Teams)"
                            className="consultation-radio"
                          />
                          <Form.Check
                            type="radio"
                            name="consultationType"
                            id="in-person"
                            label="In-Person Home Visit"
                            className="consultation-radio"
                          />
                          <Form.Check
                            type="radio"
                            name="consultationType"
                            id="phone"
                            label="Phone Consultation"
                            className="consultation-radio"
                          />
                        </div>
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="message">
                        <Form.Label>Additional Details</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Tell me about your energy goals, any specific concerns, or questions you have..."
                          className="solar-input"
                        />
                      </Form.Group>
                    </div>
                    
                    <div className="form-submit-section text-center">
                      <Button className="solar-submit-btn" size="lg" type="submit">
                        <i className="bi bi-send me-2"></i>
                        Request Free Consultation
                      </Button>
                      <p className="form-disclaimer mt-3">
                        <i className="bi bi-shield-check me-1"></i>
                        Your information is secure and will never be shared. 
                        Free consultation with no obligations.
                      </p>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Solar Stats Section */}
      <section className="solar-stats-section">
        <Container>
          <div className="stats-content" data-aos="fade-up">
            <Row>
              <Col md={3} sm={6} className="text-center mb-4">
                <div className="stat-item">
                  <div className="stat-number">2000+</div>
                  <div className="stat-label">Homes Powered</div>
                </div>
              </Col>
              <Col md={3} sm={6} className="text-center mb-4">
                <div className="stat-item">
                  <div className="stat-number">$2M+</div>
                  <div className="stat-label">Savings Generated</div>
                </div>
              </Col>
              <Col md={3} sm={6} className="text-center mb-4">
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Customer Satisfaction</div>
                </div>
              </Col>
              <Col md={3} sm={6} className="text-center mb-4">
                <div className="stat-item">
                  <div className="stat-number">5★</div>
                  <div className="stat-label">Average Rating</div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Footer - same as Home */}
      <footer
        className="text-white py-5"
        style={{ backgroundColor: "#0f1419" }}
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
