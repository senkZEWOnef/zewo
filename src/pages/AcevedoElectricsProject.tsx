import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/About.css";

const AcevedoElectricsProject = () => {
  const features = {
    website: [
      "Homepage - Hero section, services overview, testimonials",
      "Services Page - Detailed electrical services with pricing",
      "Booking System - Calendar integration with time slot selection",
      "Payment System - Secure deposit payment processing",
      "Product Store - Electrical supplies with filtering and search",
      "Project Gallery - Showcase of completed work with lightbox",
      "Contact Page - Multiple contact methods and social media"
    ],
    design: [
      "Responsive design optimized for all devices",
      "Modern gradient backgrounds and premium styling",
      "Smooth animations and hover effects",
      "Professional color scheme with custom Tailwind config",
      "Premium typography with Google Fonts (Inter & Poppins)"
    ],
    booking: [
      "Interactive calendar with available time slots",
      "Service selection with categories and pricing",
      "Contact form with validation",
      "Booking confirmation with next steps",
      "Deposit payment integration ready"
    ],
    store: [
      "Product filtering by category and price",
      "Search functionality",
      "Shopping cart implementation",
      "Product specifications and details",
      "Stock status tracking"
    ],
    gallery: [
      "Project categorization (residential, commercial, lighting, etc.)",
      "Lightbox with image navigation",
      "Featured projects section",
      "Project details and descriptions"
    ]
  };

  const techStack = [
    { category: "Framework", items: ["Next.js 14 with App Router"], color: "#000" },
    { category: "Styling", items: ["Tailwind CSS with custom theme"], color: "#06b6d4" },
    { category: "Language", items: ["TypeScript"], color: "#3178c6" },
    { category: "Icons", items: ["Lucide React"], color: "#f59e0b" },
    { category: "Design", items: ["Mobile-first responsive design"], color: "#10b981" }
  ];

  const pages = [
    { path: "/", name: "Homepage", icon: "bi-house" },
    { path: "/services", name: "Services overview", icon: "bi-tools" },
    { path: "/booking", name: "Appointment booking", icon: "bi-calendar-check" },
    { path: "/store", name: "Product catalog", icon: "bi-shop" },
    { path: "/gallery", name: "Project showcase", icon: "bi-images" },
    { path: "/contact", name: "Contact information", icon: "bi-telephone" }
  ];

  const businessFeatures = [
    "Professional electrical services showcase",
    "Emergency service availability",
    "Licensed and insured messaging",
    "Customer testimonials and reviews",
    "Project portfolio with categories",
    "Online booking and payment system",
    "Product sales capability"
  ];

  const securityFeatures = [
    "Form validation on all inputs",
    "Secure payment form (ready for Stripe/Square integration)",
    "Proper error handling",
    "SSL-ready architecture"
  ];

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(236,98,34,0.8), rgba(19,26,51,0.6))",
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
              <span style={{ fontSize: "4rem" }}>⚡</span>
            </div>
            
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3">
              <i className="bi bi-lightning me-2"></i>SERVICIOS ELÉCTRICOS PREMIUM
            </Badge>
            
            <h1 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
              marginBottom: "2rem"
            }}>
              <span style={{ color: "#ec6222" }}>Acevedo</span> Eléctricos
            </h1>
            
            <p className="lead mb-4" style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              maxWidth: "800px",
              margin: "0 auto 2rem",
              color: "#ccc"
            }}>
              Un sitio web moderno y profesional para Acevedo Eléctricos con sistema de reservas, 
              procesamiento de pagos, tienda de productos y galería de proyectos. Completamente 
              en español para el mercado puertorriqueño.
            </p>
            
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="warning"
                href="https://acevedoelectricosbyzewo.netlify.app"
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-globe me-2"></i>
                Ver Sitio Web
              </Button>
              <Button
                variant="outline-light"
                href="https://github.com/senkZEWOnef/AcevedoElectricsbyZewo"
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-github me-2"></i>
                Ver Código
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Overview */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#ec6222"
          }} data-aos="fade-up">
            Características Principales
          </h2>
          
          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(236,98,34,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(236,98,34,0.3)"
              }} data-aos="fade-up" data-aos-delay="100">
                <Card.Body className="p-4">
                  <h4 style={{ color: "#ec6222" }} className="mb-3">
                    <i className="bi bi-laptop me-2"></i>Estructura Completa del Sitio Web
                  </h4>
                  <ul className="list-unstyled">
                    {features.website.map((feature, index) => (
                      <li key={index} className="mb-2 text-light">
                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#ec6222" }}></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(14,165,233,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(14,165,233,0.3)"
              }} data-aos="fade-up" data-aos-delay="200">
                <Card.Body className="p-4">
                  <h4 className="text-info mb-3">
                    <i className="bi bi-palette me-2"></i>Características de Diseño Premium
                  </h4>
                  <ul className="list-unstyled">
                    {features.design.map((feature, index) => (
                      <li key={index} className="mb-2 text-light">
                        <i className="bi bi-check-circle-fill text-info me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row className="g-4 mt-2">
            <Col lg={4}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(34,197,94,0.3)"
              }} data-aos="fade-up" data-aos-delay="300">
                <Card.Body className="p-4">
                  <h4 className="text-success mb-3">
                    <i className="bi bi-calendar-check me-2"></i>Sistema de Reservas
                  </h4>
                  <ul className="list-unstyled">
                    {features.booking.map((feature, index) => (
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
                background: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(168,85,247,0.3)"
              }} data-aos="fade-up" data-aos-delay="400">
                <Card.Body className="p-4">
                  <h4 style={{ color: "#a855f7" }} className="mb-3">
                    <i className="bi bi-shop me-2"></i>Tienda de Productos
                  </h4>
                  <ul className="list-unstyled">
                    {features.store.map((feature, index) => (
                      <li key={index} className="mb-2 text-light">
                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#a855f7" }}></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(245,158,11,0.3)"
              }} data-aos="fade-up" data-aos-delay="500">
                <Card.Body className="p-4">
                  <h4 className="text-warning mb-3">
                    <i className="bi bi-images me-2"></i>Galería de Proyectos
                  </h4>
                  <ul className="list-unstyled">
                    {features.gallery.map((feature, index) => (
                      <li key={index} className="mb-2 text-light">
                        <i className="bi bi-check-circle-fill text-warning me-2"></i>
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

      {/* Tech Stack */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#ffd700"
          }} data-aos="fade-up">
            Stack Tecnológico
          </h2>
          
          <Row className="justify-content-center">
            {techStack.map((tech, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="h-100 border-0 text-center" style={{
                  background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,215,0,0.2)"
                }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card.Body className="p-4">
                    <h5 className="text-warning mb-3">{tech.category}</h5>
                    {tech.items.map((item, itemIndex) => (
                      <Badge 
                        key={itemIndex} 
                        style={{ backgroundColor: tech.color, color: "white" }}
                        className="me-2 mb-2 px-3 py-2"
                      >
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

      {/* Pages Structure */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#0ea5e9"
          }} data-aos="fade-up">
            Estructura de Páginas
          </h2>
          
          <Row className="g-4">
            {pages.map((page, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 text-center" style={{
                  background: "linear-gradient(135deg, rgba(14,165,233,0.1), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(14,165,233,0.3)"
                }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <i className={`bi ${page.icon}`} style={{ fontSize: "2.5rem", color: "#0ea5e9" }}></i>
                    </div>
                    <h5 className="text-info mb-2">{page.path}</h5>
                    <p className="text-light mb-0">{page.name}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Business & Security Features */}
      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col lg={6}>
              <div data-aos="fade-right">
                <h3 className="mb-4" style={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: "2rem",
                  color: "#28a745"
                }}>
                  <i className="bi bi-briefcase me-2"></i>Características del Negocio
                </h3>
                <ul className="list-unstyled">
                  {businessFeatures.map((feature, index) => (
                    <li key={index} className="mb-3 text-light">
                      <i className="bi bi-arrow-right-circle-fill text-success me-3"></i>
                      {feature}
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
                  <i className="bi bi-shield-check me-2"></i>Características de Seguridad
                </h3>
                <ul className="list-unstyled">
                  {securityFeatures.map((feature, index) => (
                    <li key={index} className="mb-3 text-light">
                      <i className="bi bi-check-circle-fill text-danger me-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Color Scheme */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h3 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2rem",
              color: "#ec6222"
            }}>
              <i className="bi bi-palette me-2"></i>Esquema de Colores
            </h3>
          </div>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Badge style={{ backgroundColor: "#ec6222" }} className="px-4 py-3 fs-6">
                  <i className="bi bi-circle-fill me-2"></i>Primary: Orange (#ec6222)
                </Badge>
                <Badge bg="info" className="px-4 py-3 fs-6">
                  <i className="bi bi-circle-fill me-2"></i>Secondary: Blue (#0ea5e9)
                </Badge>
                <Badge bg="warning" text="dark" className="px-4 py-3 fs-6">
                  <i className="bi bi-circle-fill me-2"></i>Accent: Yellow (#eab308)
                </Badge>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Business Information */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h3 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2rem",
              color: "#ffd700"
            }}>
              <i className="bi bi-building me-2"></i>Información del Negocio
            </h3>
          </div>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="text-center border-0" style={{
                background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)"
              }} data-aos="fade-up" data-aos-delay="100">
                <Card.Body className="p-4">
                  <i className="bi bi-telephone-fill text-warning mb-3" style={{ fontSize: "2rem" }}></i>
                  <h6 className="text-warning">Teléfono</h6>
                  <p className="text-light mb-0">(555) 123-4567</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="text-center border-0" style={{
                background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)"
              }} data-aos="fade-up" data-aos-delay="200">
                <Card.Body className="p-4">
                  <i className="bi bi-envelope-fill text-info mb-3" style={{ fontSize: "2rem" }}></i>
                  <h6 className="text-info">Email</h6>
                  <p className="text-light mb-0">info@acevedoelectrics.com</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="text-center border-0" style={{
                background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)"
              }} data-aos="fade-up" data-aos-delay="300">
                <Card.Body className="p-4">
                  <i className="bi bi-geo-alt-fill text-success mb-3" style={{ fontSize: "2rem" }}></i>
                  <h6 className="text-success">Dirección</h6>
                  <p className="text-light mb-0">123 Electric Ave, Puerto Rico</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="text-center border-0" style={{
                background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)"
              }} data-aos="fade-up" data-aos-delay="400">
                <Card.Body className="p-4">
                  <i className="bi bi-clock-fill text-danger mb-3" style={{ fontSize: "2rem" }}></i>
                  <h6 className="text-danger">Emergencias</h6>
                  <p className="text-light mb-0">24/7 Disponible</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(236,98,34,0.8), rgba(10,15,44,0.9))"
      }}>
        <Container>
          <div className="text-center" data-aos="fade-up">
            <h2 className="mb-4" style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2.5rem"
            }}>
              ¿Necesitas un Sitio Web Profesional para tu Negocio?
            </h2>
            <p className="lead mb-4 text-light">
              Experimenta la excelencia en diseño web con funcionalidades completas para servicios profesionales
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="warning"
                href="https://acevedoelectricosbyzewo.netlify.app"
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-lightning me-2"></i>
                Ver Sitio Web
              </Button>
              <Button
                variant="outline-light"
                href="/engineer#contact"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-chat-dots me-2"></i>
                Discutir Tu Proyecto
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AcevedoElectricsProject;