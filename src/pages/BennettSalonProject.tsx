import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/About.css";

const BennettSalonProject = () => {
  const features = [
    "Modern Design: Clean, professional interface built with React and Bootstrap",
    "Appointment Booking: Interactive calendar for clients to book appointments (pending owner confirmation)",
    "Services Gallery: Showcase of past work and services offered",
    "Client Testimonials: Display of client reviews and experiences",
    "Responsive Design: Works perfectly on desktop, tablet, and mobile devices"
  ];

  const techStack = [
    { category: "Frontend", items: ["React 18 with TypeScript"], color: "#61dafb" },
    { category: "UI Framework", items: ["Bootstrap 5 with React Bootstrap"], color: "#7952b3" },
    { category: "Routing", items: ["React Router DOM"], color: "#ca4245" },
    { category: "Calendar", items: ["React Calendar component"], color: "#f59e0b" },
    { category: "Build Tool", items: ["Vite"], color: "#646cff" },
    { category: "Backend", items: ["Node.js/Express (in development)"], color: "#68a063" }
  ];

  const projectStructure = [
    { 
      folder: "components/", 
      description: "Reusable components",
      files: ["Navigation.tsx - Main navigation bar", "Footer.tsx - Site footer"]
    },
    { 
      folder: "pages/", 
      description: "Page components",
      files: [
        "Home.tsx - Landing page",
        "Booking.tsx - Appointment booking", 
        "Gallery.tsx - Services gallery",
        "Testimonials.tsx - Client reviews"
      ]
    },
    { 
      folder: "styles/", 
      description: "CSS styles",
      files: ["index.css - Global styles"]
    }
  ];

  const scripts = [
    { command: "npm run dev", description: "Start development server" },
    { command: "npm run build", description: "Build for production" },
    { command: "npm run preview", description: "Preview production build" },
    { command: "npm run lint", description: "Run ESLint" }
  ];

  const deploymentOptions = [
    "Vercel (recommended for frontend)",
    "Netlify", 
    "GitHub Pages"
  ];

  const futureEnhancements = [
    "Backend API for appointment management",
    "Database integration",
    "Email notifications",
    "Admin dashboard for appointment management",
    "Payment integration",
    "SMS notifications"
  ];

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(255,192,203,0.3), rgba(19,26,51,0.6))",
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
              <span style={{ fontSize: "4rem" }}>💅</span>
            </div>
            
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3">
              <i className="bi bi-scissors me-2"></i>BEAUTY SALON WEBAPP
            </Badge>
            
            <h1 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
              marginBottom: "2rem"
            }}>
              <span style={{ color: "#ff69b4" }}>Bennett</span> Salon de Beauté
            </h1>
            
            <p className="lead mb-4" style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              maxWidth: "800px",
              margin: "0 auto 2rem",
              color: "#ccc"
            }}>
              A modern, client-friendly webapp for Bennett Salon de Beauté featuring online appointment 
              booking, service gallery, and client testimonials.
            </p>
            
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="outline-light"
                href="https://bennettsalon.netlify.app"
                target="_blank"
                className="px-5 py-3"
                size="lg"
                style={{ borderColor: "#ff69b4", color: "#ff69b4" }}
              >
                <i className="bi bi-globe me-2"></i>
                Visit Salon
              </Button>
              <Button
                variant="outline-light"
                href="https://github.com/senkZEWOnef/bennettsalon"
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

      {/* Key Features */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#ff69b4"
          }} data-aos="fade-up">
            Key Features
          </h2>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0" style={{
                background: "linear-gradient(135deg, rgba(255,105,180,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,105,180,0.3)"
              }} data-aos="fade-up">
                <Card.Body className="p-5">
                  <ul className="list-unstyled">
                    {features.map((feature, index) => (
                      <li key={index} className="mb-3 text-light d-flex align-items-start">
                        <i className="bi bi-check-circle-fill me-3 mt-1" style={{ color: "#ff69b4" }}></i>
                        <span style={{ fontSize: "1.1rem" }}>{feature}</span>
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
            Technology Stack
          </h2>
          
          <Row className="g-4">
            {techStack.map((tech, index) => (
              <Col md={6} lg={4} key={index}>
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

      {/* Getting Started */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#28a745"
          }} data-aos="fade-up">
            Getting Started
          </h2>
          
          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(40,167,69,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(40,167,69,0.3)"
              }} data-aos="fade-up" data-aos-delay="100">
                <Card.Body className="p-4">
                  <h4 className="text-success mb-4">
                    <i className="bi bi-gear me-2"></i>Prerequisites
                  </h4>
                  <ul className="list-unstyled">
                    <li className="mb-2 text-light">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Node.js (v16 or higher)
                    </li>
                    <li className="mb-2 text-light">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      npm or yarn
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(23,162,184,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(23,162,184,0.3)"
              }} data-aos="fade-up" data-aos-delay="200">
                <Card.Body className="p-4">
                  <h4 className="text-info mb-4">
                    <i className="bi bi-download me-2"></i>Installation
                  </h4>
                  <div className="installation-steps">
                    <div className="mb-3 p-3 rounded" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <code className="text-light">git clone repository</code>
                    </div>
                    <div className="mb-3 p-3 rounded" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <code className="text-light">npm install</code>
                    </div>
                    <div className="mb-3 p-3 rounded" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <code className="text-light">npm run dev</code>
                    </div>
                    <p className="text-light mb-0 mt-3">
                      <i className="bi bi-globe me-2"></i>
                      Open <span className="text-info">http://localhost:5173</span>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Available Scripts */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#6f42c1"
          }} data-aos="fade-up">
            Available Scripts
          </h2>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              {scripts.map((script, index) => (
                <Card key={index} className="mb-3 border-0" style={{
                  background: "linear-gradient(135deg, rgba(111,66,193,0.1), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(111,66,193,0.3)"
                }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card.Body className="p-4 d-flex align-items-center">
                    <div className="me-4">
                      <code className="px-3 py-2 rounded text-light" style={{ backgroundColor: "rgba(111,66,193,0.3)" }}>
                        {script.command}
                      </code>
                    </div>
                    <div>
                      <span className="text-light">{script.description}</span>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Structure */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#fd7e14"
          }} data-aos="fade-up">
            Project Structure
          </h2>
          
          <Row className="g-4">
            {projectStructure.map((folder, index) => (
              <Col lg={4} key={index}>
                <Card className="h-100 border-0" style={{
                  background: "linear-gradient(135deg, rgba(253,126,20,0.1), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(253,126,20,0.3)"
                }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card.Body className="p-4">
                    <h5 className="text-warning mb-3">
                      <i className="bi bi-folder me-2"></i>{folder.folder}
                    </h5>
                    <p className="text-light mb-3">{folder.description}</p>
                    <ul className="list-unstyled">
                      {folder.files.map((file, fileIndex) => (
                        <li key={fileIndex} className="mb-2 text-light">
                          <i className="bi bi-file-earmark-code me-2" style={{ color: "#fd7e14" }}></i>
                          <small>{file}</small>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Deployment & Future Enhancements */}
      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col lg={6}>
              <div data-aos="fade-right">
                <h3 className="mb-4" style={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: "2rem",
                  color: "#17a2b8"
                }}>
                  <i className="bi bi-cloud-upload me-2"></i>Deployment Options
                </h3>
                <ul className="list-unstyled">
                  {deploymentOptions.map((option, index) => (
                    <li key={index} className="mb-3 text-light">
                      <i className="bi bi-arrow-right-circle-fill text-info me-3"></i>
                      {option}
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
                  color: "#e83e8c"
                }}>
                  <i className="bi bi-rocket me-2"></i>Future Enhancements
                </h3>
                <ul className="list-unstyled">
                  {futureEnhancements.map((enhancement, index) => (
                    <li key={index} className="mb-3 text-light">
                      <i className="bi bi-check-circle-fill me-3" style={{ color: "#e83e8c" }}></i>
                      {enhancement}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Adding Photos Section */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <div className="text-center" data-aos="fade-up">
            <h3 className="mb-4" style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2rem",
              color: "#ff69b4"
            }}>
              <i className="bi bi-images me-2"></i>Adding Your Photos
            </h3>
            <Row className="justify-content-center">
              <Col md={8}>
                <Card className="border-0" style={{
                  background: "linear-gradient(135deg, rgba(255,105,180,0.1), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,105,180,0.3)"
                }}>
                  <Card.Body className="p-4 text-start">
                    <p className="text-light mb-3">
                      The gallery is ready for your salon photos! To add them:
                    </p>
                    <ol className="text-light">
                      <li className="mb-2">Create a <code>public/images</code> folder</li>
                      <li className="mb-2">Add your photos to this folder</li>
                      <li className="mb-2">Update the Gallery component to reference your actual images</li>
                    </ol>
                    <p className="text-light mb-0 mt-3">
                      <i className="bi bi-info-circle me-2"></i>
                      <em>Let me know if you need help with this step!</em>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(255,105,180,0.3), rgba(10,15,44,0.9))"
      }}>
        <Container>
          <div className="text-center" data-aos="fade-up">
            <h2 className="mb-4" style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2.5rem"
            }}>
              Need a Beautiful Salon Website?
            </h2>
            <p className="lead mb-4 text-light">
              Experience modern beauty salon web design with appointment booking and client management
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="outline-light"
                href="https://bennettsalon.netlify.app"
                target="_blank"
                className="px-5 py-3"
                size="lg"
                style={{ borderColor: "#ff69b4", color: "#ff69b4" }}
              >
                <i className="bi bi-scissors me-2"></i>
                Visit Salon
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

export default BennettSalonProject;