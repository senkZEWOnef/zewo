import { Container, Row, Col, Form, Button, Carousel, Badge, Card } from "react-bootstrap";
import builderHero from "../assets/builder-hero.jpeg";
import "../styles/Builder.css";
import kitchen1 from "../assets/kitchen1.jpg";
import kitchen2 from "../assets/kitchen2.jpg";
import vanity1 from "../assets/vanity1.jpg";
import vanity2 from "../assets/vanity2.jpg";
import closet1 from "../assets/closet1.jpg";
import closet2 from "../assets/closet2.jpg";
import other1 from "../assets/other1.jpg";
import other2 from "../assets/other2.jpg";

const Builder = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("builder-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projectSections = [
    {
      title: "Kitchens",
      images: [kitchen1, kitchen2],
    },
    {
      title: "Vanities",
      images: [vanity1, vanity2],
    },
    {
      title: "Closets",
      images: [closet1, closet2],
    },
    {
      title: "Other Projects",
      images: [other1, other2],
    },
  ];

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white" }}>
      {/* Hero */}
      <section
        className="builder-hero d-flex align-items-center justify-content-center text-center position-relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10,15,44,0.7), rgba(139,69,19,0.4)), url(${builderHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "70vh",
        }}
      >
        <div className="hero-craftsman-pattern"></div>
        <div className="hero-content position-relative z-3" data-aos="fade-up">
          <div className="mb-4">
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3 builder-badge-pulse">
              <i className="bi bi-hammer me-2"></i>MASTER CRAFTSMAN
            </Badge>
          </div>
          <h1
            className="builder-title mb-4"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 400,
              letterSpacing: "2px",
            }}
          >
            Custom Cabinets & Woodwork
          </h1>
          <p
            className="builder-subtitle lead mb-5"
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
              maxWidth: "700px",
              margin: "0 auto 2rem",
              fontWeight: 300,
              letterSpacing: "0.5px"
            }}
          >
            Handcrafted with precision. Built to fit your space, your style, and your dreams.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button 
              className="builder-cta-btn"
              size="lg" 
              onClick={scrollToForm}
            >
              <i className="bi bi-calculator me-2"></i>
              Get Free Estimate
            </Button>
            <Button 
              variant="outline-light" 
              size="lg" 
              className="px-4 py-3"
              style={{
                borderRadius: "50px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                borderWidth: "2px"
              }}
              href="#gallery"
            >
              <i className="bi bi-images me-2"></i>
              View Portfolio
            </Button>
          </div>
          
          {/* Process Preview */}
          <div className="process-steps mt-5">
            <div className="process-step" data-aos="fade-up" data-aos-delay="200">
              <div className="step-number">1</div>
              <div className="step-title">Consult</div>
              <div className="step-description">Free consultation & measurements</div>
            </div>
            <div className="process-step" data-aos="fade-up" data-aos-delay="300">
              <div className="step-number">2</div>
              <div className="step-title">Design</div>
              <div className="step-description">Custom design & 3D mockup</div>
            </div>
            <div className="process-step" data-aos="fade-up" data-aos-delay="400">
              <div className="step-number">3</div>
              <div className="step-title">Craft</div>
              <div className="step-description">Handbuilt in my workshop</div>
            </div>
            <div className="process-step" data-aos="fade-up" data-aos-delay="500">
              <div className="step-number">4</div>
              <div className="step-title">Install</div>
              <div className="step-description">Professional installation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-5 gallery-section" style={{ position: "relative" }}>
        <div className="gallery-bg"></div>
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <Badge bg="info" text="white" className="px-4 py-2 mb-3">
              <i className="bi bi-collection me-2"></i>PORTFOLIO
            </Badge>
            <h2
              className="section-title mb-4"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                background: "linear-gradient(135deg, #daa520, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Crafted with Passion
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Each piece is uniquely designed and handcrafted to transform your space with quality that lasts generations.
            </p>
          </div>
          <Row className="g-4">
            {projectSections.map((section, idx) => (
              <Col md={6} lg={3} key={idx}>
                <Card
                  className="project-card h-100 border-0 position-relative"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  <div className="project-image-container">
                    <Carousel fade controls={section.images.length > 1} indicators={false}>
                      {section.images.map((img, i) => (
                        <Carousel.Item key={i}>
                          <img
                            src={img}
                            alt={section.title}
                            className="project-image d-block w-100"
                            style={{
                              height: "250px",
                              objectFit: "cover",
                            }}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <div className="project-overlay">
                      <div className="project-overlay-content">
                        <div className="project-overlay-icon">
                          <i className={`bi ${
                            idx === 0 ? 'bi-house-door' : 
                            idx === 1 ? 'bi-droplet' : 
                            idx === 2 ? 'bi-handbag' : 
                            'bi-tools'
                          }`}></i>
                        </div>
                        <p className="mb-0 fw-bold">View Details</p>
                      </div>
                    </div>
                  </div>
                  <Card.Body className="text-center p-4">
                    <h5 className="project-title mb-3">{section.title}</h5>
                    <p className="text-muted small mb-3">
                      {idx === 0 && "Custom kitchen solutions designed for your cooking style"}
                      {idx === 1 && "Beautiful vanities that maximize storage and style"}
                      {idx === 2 && "Organized closet systems that make the most of your space"}
                      {idx === 3 && "Unique furniture pieces crafted to your specifications"}
                    </p>
                    <Button
                      className="project-cta w-100"
                      onClick={scrollToForm}
                    >
                      <i className="bi bi-heart me-2"></i>
                      I Want This Style
                    </Button>
                    <div className="project-glow"></div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Estimate Section */}
      <section className="py-5 estimate-section">
        <Container>
          <div className="text-center" data-aos="fade-up">
            <Badge bg="success" text="white" className="px-4 py-2 mb-3">
              <i className="bi bi-calculator me-2"></i>PRICING
            </Badge>
            <div className="estimate-card mx-auto" style={{ maxWidth: "800px" }}>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 300,
                  background: "linear-gradient(135deg, #28a745, #fff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Transparent, Fair Pricing
              </h2>
              <p className="lead mb-4" style={{ color: "#ddd", lineHeight: 1.6 }}>
                Every project is unique. Get a detailed, personalized estimate based on your exact specifications, materials, and timeline.
              </p>
              
              <Row className="text-start mb-4">
                <Col md={6} className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3" style={{ fontSize: '1.5rem' }}></i>
                    <div>
                      <strong className="text-warning">Free Consultation</strong>
                      <div className="small text-muted">In-home measurement & design</div>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3" style={{ fontSize: '1.5rem' }}></i>
                    <div>
                      <strong className="text-warning">3D Mockups</strong>
                      <div className="small text-muted">See your project before we build</div>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3" style={{ fontSize: '1.5rem' }}></i>
                    <div>
                      <strong className="text-warning">Quality Materials</strong>
                      <div className="small text-muted">Premium wood & hardware</div>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3" style={{ fontSize: '1.5rem' }}></i>
                    <div>
                      <strong className="text-warning">Lifetime Craftsmanship</strong>
                      <div className="small text-muted">Built to last generations</div>
                    </div>
                  </div>
                </Col>
              </Row>
              
              <Button 
                className="builder-cta-btn"
                size="lg" 
                onClick={scrollToForm}
              >
                <i className="bi bi-chat-dots me-2"></i>
                Start Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Lead Form */}
      <section className="py-5 builder-form-section" id="builder-form">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3">
              <i className="bi bi-pencil-square me-2"></i>GET STARTED
            </Badge>
            <h2
              className="mb-4"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 300,
                background: "linear-gradient(135deg, #daa520, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Bring Your Vision to Life
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "600px", lineHeight: 1.6 }}>
              Share your ideas, upload inspiration photos, and tell me about your space. I'll create a custom design just for you.
            </p>
          </div>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="form-container" data-aos="fade-up" data-aos-delay="200">
                <Form>
                  <Form.Group className="mb-4" controlId="photo">
                    <Form.Label className="text-warning fw-semibold mb-3">Inspiration Photos (optional)</Form.Label>
                    <div className="file-input-wrapper">
                      <div className="file-input-custom">
                        <i className="bi bi-cloud-upload file-input-icon"></i>
                        <p className="mb-2 fw-semibold">Drop files here or click to browse</p>
                        <p className="small text-muted mb-0">Upload photos of styles you love, your current space, or sketches</p>
                        <Form.Control 
                          type="file" 
                          multiple 
                          accept="image/*" 
                          style={{ 
                            position: 'absolute', 
                            top: 0, 
                            left: 0, 
                            width: '100%', 
                            height: '100%', 
                            opacity: 0, 
                            cursor: 'pointer' 
                          }} 
                        />
                      </div>
                    </div>
                  </Form.Group>
                  
                  <Form.Group className="mb-4" controlId="description">
                    <Form.Label className="text-warning fw-semibold mb-3">Tell Me About Your Project *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="I'm looking for a custom kitchen with... OR I need a bathroom vanity that... OR I want built-in closet organizers for...

• What type of project? (kitchen, vanity, closet, etc.)
• Room dimensions if known
• Style preferences (modern, rustic, traditional)
• Special requirements or features
• Timeline and budget range"
                      className="builder-form-input"
                      required
                      style={{ resize: 'vertical' }}
                    />
                  </Form.Group>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4" controlId="name">
                        <Form.Label className="text-warning fw-semibold mb-3">Your Name *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your full name"
                          className="builder-form-input"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4" controlId="phone">
                        <Form.Label className="text-warning fw-semibold mb-3">Phone Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="(787) 555-0123"
                          className="builder-form-input"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-4" controlId="email">
                    <Form.Label className="text-warning fw-semibold mb-3">Email Address *</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="your.email@example.com"
                      className="builder-form-input"
                      required
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4" controlId="location">
                    <Form.Label className="text-warning fw-semibold mb-3">Project Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City, PR (for scheduling site visit)"
                      className="builder-form-input"
                    />
                  </Form.Group>
                  
                  <Button 
                    type="submit"
                    className="builder-submit-btn mt-3"
                  >
                    <i className="bi bi-send me-2"></i>
                    Request My Custom Quote
                  </Button>
                  <p className="text-center small text-muted mt-3 mb-0">
                    <i className="bi bi-shield-check me-1"></i>
                    Your information is secure and will only be used to provide your quote
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer same as Home */}
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

export default Builder;
