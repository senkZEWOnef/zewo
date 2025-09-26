import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/About.css";

const CutByZewoProject = () => {
  const features = [
    "Dynamic input for custom part sizes and quantities",
    "Automatic cut plan optimization to minimize sheet usage",
    "Visual cut sheets generated as PNG images",
    "Clean Bootstrap interface for easy use on desktop or mobile",
    "Designed for real-world cabinet building with standard panel sizes (96\" x 48\")"
  ];

  const techStack = [
    { category: "Backend", items: ["Python 3"], color: "#3776ab" },
    { category: "Framework", items: ["Flask"], color: "#000" },
    { category: "Visualization", items: ["Matplotlib (for visual cut plans)"], color: "#11557c" },
    { category: "Frontend", items: ["Bootstrap 5"], color: "#7952b3" },
    { category: "Database", items: ["SQLite (Coming Soon)"], color: "#003b57" },
    { category: "Export", items: ["PDF export (Coming Soon)"], color: "#dc3545" }
  ];

  const comingSoonFeatures = [
    "SQLite database for saving jobs and client info",
    "PDF export and instant quoting",
    "Advanced material optimization algorithms",
    "Multi-project management",
    "Client portal and job tracking",
    "Mobile app for on-site measurements"
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Input Parts",
      description: "Enter custom part dimensions and quantities for your cabinet project",
      icon: "bi-rulers"
    },
    {
      step: "2", 
      title: "Optimize Layout",
      description: "Algorithm automatically calculates the most efficient cut pattern",
      icon: "bi-puzzle"
    },
    {
      step: "3",
      title: "Generate Visual",
      description: "Get clear PNG cut sheets showing exactly where to make each cut",
      icon: "bi-image"
    },
    {
      step: "4",
      title: "Build & Save",
      description: "Use the optimized plan to minimize waste and maximize efficiency",
      icon: "bi-tools"
    }
  ];

  const benefits = [
    {
      title: "Reduce Material Waste",
      description: "Smart optimization minimizes leftover material, saving money on every project",
      icon: "bi-recycle",
      color: "#22c55e"
    },
    {
      title: "Save Time",
      description: "No more manual calculations or guesswork - get optimal cuts instantly",
      icon: "bi-clock",
      color: "#3b82f6"
    },
    {
      title: "Professional Results",
      description: "Visual cut sheets ensure accuracy and help avoid costly mistakes",
      icon: "bi-award",
      color: "#f59e0b"
    },
    {
      title: "Real-World Ready",
      description: "Built for standard cabinet industry panel sizes and practices",
      icon: "bi-house-gear",
      color: "#8b5cf6"
    }
  ];

  const setupSteps = [
    { command: "git clone https://github.com/senkZEWOnef/byZewo.git", description: "Clone the repository" },
    { command: "cd byZewo", description: "Navigate to project directory" },
    { command: "pip install -r requirements.txt", description: "Install Python dependencies" },
    { command: "python app.py", description: "Start the Flask development server" }
  ];

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(139,69,19,0.3), rgba(19,26,51,0.6))",
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
              <span style={{ fontSize: "4rem" }}>🔨</span>
            </div>
            
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3">
              <i className="bi bi-tools me-2"></i>CABINET CUT PLANNER
            </Badge>
            
            <h1 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
              marginBottom: "2rem"
            }}>
              <span style={{ color: "#d2691e" }}>Cut by Zewo</span>
            </h1>
            
            <p className="lead mb-4" style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              maxWidth: "800px",
              margin: "0 auto 2rem",
              color: "#ccc"
            }}>
              A Python + Flask web app that helps cabinet builders plan and optimize sheet cuts for custom 
              kitchens and furniture. This tool generates efficient cut layouts, saves time, and reduces waste.
            </p>
            
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="warning"
                href="https://cutbyzewo.netlify.app"
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-globe me-2"></i>
                Try the App
              </Button>
              <Button
                variant="outline-light"
                href="https://github.com/senkZEWOnef/CutbyZewo"
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
            color: "#d2691e"
          }} data-aos="fade-up">
            Key Features
          </h2>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0" style={{
                background: "linear-gradient(135deg, rgba(210,105,30,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(210,105,30,0.3)"
              }} data-aos="fade-up">
                <Card.Body className="p-5">
                  <ul className="list-unstyled">
                    {features.map((feature, index) => (
                      <li key={index} className="mb-3 text-light d-flex align-items-start">
                        <i className="bi bi-check-circle-fill me-3 mt-1" style={{ color: "#d2691e" }}></i>
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

      {/* How It Works */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#ffd700"
          }} data-aos="fade-up">
            How It Works
          </h2>
          
          <Row className="g-4">
            {workflowSteps.map((workflow, index) => (
              <Col lg={3} md={6} key={index}>
                <Card className="h-100 border-0 text-center" style={{
                  background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,215,0,0.2)"
                }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <div 
                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{ 
                          width: "60px", 
                          height: "60px", 
                          backgroundColor: "#d2691e",
                          fontSize: "1.5rem",
                          fontWeight: "bold"
                        }}
                      >
                        {workflow.step}
                      </div>
                    </div>
                    <div className="mb-3">
                      <i className={`bi ${workflow.icon}`} style={{ fontSize: "2.5rem", color: "#ffd700" }}></i>
                    </div>
                    <h5 className="text-warning mb-3">{workflow.title}</h5>
                    <p className="text-light">{workflow.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#22c55e"
          }} data-aos="fade-up">
            Why Choose Cut by Zewo?
          </h2>
          
          <Row className="g-4">
            {benefits.map((benefit, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 border-0" style={{
                  background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${benefit.color}33`
                }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card.Body className="p-4 d-flex align-items-start">
                    <div className="me-4">
                      <i className={`bi ${benefit.icon}`} style={{ fontSize: "3rem", color: benefit.color }}></i>
                    </div>
                    <div>
                      <h5 style={{ color: benefit.color }} className="mb-3">{benefit.title}</h5>
                      <p className="text-light mb-0">{benefit.description}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#3776ab"
          }} data-aos="fade-up">
            Technology Stack
          </h2>
          
          <Row className="g-4">
            {techStack.map((tech, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 text-center" style={{
                  background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(55,118,171,0.2)"
                }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card.Body className="p-4">
                    <h5 className="text-info mb-3">{tech.category}</h5>
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
            color: "#8b5cf6"
          }} data-aos="fade-up">
            Getting Started
          </h2>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0" style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(139,92,246,0.3)"
              }} data-aos="fade-up">
                <Card.Body className="p-5">
                  <h4 style={{ color: "#8b5cf6" }} className="mb-4 text-center">
                    <i className="bi bi-download me-2"></i>Installation Steps
                  </h4>
                  {setupSteps.map((step, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex align-items-center mb-2">
                        <Badge bg="secondary" className="me-3" style={{ minWidth: "30px" }}>
                          {index + 1}
                        </Badge>
                        <small className="text-muted">{step.description}</small>
                      </div>
                      <div className="p-3 rounded" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <code className="text-light">{step.command}</code>
                      </div>
                    </div>
                  ))}
                  <div className="text-center mt-4">
                    <p className="text-light mb-0">
                      <i className="bi bi-globe me-2"></i>
                      Open <span style={{ color: "#8b5cf6" }}>http://localhost:5000</span> to view the application
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Coming Soon Features */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#f59e0b"
          }} data-aos="fade-up">
            Coming Soon
          </h2>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0" style={{
                background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(245,158,11,0.3)"
              }} data-aos="fade-up">
                <Card.Body className="p-5">
                  <Row className="g-3">
                    {comingSoonFeatures.map((feature, index) => (
                      <Col md={6} key={index}>
                        <div className="d-flex align-items-center mb-2">
                          <i className="bi bi-clock-history me-3" style={{ color: "#f59e0b" }}></i>
                          <span className="text-light">{feature}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Target Audience */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#ef4444"
          }} data-aos="fade-up">
            Perfect For
          </h2>
          
          <Row className="g-4">
            <Col lg={4}>
              <Card className="h-100 border-0 text-center" style={{
                background: "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(239,68,68,0.3)"
              }} data-aos="fade-up" data-aos-delay="100">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <i className="bi bi-person-workspace" style={{ fontSize: "3rem", color: "#ef4444" }}></i>
                  </div>
                  <h5 className="text-danger mb-3">Cabinet Makers</h5>
                  <p className="text-light">
                    Professional cabinet builders who need to optimize material usage and reduce waste
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <Card className="h-100 border-0 text-center" style={{
                background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(16,185,129,0.3)"
              }} data-aos="fade-up" data-aos-delay="200">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <i className="bi bi-house-gear" style={{ fontSize: "3rem", color: "#10b981" }}></i>
                  </div>
                  <h5 className="text-success mb-3">Furniture Makers</h5>
                  <p className="text-light">
                    Custom furniture builders who want to plan cuts efficiently for any project
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <Card className="h-100 border-0 text-center" style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(59,130,246,0.3)"
              }} data-aos="fade-up" data-aos-delay="300">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    <i className="bi bi-tools" style={{ fontSize: "3rem", color: "#3b82f6" }}></i>
                  </div>
                  <h5 className="text-primary mb-3">DIY Enthusiasts</h5>
                  <p className="text-light">
                    Home builders and hobbyists who want professional-level cut planning
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(139,69,19,0.3), rgba(10,15,44,0.9))"
      }}>
        <Container>
          <div className="text-center" data-aos="fade-up">
            <h2 className="mb-4" style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2.5rem"
            }}>
              Ready to Optimize Your Cabinet Cuts?
            </h2>
            <p className="lead mb-4 text-light">
              Stop wasting materials and start building smarter with Cut by Zewo
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="warning"
                href="https://cutbyzewo.netlify.app"
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-calculator me-2"></i>
                Start Planning Cuts
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

export default CutByZewoProject;