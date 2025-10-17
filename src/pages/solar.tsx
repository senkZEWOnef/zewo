import { useState } from "react";
import { Container, Row, Col, Form, Button, Badge, Card, Modal } from "react-bootstrap";
import solarHero from "../assets/solar.jpeg";
import "../styles/Solar.css";

const Solar = () => {
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [formType, setFormType] = useState('consultation'); // 'consultation' or 'callback'

  const handleQuickStart = (type: string) => {
    setFormType(type);
    setShowQuickForm(true);
  };

  const benefits = [
    {
      icon: "bi-lightning-charge-fill",
      title: "Blackout Protection",
      description: "Never worry about Puerto Rico's power outages again. Stay powered when the grid goes down.",
      stat: "99.9% Uptime",
      color: "warning"
    },
    {
      icon: "bi-piggy-bank-fill",
      title: "Massive Savings",
      description: "Cut your electric bill by up to 90%. Start saving from day one with flexible financing.",
      stat: "$1,200+/year",
      color: "success"
    },
    {
      icon: "bi-house-heart-fill",
      title: "Increase Home Value",
      description: "Solar systems add 15-20% to your property value while providing energy independence.",
      stat: "+18% Value",
      color: "info"
    },
    {
      icon: "bi-shield-check-fill",
      title: "25-Year Warranty",
      description: "Premium equipment with comprehensive coverage. Peace of mind for decades to come.",
      stat: "25 Years",
      color: "primary"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      location: "San Juan",
      quote: "Haven't paid an electric bill in 8 months! Best investment we ever made.",
      savings: "$180/month"
    },
    {
      name: "Carlos Vega",
      location: "Bayamón",
      quote: "No more blackouts disrupting our business. Solar gave us reliability.",
      savings: "$350/month"
    },
    {
      name: "Ana Rodriguez",
      location: "Mayagüez",
      quote: "The installation was seamless and savings started immediately.",
      savings: "$220/month"
    }
  ];

  return (
    <div className="solar-page">
      {/* Hero Section */}
      <section className="solar-hero">
        <div className="hero-background" style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(255,140,0,0.3)), url(${solarHero})`
        }}>
          <div className="hero-particles"></div>
        </div>
        
        <Container className="hero-content">
          <Row className="align-items-center min-vh-100">
            <Col lg={8} className="hero-text">
              <div data-aos="fade-up">
                <Badge className="hero-badge mb-4">
                  <i className="bi bi-sun-fill me-2"></i>
                  PUERTO RICO'S SOLAR EXPERTS
                </Badge>
                
                <h1 className="hero-title mb-4">
                  Escape Puerto Rico's<br/>
                  <span className="highlight">Blackouts Forever</span>
                </h1>
                
                <p className="hero-subtitle mb-5">
                  Join 10,000+ families who chose energy independence over expensive, 
                  unreliable grid power. Get solar installed with $0 down and start 
                  saving immediately.
                </p>
                
                <div className="hero-stats mb-5">
                  <div className="stat">
                    <span className="stat-number">$0</span>
                    <span className="stat-label">Down Payment</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">90%</span>
                    <span className="stat-label">Bill Reduction</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">25</span>
                    <span className="stat-label">Year Warranty</span>
                  </div>
                </div>
                
                <div className="hero-buttons">
                  <Button 
                    className="btn-primary-glow me-3 mb-3"
                    size="lg"
                    onClick={() => handleQuickStart('consultation')}
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    Free Energy Assessment
                  </Button>
                  <Button 
                    className="btn-secondary-outline mb-3"
                    size="lg"
                    onClick={() => handleQuickStart('callback')}
                  >
                    <i className="bi bi-telephone me-2"></i>
                    Request Call Back
                  </Button>
                </div>
              </div>
            </Col>
            
            <Col lg={4} className="d-none d-lg-block">
              <div className="hero-form-card" data-aos="fade-left">
                <div className="form-header">
                  <i className="bi bi-lightning-charge-fill form-icon"></i>
                  <h4>Get Your Free Quote</h4>
                  <p>See how much you can save in 60 seconds</p>
                </div>
                
                <Form className="quick-form">
                  <Row>
                    <Col md={6}>
                      <Form.Control 
                        type="text" 
                        placeholder="First Name"
                        className="quick-input mb-3"
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control 
                        type="text" 
                        placeholder="Last Name"
                        className="quick-input mb-3"
                      />
                    </Col>
                  </Row>
                  
                  <Form.Control 
                    type="email" 
                    placeholder="Email Address"
                    className="quick-input mb-3"
                  />
                  
                  <Form.Control 
                    type="tel" 
                    placeholder="Phone Number"
                    className="quick-input mb-3"
                  />
                  
                  <Form.Select className="quick-input mb-4">
                    <option>Monthly Electric Bill</option>
                    <option value="under-100">Under $100</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200-300">$200 - $300</option>
                    <option value="300-plus">$300+</option>
                  </Form.Select>
                  
                  <Button className="btn-form-submit w-100">
                    <i className="bi bi-calculator me-2"></i>
                    Calculate My Savings
                  </Button>
                  
                  <p className="form-disclaimer">
                    <i className="bi bi-shield-check me-1"></i>
                    100% Free • No Obligations • Secure
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <Badge className="section-badge mb-3">
              <i className="bi bi-star-fill me-2"></i>
              WHY CHOOSE SOLAR?
            </Badge>
            <h2 className="section-title mb-4" style={{ textAlign: "center !important", display: "block", width: "100%" }}>
              Transform Your Energy Future
            </h2>
            <p className="section-subtitle">
              Puerto Rico families are making the switch to clean, reliable solar energy
            </p>
          </div>
          
          <Row className="g-4">
            {benefits.map((benefit, idx) => (
              <Col md={6} lg={3} key={idx}>
                <Card 
                  className="benefit-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <Card.Body className="text-center">
                    <div className={`benefit-icon bg-${benefit.color}`}>
                      <i className={benefit.icon}></i>
                    </div>
                    <Card.Title className="benefit-title">{benefit.title}</Card.Title>
                    <Card.Text className="benefit-description">
                      {benefit.description}
                    </Card.Text>
                    <div className="benefit-stat">
                      <span className="stat-highlight">{benefit.stat}</span>
                    </div>
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      onClick={() => handleQuickStart('consultation')}
                      className="benefit-cta"
                    >
                      Learn More <i className="bi bi-arrow-right ms-1"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* Urgency Section */}
      <section className="urgency-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} data-aos="fade-right">
              <div className="urgency-content">
                <Badge className="urgency-badge mb-3">
                  <i className="bi bi-clock-fill me-2"></i>
                  LIMITED TIME
                </Badge>
                <h2 className="urgency-title">
                  Federal Tax Credits End Soon
                </h2>
                <p className="urgency-description">
                  The 30% federal tax credit for solar installations is being reduced. 
                  Act now to maximize your savings before these incentives decrease.
                </p>
                
                <div className="urgency-stats">
                  <div className="urgency-stat">
                    <span className="urgency-number">30%</span>
                    <span className="urgency-label">Tax Credit</span>
                  </div>
                  <div className="urgency-stat">
                    <span className="urgency-number">$15,000+</span>
                    <span className="urgency-label">Avg. Savings</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={4} data-aos="fade-left">
              <div className="urgency-form-card">
                <div className="urgency-form-header">
                  <i className="bi bi-lightning-charge-fill"></i>
                  <h4>Lock In Your Savings</h4>
                  <p>Get priority scheduling</p>
                </div>
                
                <div className="urgency-buttons">
                  <Button 
                    className="btn-urgent w-100 mb-3"
                    onClick={() => handleQuickStart('consultation')}
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    Schedule Free Assessment
                  </Button>
                  <Button 
                    className="btn-callback w-100"
                    onClick={() => handleQuickStart('callback')}
                  >
                    <i className="bi bi-telephone-fill me-2"></i>
                    Request Immediate Callback
                  </Button>
                </div>
                
                <p className="urgency-disclaimer">
                  <i className="bi bi-shield-check me-1"></i>
                  No pressure • Expert advice • Free consultation
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Form Section */}
      <section className="main-form-section" id="solar-form">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <Badge className="section-badge mb-3">
              <i className="bi bi-form-check me-2"></i>
              GET STARTED TODAY
            </Badge>
            <h2 className="section-title mb-4" style={{ textAlign: "center !important", display: "block", width: "100%" }}>
              Your Solar Journey Starts Here
            </h2>
            <p className="section-subtitle">
              Complete our quick assessment to receive a personalized solar proposal
            </p>
          </div>
          
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <Card className="main-form-card" data-aos="fade-up">
                <Card.Body className="p-5">
                  <Form>
                    {/* Contact Section */}
                    <div className="form-section mb-4">
                      <h5 className="form-section-title" style={{ color: "#333" }}>
                        <i className="bi bi-person-circle me-2"></i>
                        Contact Information
                      </h5>
                      
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: "#333" }}>First Name *</Form.Label>
                            <Form.Control 
                              type="text" 
                              className="main-form-input"
                              placeholder="Enter your first name"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: "#333" }}>Last Name *</Form.Label>
                            <Form.Control 
                              type="text" 
                              className="main-form-input"
                              placeholder="Enter your last name"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: "#333" }}>Email Address *</Form.Label>
                            <Form.Control 
                              type="email" 
                              className="main-form-input"
                              placeholder="your@email.com"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: "#333" }}>Phone Number *</Form.Label>
                            <Form.Control 
                              type="tel" 
                              className="main-form-input"
                              placeholder="(787) 555-0123"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>

                    {/* Property Section */}
                    <div className="form-section mb-4">
                      <h5 className="form-section-title" style={{ color: "#333" }}>
                        <i className="bi bi-house-fill me-2"></i>
                        Property Information
                      </h5>
                      
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: "#333" }}>Property Address</Form.Label>
                        <Form.Control 
                          type="text" 
                          className="main-form-input"
                          placeholder="123 Main Street, San Juan, PR 00901"
                        />
                      </Form.Group>
                      
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: "#333" }}>Home Type</Form.Label>
                            <Form.Select className="main-form-input">
                              <option>Select home type</option>
                              <option value="single-family">Single Family Home</option>
                              <option value="townhouse">Townhouse</option>
                              <option value="condo">Condo/Apartment</option>
                              <option value="other">Other</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: "#333" }}>Monthly Electric Bill</Form.Label>
                            <Form.Select className="main-form-input">
                              <option>Select bill range</option>
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

                    {/* Preferences Section */}
                    <div className="form-section mb-4">
                      <h5 className="form-section-title" style={{ color: "#333" }}>
                        <i className="bi bi-gear-fill me-2"></i>
                        Consultation Preferences
                      </h5>
                      
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: "#333" }}>How would you like to connect?</Form.Label>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
                          <div style={{ 
                            background: "rgba(255, 255, 255, 0.05)", 
                            border: "1px solid rgba(255, 140, 0, 0.2)", 
                            borderRadius: "12px", 
                            padding: "1rem",
                            cursor: "pointer"
                          }}>
                            <input type="radio" name="consultationType" id="consultation-virtual" style={{ marginRight: "0.5rem" }} />
                            <label htmlFor="consultation-virtual" style={{ color: "#333", fontWeight: "500", cursor: "pointer" }}>
                              Virtual Meeting (Video Call)
                            </label>
                          </div>
                          <div style={{ 
                            background: "rgba(255, 255, 255, 0.05)", 
                            border: "1px solid rgba(255, 140, 0, 0.2)", 
                            borderRadius: "12px", 
                            padding: "1rem",
                            cursor: "pointer"
                          }}>
                            <input type="radio" name="consultationType" id="consultation-in-person" style={{ marginRight: "0.5rem" }} />
                            <label htmlFor="consultation-in-person" style={{ color: "#333", fontWeight: "500", cursor: "pointer" }}>
                              In-Person Home Assessment
                            </label>
                          </div>
                          <div style={{ 
                            background: "rgba(255, 255, 255, 0.05)", 
                            border: "1px solid rgba(255, 140, 0, 0.2)", 
                            borderRadius: "12px", 
                            padding: "1rem",
                            cursor: "pointer"
                          }}>
                            <input type="radio" name="consultationType" id="consultation-phone" style={{ marginRight: "0.5rem" }} />
                            <label htmlFor="consultation-phone" style={{ color: "#333", fontWeight: "500", cursor: "pointer" }}>
                              Phone Consultation
                            </label>
                          </div>
                          <div style={{ 
                            background: "rgba(255, 140, 0, 0.1)", 
                            border: "1px solid rgba(255, 140, 0, 0.4)", 
                            borderRadius: "12px", 
                            padding: "1rem",
                            cursor: "pointer"
                          }}>
                            <input type="radio" name="consultationType" id="consultation-callback" style={{ marginRight: "0.5rem" }} />
                            <label htmlFor="consultation-callback" style={{ color: "#333", fontWeight: "500", cursor: "pointer" }}>
                              Request Call Back (Priority)
                            </label>
                          </div>
                        </div>
                      </Form.Group>
                      
                      <Form.Group className="mb-4">
                        <Form.Label style={{ color: "#333" }}>Best Time to Contact</Form.Label>
                        <Form.Select className="main-form-input">
                          <option>Select preferred time</option>
                          <option value="morning">Morning (8AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 5PM)</option>
                          <option value="evening">Evening (5PM - 8PM)</option>
                          <option value="anytime">Anytime</option>
                        </Form.Select>
                      </Form.Group>
                      
                      <Form.Group className="mb-4">
                        <Form.Label style={{ color: "#333" }}>Additional Information</Form.Label>
                        <Form.Control 
                          as="textarea"
                          rows={3}
                          className="main-form-input"
                          placeholder="Tell us about your energy goals, any specific concerns, or questions you have..."
                        />
                      </Form.Group>
                    </div>

                    <div className="text-center">
                      <Button 
                        className="btn-form-submit btn-lg px-5"
                        type="submit"
                      >
                        <i className="bi bi-send-check me-2"></i>
                        Get My Free Solar Assessment
                      </Button>
                      
                      <p className="form-disclaimer mt-3">
                        <i className="bi bi-shield-check me-1"></i>
                        Your information is completely secure and will never be shared. 
                        This consultation is 100% free with no obligation.
                      </p>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Action Modal */}
      <Modal show={showQuickForm} onHide={() => setShowQuickForm(false)} centered>
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>
            <i className={`bi ${formType === 'callback' ? 'bi-telephone-fill' : 'bi-calendar-check'} me-2`}></i>
            {formType === 'callback' ? 'Request Priority Callback' : 'Schedule Free Assessment'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control type="text" className="modal-form-input" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control type="text" className="modal-form-input" />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control type="tel" className="modal-form-input" placeholder="(787) 555-0123" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" className="modal-form-input" placeholder="your@email.com" />
            </Form.Group>
            
            {formType === 'callback' && (
              <Form.Group className="mb-3">
                <Form.Label>Best Time to Call</Form.Label>
                <Form.Select className="modal-form-input">
                  <option>Select preferred time</option>
                  <option value="asap">As soon as possible</option>
                  <option value="morning">This morning</option>
                  <option value="afternoon">This afternoon</option>
                  <option value="tomorrow">Tomorrow</option>
                </Form.Select>
              </Form.Group>
            )}
            
            <Form.Group className="mb-4">
              <Form.Label>Brief Message (Optional)</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={2} 
                className="modal-form-input"
                placeholder={formType === 'callback' ? "Urgent questions or specific callback time..." : "What sparked your interest in solar?"}
              />
            </Form.Group>
            
            <div className="d-grid">
              <Button className="btn-modal-submit" size="lg">
                <i className={`bi ${formType === 'callback' ? 'bi-telephone-fill' : 'bi-send-check'} me-2`}></i>
                {formType === 'callback' ? 'Request Priority Call' : 'Schedule My Assessment'}
              </Button>
            </div>
            
            <p className="text-center mt-3 text-muted small">
              <i className="bi bi-clock me-1"></i>
              {formType === 'callback' ? 'We typically call back within 15 minutes during business hours' : 'We will contact you within 2 hours to schedule'}
            </p>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Footer */}
      <footer
        className="text-white py-5"
        style={{ backgroundColor: "#131a33" }}
      >
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h4 style={{ fontFamily: "Cormorant Garamond" }}>byZewo</h4>
              <p style={{ color: "#ccc" }}>Code. Build. Create.</p>
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
                  <a href="/blog" className="text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Contact</h5>
              <p><i className="bi bi-envelope me-2"></i>ralph.ulysse509@gmail.com</p>
              <p><i className="bi bi-phone me-2"></i>(785) 317-6894</p>
              <p><i className="bi bi-geo-alt me-2"></i>San Juan, Puerto Rico</p>
              <div className="d-flex gap-3 fs-4">
                <a
                  href="https://instagram.com/zewoworld"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://github.com/zewo"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://facebook.com/zewoworld"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://youtube.com/@zewoworld"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </Col>
          </Row>
          <p className="text-center mt-4 small text-muted">
            &copy; {new Date().getFullYear()} byZewo by Ralph Ulysse
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Solar;