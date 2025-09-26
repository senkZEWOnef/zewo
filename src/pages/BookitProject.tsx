import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/About.css";

const BookitProject = () => {
  const features = {
    core: [
      "WhatsApp-Native: Confirmations, reminders, and reschedule links sent via WhatsApp",
      "Deposit Protection: Collect deposits upfront with Stripe or ATH Móvil",
      "Bilingual Support: All texts and templates available in English and Spanish",
      "Mobile-First: One-tap booking flow optimized for mobile devices",
      "No-Show Prevention: Automated reminders and deposit requirements"
    ],
    business: [
      "Real-time Calendar: View appointments by day/week with instant updates",
      "Service Management: Define services with duration, pricing, and deposit requirements",
      "Staff Scheduling: Manage multiple staff members with individual calendars",
      "Availability Control: Set weekly hours and date exceptions",
      "Payment Processing: Stripe integration with ATH Móvil fallback",
      "Manual WhatsApp: Generate pre-filled WhatsApp messages with one click"
    ],
    customer: [
      "Simple Booking: Pick service → time → pay deposit → confirmed",
      "WhatsApp Updates: All communications through their preferred channel",
      "Self-Service: Reschedule or cancel appointments independently",
      "Calendar Integration: Download ICS files to add to their calendar"
    ]
  };

  const techStack = [
    { category: "Frontend", items: ["Next.js 14 (App Router)", "React", "Bootstrap 5"] },
    { category: "Backend", items: ["Supabase (PostgreSQL + Auth + RLS)"] },
    { category: "Payments", items: ["Stripe Checkout", "ATH Móvil integration"] },
    { category: "Messaging", items: ["WhatsApp manual mode (wa.me links)"] },
    { category: "Styling", items: ["React Bootstrap", "Custom CSS"] },
    { category: "Language", items: ["TypeScript throughout"] }
  ];

  const targetMarket = [
    "Barbers/Hair Salons: Live in WhatsApp, hate no-shows",
    "Beauty Services: Nails, lashes, need deposit protection",
    "Home Services: Cleaners, handymen, need route planning",
    "Personal Services: Tutors, trainers, reschedules matter",
    "Small Clinics: Assistants run everything on WhatsApp"
  ];

  const differentiators = [
    "WhatsApp-First: Built specifically for WhatsApp communication",
    "Bilingual by Design: Not an afterthought, core feature",
    "Local Payment Methods: ATH Móvil for Puerto Rico",
    "Mobile-Optimized: Works perfectly on phones",
    "No-Show Protection: Deposits and automated reminders",
    "Manual First: No complex API setups, works immediately"
  ];

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(10,15,44,0.8), rgba(19,26,51,0.6))",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center"
      }}>
        <Container>
          <div className="text-center" data-aos="fade-up">
            <div className="mb-4">
              <Link to="/about" className="text-light text-decoration-none">
                <i className="bi bi-arrow-left me-2"></i>Back to Portfolio
              </Link>
            </div>
            
            <div className="mb-4">
              <span style={{ fontSize: "4rem" }}>📅</span>
            </div>
            
            <Badge bg="info" className="px-4 py-2 mb-3">
              <i className="bi bi-whatsapp me-2"></i>WHATSAPP-FIRST BOOKING
            </Badge>
            
            <h1 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
              marginBottom: "2rem"
            }}>
              <span className="text-info">BookIt</span> by Zewo
            </h1>
            
            <p className="lead mb-4" style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              maxWidth: "800px",
              margin: "0 auto 2rem",
              color: "#ccc"
            }}>
              A Calendly built for WhatsApp. Service providers get a shareable booking link that confirms appointments, 
              collects deposits, and sends updates via WhatsApp first (with SMS fallback). Bilingual (EN/ES), 
              Puerto Rico-friendly (Stripe + ATH Móvil).
            </p>
            
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="info"
                href="https://bookitbyzewo.netlify.app"
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-globe me-2"></i>
                Live Demo
              </Button>
              <Button
                variant="outline-light"
                href="https://github.com/senkZEWOnef/bookitbyzewo"
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-github me-2"></i>
                View Source
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#17a2b8"
          }} data-aos="fade-up">
            Core Features
          </h2>
          
          <Row className="g-4">
            <Col lg={4}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)"
              }} data-aos="fade-up" data-aos-delay="100">
                <Card.Body className="p-4">
                  <h4 className="text-info mb-3">
                    <i className="bi bi-gear me-2"></i>Core Functionality
                  </h4>
                  <ul className="list-unstyled">
                    {features.core.map((feature, index) => (
                      <li key={index} className="mb-2 text-light">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)"
              }} data-aos="fade-up" data-aos-delay="200">
                <Card.Body className="p-4">
                  <h4 className="text-warning mb-3">
                    <i className="bi bi-briefcase me-2"></i>For Business Owners
                  </h4>
                  <ul className="list-unstyled">
                    {features.business.map((feature, index) => (
                      <li key={index} className="mb-2 text-light">
                        <i className="bi bi-check-circle-fill text-warning me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)"
              }} data-aos="fade-up" data-aos-delay="300">
                <Card.Body className="p-4">
                  <h4 className="text-success mb-3">
                    <i className="bi bi-people me-2"></i>For Customers
                  </h4>
                  <ul className="list-unstyled">
                    {features.customer.map((feature, index) => (
                      <li key={index} className="mb-2 text-light">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#ffd700"
          }} data-aos="fade-up">
            Technical Architecture
          </h2>
          
          <Row className="g-4">
            {techStack.map((tech, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0" style={{
                  background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,215,0,0.2)"
                }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card.Body className="p-4 text-center">
                    <h5 className="text-warning mb-3">{tech.category}</h5>
                    {tech.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} bg="dark" text="light" className="me-2 mb-2 px-3 py-2">
                        {item}
                      </Badge>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Target Market & Differentiators */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <Row className="g-5">
            <Col lg={6}>
              <div data-aos="fade-right">
                <h3 className="mb-4" style={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: "2rem",
                  color: "#28a745"
                }}>
                  <i className="bi bi-bullseye me-2"></i>Target Market
                </h3>
                <ul className="list-unstyled">
                  {targetMarket.map((market, index) => (
                    <li key={index} className="mb-3 text-light">
                      <i className="bi bi-arrow-right-circle-fill text-success me-3"></i>
                      {market}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            
            <Col lg={6}>
              <div data-aos="fade-left">
                <h3 className="mb-4" style={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: "2rem",
                  color: "#dc3545"
                }}>
                  <i className="bi bi-star me-2"></i>Key Differentiators
                </h3>
                <ul className="list-unstyled">
                  {differentiators.map((diff, index) => (
                    <li key={index} className="mb-3 text-light">
                      <i className="bi bi-check-circle-fill text-danger me-3"></i>
                      {diff}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Geographic Focus */}
      <section className="py-5">
        <Container>
          <div className="text-center" data-aos="fade-up">
            <h3 className="mb-4" style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2rem",
              color: "#6f42c1"
            }}>
              <i className="bi bi-geo-alt me-2"></i>Geographic Focus
            </h3>
            <Row className="justify-content-center">
              <Col md={8}>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Badge bg="purple" className="px-4 py-3 fs-6">
                    <i className="bi bi-flag me-2"></i>Puerto Rico (ATH Móvil)
                  </Badge>
                  <Badge bg="purple" className="px-4 py-3 fs-6">
                    <i className="bi bi-translate me-2"></i>US Hispanic Markets
                  </Badge>
                  <Badge bg="purple" className="px-4 py-3 fs-6">
                    <i className="bi bi-chat-text me-2"></i>Bilingual Communities
                  </Badge>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(19,26,51,0.8), rgba(10,15,44,0.9))"
      }}>
        <Container>
          <div className="text-center" data-aos="fade-up">
            <h2 className="mb-4" style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2.5rem"
            }}>
              Ready to Transform Your Booking Process?
            </h2>
            <p className="lead mb-4 text-muted">
              Experience the future of WhatsApp-first appointment booking
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="info"
                href="https://bookitbyzewo.netlify.app"
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-play-circle me-2"></i>
                Try Live Demo
              </Button>
              <Button
                variant="outline-light"
                href="/engineer#contact"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-chat-dots me-2"></i>
                Discuss Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BookitProject;