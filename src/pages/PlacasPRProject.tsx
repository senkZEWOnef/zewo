import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/About.css";

const PlacasPRProject = () => {
  const visitorFeatures = [
    "Comprehensive Solar Panel Reviews: Detailed comparisons of top solar panels available in Puerto Rico",
    "Battery Comparisons: Tesla Powerwall vs Generac PWRcell and other energy storage solutions",
    "Free Consultation Booking: Lead capture form for connecting with local certified installers",
    "Educational Content: Articles about solar incentives, costs, and hurricane preparation",
    "Puerto Rico Focused: Content specifically tailored for tropical climate and local regulations"
  ];

  const monetizationFeatures = [
    "Affiliate Integration: Amazon Associates and Home Depot affiliate links with tracking",
    "Lead Generation: Consultation forms that connect users with partner installers",
    "Analytics Tracking: Google Analytics and conversion tracking setup",
    "SEO Optimized: Structured data, meta tags, and content optimized for search engines"
  ];

  const techStack = [
    { category: "Framework", items: ["Next.js 14 with App Router"], color: "#000" },
    { category: "Styling", items: ["Tailwind CSS"], color: "#06b6d4" },
    { category: "Icons", items: ["Heroicons"], color: "#8b5cf6" },
    { category: "Forms", items: ["React Hook Form"], color: "#ec4899" },
    { category: "Analytics", items: ["Google Analytics 4 integration"], color: "#ea4335" },
    { category: "Deployment", items: ["Optimized for Vercel deployment"], color: "#000" }
  ];


  const monetizationStrategy = [
    {
      category: "Affiliate Revenue",
      items: [
        "Amazon Associates: 3-8% commission on solar equipment",
        "Home Depot: 2-8% commission on solar products", 
        "Direct Manufacturer Programs: Renogy, EcoFlow, etc. (5-10%)"
      ],
      color: "#22c55e"
    },
    {
      category: "Lead Generation",
      items: [
        "Consultation Forms: $50-100 per qualified lead",
        "Revenue Share: 5-10% of closed solar installations",
        "Partner Referrals: Monthly retainer + per-lead bonus"
      ],
      color: "#3b82f6"
    }
  ];

  const prMarketFeatures = [
    "Spanish language interface",
    "PR-specific municipalities in forms",
    "Local electricity rates and incentives",
    "Hurricane preparation content",
    "Tropical climate considerations",
    "Panels tested for high humidity and salt air",
    "Battery systems for hurricane backup",
    "Local installer network",
    "Puerto Rico electrical code compliance"
  ];

  const performanceMetrics = [
    { metric: "Monthly Visitors", target: "5,000+", color: "#8b5cf6" },
    { metric: "Affiliate Conversions", target: "1% = 50 sales", color: "#22c55e" },
    { metric: "Average Commission", target: "$20 per sale", color: "#f59e0b" },
    { metric: "Lead Conversions", target: "2% = 100 leads", color: "#ef4444" },
    { metric: "Installation Close Rate", target: "20% = 20 installs", color: "#06b6d4" },
    { metric: "Revenue per Install", target: "$250", color: "#8b5cf6" }
  ];

  const setupSteps = [
    { command: "npm install", description: "Install dependencies" },
    { command: "Configure GA_MEASUREMENT_ID", description: "Replace with your Google Analytics ID" },
    { command: "Set up affiliate programs", description: "Apply for Amazon Associates and Home Depot" },
    { command: "Configure lead processing", description: "Set up email service and CRM integration" },
    { command: "npm run dev", description: "Start development server" }
  ];

  const launchSteps = [
    {
      phase: "Immediate (Week 1-2)",
      tasks: [
        "Set up affiliate accounts (Amazon Associates, Home Depot)",
        "Configure Google Analytics 4 property",
        "Partner with local solar installer",
        "Update tracking IDs in code"
      ]
    },
    {
      phase: "Short-term (Month 1)",
      tasks: [
        "Write 5-10 more articles",
        "Add solar calculator tool",
        "Optimize for local PR keywords",
        "Set up email automation"
      ]
    },
    {
      phase: "Long-term (Month 2-6)",
      tasks: [
        "Weekly article publishing",
        "Video reviews and social media",
        "Multiple installer partnerships",
        "Local media appearances"
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(251,191,36,0.3), rgba(19,26,51,0.6))",
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
              <span style={{ fontSize: "4rem" }}>☀️</span>
            </div>
            
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3">
              <i className="bi bi-sun me-2"></i>SOLAR REVIEW SITE
            </Badge>
            
            <h1 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
              marginBottom: "2rem"
            }}>
              <span style={{ color: "#fbbf24" }}>PlacasPR</span>
            </h1>
            
            <p className="lead mb-4" style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              maxWidth: "800px",
              margin: "0 auto 2rem",
              color: "#ccc"
            }}>
              A complete solar panel review and lead generation website built with Next.js, 
              tailored specifically for the Puerto Rico market with affiliate monetization 
              and local installer partnerships.
            </p>
            
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="warning"
                href="https://placaspr.netlify.app"
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-globe me-2"></i>
                Visit PlacasPR
              </Button>
              <Button
                variant="outline-light"
                href="https://github.com/senkZEWOnef/PlacasPR"
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

      {/* Features Overview */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#fbbf24"
          }} data-aos="fade-up">
            Key Features
          </h2>
          
          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(251,191,36,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(251,191,36,0.3)"
              }} data-aos="fade-up" data-aos-delay="100">
                <Card.Body className="p-4">
                  <h4 style={{ color: "#fbbf24" }} className="mb-3">
                    <i className="bi bi-people me-2"></i>For Visitors
                  </h4>
                  <ul className="list-unstyled">
                    {visitorFeatures.map((feature, index) => (
                      <li key={index} className="mb-2 text-light">
                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#fbbf24" }}></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(34,197,94,0.3)"
              }} data-aos="fade-up" data-aos-delay="200">
                <Card.Body className="p-4">
                  <h4 className="text-success mb-3">
                    <i className="bi bi-cash-coin me-2"></i>For Monetization
                  </h4>
                  <ul className="list-unstyled">
                    {monetizationFeatures.map((feature, index) => (
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

      {/* Tech Stack */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#06b6d4"
          }} data-aos="fade-up">
            Technology Stack
          </h2>
          
          <Row className="g-4">
            {techStack.map((tech, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 text-center" style={{
                  background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(6,182,212,0.2)"
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

      {/* Monetization Strategy */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#22c55e"
          }} data-aos="fade-up">
            Monetization Strategy
          </h2>
          
          <Row className="g-4">
            {monetizationStrategy.map((strategy, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 border-0" style={{
                  background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${strategy.color}33`
                }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card.Body className="p-4">
                    <h4 style={{ color: strategy.color }} className="mb-3">
                      <i className="bi bi-graph-up me-2"></i>{strategy.category}
                    </h4>
                    <ul className="list-unstyled">
                      {strategy.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-2 text-light">
                          <i className="bi bi-arrow-right-circle-fill me-2" style={{ color: strategy.color }}></i>
                          {item}
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

      {/* Expected Performance */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#ef4444"
          }} data-aos="fade-up">
            Expected Performance (Month 6+)
          </h2>
          
          <Row className="g-4">
            {performanceMetrics.map((metric, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="h-100 border-0 text-center" style={{
                  background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${metric.color}33`
                }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <i className="bi bi-graph-up-arrow" style={{ fontSize: "3rem", color: metric.color }}></i>
                    </div>
                    <h6 style={{ color: metric.color }}>{metric.metric}</h6>
                    <h4 className="text-light mb-0">{metric.target}</h4>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-5" data-aos="fade-up">
            <Card className="border-0 d-inline-block" style={{
              background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(14,19,55,0.8))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(34,197,94,0.3)"
            }}>
              <Card.Body className="p-4">
                <h3 className="text-success mb-2">
                  <i className="bi bi-currency-dollar me-2"></i>Total Monthly Revenue Potential
                </h3>
                <h1 style={{ color: "#22c55e", fontSize: "3rem" }}>$6,000+</h1>
                <p className="text-light mb-0">Conservative estimate after 6 months</p>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>

      {/* Puerto Rico Market Focus */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#8b5cf6"
          }} data-aos="fade-up">
            Puerto Rico Market Focus
          </h2>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0" style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(139,92,246,0.3)"
              }} data-aos="fade-up">
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <i className="bi bi-geo-alt" style={{ fontSize: "3rem", color: "#8b5cf6" }}></i>
                  </div>
                  <Row className="g-3">
                    {prMarketFeatures.map((feature, index) => (
                      <Col md={6} key={index}>
                        <div className="d-flex align-items-center mb-2">
                          <i className="bi bi-check-circle-fill me-3" style={{ color: "#8b5cf6" }}></i>
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

      {/* Setup & Launch Plan */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#f59e0b"
          }} data-aos="fade-up">
            Setup & Launch Plan
          </h2>
          
          <Row className="g-4">
            {launchSteps.map((launch, index) => (
              <Col lg={4} key={index}>
                <Card className="h-100 border-0" style={{
                  background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(245,158,11,0.3)"
                }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card.Body className="p-4">
                    <h5 className="text-warning mb-3">{launch.phase}</h5>
                    <ul className="list-unstyled">
                      {launch.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="mb-2 text-light">
                          <i className="bi bi-check-square me-2 text-warning"></i>
                          <small>{task}</small>
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

      {/* Getting Started */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#06b6d4"
          }} data-aos="fade-up">
            Getting Started
          </h2>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0" style={{
                background: "linear-gradient(135deg, rgba(6,182,212,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(6,182,212,0.3)"
              }} data-aos="fade-up">
                <Card.Body className="p-5">
                  <h4 className="text-info mb-4 text-center">
                    <i className="bi bi-rocket me-2"></i>Setup Instructions
                  </h4>
                  {setupSteps.map((step, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex align-items-center mb-2">
                        <Badge bg="info" className="me-3" style={{ minWidth: "30px" }}>
                          {index + 1}
                        </Badge>
                        <small className="text-muted">{step.description}</small>
                      </div>
                      <div className="p-3 rounded" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <code className="text-light">{step.command}</code>
                      </div>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(251,191,36,0.3), rgba(10,15,44,0.9))"
      }}>
        <Container>
          <div className="text-center" data-aos="fade-up">
            <h2 className="mb-4" style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2.5rem"
            }}>
              Ready to Launch Your Solar Review Site?
            </h2>
            <p className="lead mb-4 text-light">
              Start generating revenue with affiliate marketing and lead generation in the growing Puerto Rico solar market
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="warning"
                href="https://placaspr.netlify.app"
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-sun me-2"></i>
                Explore PlacasPR
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

export default PlacasPRProject;