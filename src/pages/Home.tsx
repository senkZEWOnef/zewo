import { Container, Row, Col, Button, Carousel, Badge } from "react-bootstrap";
import { useContent } from "../context/ContentContext";
import "../styles/Home.css";

// Real images
import homeImage from "../assets/home.jpg";
import builderImg from "../assets/builder.jpeg";
import engineerImg from "../assets/engineer.jpeg";
import poetImg from "../assets/poet.jpeg";
import solarImg from "../assets/solar.jpg";

const Home = () => {
  const { posts, poems } = useContent();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return "1 day ago";
    return date.toLocaleDateString();
  };

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white" }}>
      {/* Hero Slideshow */}
      <section className="position-relative overflow-hidden">
        <div className="hero-particles"></div>
        <Carousel interval={5000} controls={true} indicators={true} className="hero-carousel" pause="hover" wrap={true}>
          <Carousel.Item
            style={{
              height: "75vh",
              cursor: "default",
              backgroundImage: `linear-gradient(45deg, rgba(10,15,44,0.3), rgba(19,26,51,0.6)), url(${homeImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              position: "relative",
            }}
          >
            <div className="d-flex flex-column align-items-center justify-content-center h-100 hero-overlay position-relative">
              <div className="text-center animate-fade-up">
                <h1
                  className="hero-title mb-4"
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    fontWeight: "400",
                    textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
                    letterSpacing: "2px",
                  }}
                >
                  Welcome to zeWOWorld
                </h1>
                <div className="tagline-container mb-5">
                  <p className="lead tagline" style={{ 
                    fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
                    fontWeight: "300",
                    letterSpacing: "1px",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
                  }}>
                    <span className="text-warning fw-bold">Build.</span>{" "}
                    <span className="text-info fw-bold">Code.</span>{" "}
                    <span className="text-success fw-bold">Write.</span>
                  </p>
                </div>
              </div>
              <div className="hero-stats d-flex gap-4 mt-5">
                <div className="text-center">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="stat-number">4</div>
                  <div className="stat-label">Books Published</div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          
          <Carousel.Item
            style={{
              height: "75vh",
              cursor: "pointer",
              backgroundImage: `linear-gradient(45deg, rgba(10,15,44,0.3), rgba(19,26,51,0.6)), url(${engineerImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              position: "relative",
            }}
            onClick={() => window.location.href = "/engineer"}
          >
            <div className="d-flex flex-column align-items-center justify-content-center h-100 hero-overlay position-relative">
              <div className="text-center animate-fade-up">
                <h1
                  className="hero-title mb-4"
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    fontWeight: "400",
                    textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
                    letterSpacing: "2px",
                  }}
                >
                  Engineering Your Ideas
                </h1>
                <div className="tagline-container mb-5">
                  <p className="lead tagline" style={{ 
                    fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
                    fontWeight: "300",
                    letterSpacing: "1px",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
                  }}>
                    <span className="text-warning fw-bold">Build.</span>{" "}
                    <span className="text-info fw-bold">Code.</span>{" "}
                    <span className="text-success fw-bold">Write.</span>
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center animate-fade-up-delay">
                <Button
                  variant="outline-warning"
                  size="lg"
                  className="hero-btn px-4 py-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "/engineer";
                  }}
                >
                  <i className="bi bi-arrow-right me-2"></i>
                  Explore This Path
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-btn-secondary px-4 py-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "/about";
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item
            style={{
              height: "75vh",
              cursor: "pointer",
              backgroundImage: `linear-gradient(45deg, rgba(10,15,44,0.3), rgba(19,26,51,0.6)), url(${solarImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              position: "relative",
            }}
            onClick={() => window.location.href = "/solar"}
          >
            <div className="d-flex flex-column align-items-center justify-content-center h-100 hero-overlay position-relative">
              <div className="text-center animate-fade-up">
                <h1
                  className="hero-title mb-4"
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    fontWeight: "400",
                    textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
                    letterSpacing: "2px",
                  }}
                >
                  Powering You with Solar
                </h1>
                <div className="tagline-container mb-5">
                  <p className="lead tagline" style={{ 
                    fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
                    fontWeight: "300",
                    letterSpacing: "1px",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
                  }}>
                    <span className="text-warning fw-bold">Build.</span>{" "}
                    <span className="text-info fw-bold">Code.</span>{" "}
                    <span className="text-success fw-bold">Write.</span>
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center animate-fade-up-delay">
                <Button
                  variant="outline-warning"
                  size="lg"
                  className="hero-btn px-4 py-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "/solar";
                  }}
                >
                  <i className="bi bi-arrow-right me-2"></i>
                  Explore This Path
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-btn-secondary px-4 py-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "/about";
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item
            style={{
              height: "75vh",
              cursor: "pointer",
              backgroundImage: `linear-gradient(45deg, rgba(10,15,44,0.3), rgba(19,26,51,0.6)), url(${builderImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              position: "relative",
            }}
            onClick={() => window.location.href = "/builder"}
          >
            <div className="d-flex flex-column align-items-center justify-content-center h-100 hero-overlay position-relative">
              <div className="text-center animate-fade-up">
                <h1
                  className="hero-title mb-4"
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    fontWeight: "400",
                    textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
                    letterSpacing: "2px",
                  }}
                >
                  Building with Heart
                </h1>
                <div className="tagline-container mb-5">
                  <p className="lead tagline" style={{ 
                    fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
                    fontWeight: "300",
                    letterSpacing: "1px",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
                  }}>
                    <span className="text-warning fw-bold">Build.</span>{" "}
                    <span className="text-info fw-bold">Code.</span>{" "}
                    <span className="text-success fw-bold">Write.</span>
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center animate-fade-up-delay">
                <Button
                  variant="outline-warning"
                  size="lg"
                  className="hero-btn px-4 py-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "/builder";
                  }}
                >
                  <i className="bi bi-arrow-right me-2"></i>
                  Explore This Path
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-btn-secondary px-4 py-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "/about";
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item
            style={{
              height: "75vh",
              cursor: "pointer",
              backgroundImage: `linear-gradient(45deg, rgba(10,15,44,0.3), rgba(19,26,51,0.6)), url(${poetImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              position: "relative",
            }}
            onClick={() => window.location.href = "/blog"}
          >
            <div className="d-flex flex-column align-items-center justify-content-center h-100 hero-overlay position-relative">
              <div className="text-center animate-fade-up">
                <h1
                  className="hero-title mb-4"
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    fontWeight: "400",
                    textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
                    letterSpacing: "2px",
                  }}
                >
                  Writing from the Soul
                </h1>
                <div className="tagline-container mb-5">
                  <p className="lead tagline" style={{ 
                    fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
                    fontWeight: "300",
                    letterSpacing: "1px",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
                  }}>
                    <span className="text-warning fw-bold">Build.</span>{" "}
                    <span className="text-info fw-bold">Code.</span>{" "}
                    <span className="text-success fw-bold">Write.</span>
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center animate-fade-up-delay">
                <Button
                  variant="outline-warning"
                  size="lg"
                  className="hero-btn px-4 py-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "/blog";
                  }}
                >
                  <i className="bi bi-arrow-right me-2"></i>
                  Explore This Path
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-btn-secondary px-4 py-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "/about";
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Four Paths, One Vision */}
      <section className="py-5" style={{ position: "relative", overflow: "hidden" }}>
        <div className="section-bg"></div>
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3" style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>
              EXPERTISE
            </Badge>
            <h2
              className="section-title"
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: "300",
                marginBottom: "1.5rem",
                background: "linear-gradient(135deg, #ffd700, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Four Paths, One Vision
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Combining technical expertise, creative craftsmanship, sustainable energy solutions, and artistic expression
            </p>
          </div>
          <Row>
            {[
              {
                title: "Engineer",
                desc: "I develop web tools, systems, and automations with modern tech.",
                img: engineerImg,
                link: "/engineer",
              },
              {
                title: "Solar Energy Consultant",
                desc: "Consulting services for sustainable, efficient solar energy solutions tailored to your home or business.",
                img: solarImg,
                link: "/solar",
              },
              {
                title: "Builder",
                desc: "Custom kitchens, vanities, and furniture — built from scratch in my workshop.",
                img: builderImg,
                link: "/builder",
              },
              {
                title: "Blog & Poetry",
                desc: "Thoughts on engineering, life insights, and verses about love, identity, and memory.",
                img: poetImg,
                link: "/blog",
              },
            ].map((section, idx) => (
              <Col md={6} lg={3} className="text-center mb-4" key={idx}>
                <div
                  className="expertise-card p-4 h-100 rounded position-relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  style={{ 
                    background: "linear-gradient(135deg, #131a33 0%, #1a2142 100%)",
                    border: "1px solid rgba(255, 215, 0, 0.1)",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  <div className="expertise-img-container mb-4 position-relative">
                    <img
                      src={section.img}
                      alt={section.title}
                      className="img-fluid rounded expertise-img"
                      style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                    <div className="expertise-overlay position-absolute top-0 start-0 w-100 h-100 rounded d-flex align-items-center justify-content-center">
                      <i className={`bi ${idx === 0 ? 'bi-code-slash' : idx === 1 ? 'bi-sun' : idx === 2 ? 'bi-hammer' : 'bi-pen'} fs-1 text-warning opacity-0`}></i>
                    </div>
                  </div>
                  <h5 className="expertise-title mb-3" style={{ 
                    fontFamily: "Cormorant Garamond", 
                    fontSize: "1.4rem",
                    fontWeight: "600",
                    color: "#ffd700"
                  }}>
                    {section.title}
                  </h5>
                  <p className="expertise-desc mb-4" style={{ 
                    fontSize: "0.95rem", 
                    color: "#bbb",
                    lineHeight: "1.6"
                  }}>
                    {section.desc}
                  </p>
                  <Button 
                    variant="outline-warning" 
                    href={section.link}
                    className="expertise-btn w-100 py-2"
                    style={{
                      borderWidth: "2px",
                      fontWeight: "500",
                      letterSpacing: "0.5px"
                    }}
                  >
                    <i className="bi bi-arrow-right me-2"></i>
                    Explore
                  </Button>
                  <div className="card-glow"></div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Blog & Thoughts */}
      <section className="py-5 words-section" style={{ 
        background: "linear-gradient(135deg, rgba(19,26,51,0.8) 0%, rgba(10,15,44,0.9) 100%)",
        position: "relative"
      }}>
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <Badge bg="primary" className="px-4 py-2 mb-3" style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>
              LATEST THOUGHTS
            </Badge>
            <h2
              className="section-title"
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: "300",
                marginBottom: "1.5rem",
                background: "linear-gradient(135deg, #8b5cf6, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              From the Blog
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Quick insights, deeper thoughts, creative expressions, and music discoveries from my journey through tech and life
            </p>
          </div>
          {/* Recent Blog Posts */}
          <div className="mb-5">
            <h3 className="text-center mb-4" style={{ 
              color: "#8b5cf6", 
              fontFamily: "Cormorant Garamond",
              fontSize: "1.8rem"
            }}>
              Latest Blog Posts
            </h3>
            <Row>
              {posts.slice(0, 2).map((post, idx) => (
                <Col md={6} className="mb-4" key={idx}>
                  <div
                    onClick={() => (window.location.href = "/blog")}
                    className="word-card p-4 rounded h-100 position-relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={idx * 150}
                    style={{
                      background: "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(99,102,241,0.1) 100%)",
                      border: "1px solid rgba(139,92,246,0.2)",
                      backdropFilter: "blur(10px)",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div className="word-card-content">
                      {/* Twitter-style header */}
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={engineerImg}
                          alt="Ralph Ulysse"
                          className="rounded-circle me-3"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover"
                          }}
                        />
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center">
                            <span className="text-light fw-semibold me-2">Ralph Ulysse</span>
                            <span className="text-muted small">@zewo · {formatDate(post.created_at)}</span>
                          </div>
                          <Badge bg="primary" className="category-badge small">
                            <i className="bi bi-lightbulb me-1"></i>
                            Blog Post
                          </Badge>
                        </div>
                      </div>

                      <h5 className="fw-bold mb-2" style={{ 
                        color: "#8b5cf6", 
                        fontFamily: "Cormorant Garamond",
                        fontSize: "1.3rem"
                      }}>
                        {post.title}
                      </h5>
                      <p className="mb-3" style={{ 
                        fontSize: "1rem", 
                        color: "#ccc", 
                        lineHeight: "1.6"
                      }}>
                        {post.content}
                      </p>
                      
                      {/* Twitter-style actions */}
                      <div className="d-flex align-items-center justify-content-between pt-2" style={{
                        borderTop: "1px solid rgba(139,92,246,0.2)"
                      }}>
                        <div className="d-flex align-items-center gap-3">
                          <span className="text-muted small d-flex align-items-center">
                            <i className="bi bi-heart me-1"></i>
                            {post.likes}
                          </span>
                          <span className="text-muted small d-flex align-items-center">
                            <i className="bi bi-share me-1"></i>
                            {post.shares}
                          </span>
                        </div>
                        <div className="d-flex align-items-center text-warning small">
                          <span>Read more</span>
                          <i className="bi bi-arrow-right ms-2"></i>
                        </div>
                      </div>
                    </div>
                    <div className="word-glow"></div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          {/* Recent Poems */}
          <div>
            <h3 className="text-center mb-4" style={{ 
              color: "#22c55e", 
              fontFamily: "Cormorant Garamond",
              fontSize: "1.8rem"
            }}>
              Latest Poems
            </h3>
            <Row>
              {poems.slice(0, 2).map((poem, idx) => (
                <Col md={6} className="mb-4" key={idx}>
                  <div
                    onClick={() => (window.location.href = "/poems")}
                    className="word-card p-4 rounded h-100 position-relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={(idx + 2) * 150}
                    style={{
                      background: "linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(16,185,129,0.1) 100%)",
                      border: "1px solid rgba(34,197,94,0.2)",
                      backdropFilter: "blur(10px)",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div className="word-card-content">
                      {/* Twitter-style header */}
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={engineerImg}
                          alt="Ralph Ulysse"
                          className="rounded-circle me-3"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover"
                          }}
                        />
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center">
                            <span className="text-light fw-semibold me-2">Ralph Ulysse</span>
                            <span className="text-muted small">@zewo · {formatDate(poem.created_at)}</span>
                          </div>
                          <Badge bg="success" className="category-badge small">
                            <i className="bi bi-journal-text me-1"></i>
                            Poetry
                          </Badge>
                        </div>
                      </div>

                      <h5 className="fw-bold mb-2" style={{ 
                        color: "#22c55e", 
                        fontFamily: "Cormorant Garamond",
                        fontSize: "1.3rem"
                      }}>
                        "{poem.title}"
                      </h5>
                      <p className="mb-3" style={{ 
                        fontSize: "1rem", 
                        color: "#ccc", 
                        lineHeight: "1.6",
                        fontFamily: "Cormorant Garamond",
                        fontStyle: "italic"
                      }}>
                        {poem.content.split('\n').slice(0, 3).join(' / ')}...
                      </p>
                      
                      {/* Twitter-style actions */}
                      <div className="d-flex align-items-center justify-content-between pt-2" style={{
                        borderTop: "1px solid rgba(34,197,94,0.2)"
                      }}>
                        <div className="d-flex align-items-center gap-3">
                          <span className="text-muted small d-flex align-items-center">
                            <i className="bi bi-heart me-1"></i>
                            {poem.likes}
                          </span>
                          <span className="text-muted small d-flex align-items-center">
                            <i className="bi bi-share me-1"></i>
                            {poem.shares}
                          </span>
                        </div>
                        <div className="d-flex align-items-center text-warning small">
                          <span>Read poem</span>
                          <i className="bi bi-arrow-right ms-2"></i>
                        </div>
                      </div>
                    </div>
                    <div className="word-glow"></div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          {/* Music Discovery */}
          <div className="mb-5">
            <h3 className="text-center mb-4" style={{ 
              color: "#1ed760", 
              fontFamily: "Cormorant Garamond",
              fontSize: "1.8rem"
            }}>
              Music Discovery
            </h3>
            <Row className="justify-content-center">
              <Col md={8}>
                <div
                  onClick={() => (window.location.href = "/music")}
                  className="word-card p-4 rounded h-100 position-relative overflow-hidden"
                  data-aos="fade-up"
                  style={{
                    background: "linear-gradient(135deg, rgba(30,215,96,0.1) 0%, rgba(22,163,74,0.1) 100%)",
                    border: "1px solid rgba(30,215,96,0.2)",
                    backdropFilter: "blur(10px)",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div className="word-card-content">
                    {/* Music header */}
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: "40px",
                          height: "40px",
                          background: "linear-gradient(135deg, #1ed760, #16a34a)",
                          fontSize: "1rem",
                          color: "white",
                          fontWeight: "bold"
                        }}
                      >
                        <i className="bi bi-spotify"></i>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center">
                          <span className="text-light fw-semibold me-2">Ralph Ulysse</span>
                          <span className="text-muted small">@zewo · Spotify Playlists</span>
                        </div>
                        <Badge bg="success" className="category-badge small">
                          <i className="bi bi-music-note-list me-1"></i>
                          Music Discovery
                        </Badge>
                      </div>
                    </div>

                    <h5 className="fw-bold mb-2" style={{ 
                      color: "#1ed760", 
                      fontFamily: "Cormorant Garamond",
                      fontSize: "1.3rem"
                    }}>
                      Soundtracks to My Journey
                    </h5>
                    <p className="mb-3" style={{ 
                      fontSize: "1rem", 
                      color: "#ccc", 
                      lineHeight: "1.6"
                    }}>
                      From deep focus coding sessions to late-night contemplations, discover the curated playlists that 
                      fuel my creativity and accompany my daily adventures in tech and life.
                    </p>
                    
                    {/* Music actions */}
                    <div className="d-flex align-items-center justify-content-between pt-2" style={{
                      borderTop: "1px solid rgba(30,215,96,0.2)"
                    }}>
                      <div className="d-flex align-items-center gap-3">
                        <span className="text-muted small d-flex align-items-center">
                          <i className="bi bi-music-note-list me-1"></i>
                          Personal playlists
                        </span>
                        <span className="text-muted small d-flex align-items-center">
                          <i className="bi bi-headphones me-1"></i>
                          All genres
                        </span>
                      </div>
                      <div className="d-flex align-items-center text-warning small">
                        <span>Explore music</span>
                        <i className="bi bi-arrow-right ms-2"></i>
                      </div>
                    </div>
                  </div>
                  <div className="word-glow"></div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="text-center mt-4" data-aos="fade-up">
            <Button 
              variant="outline-primary" 
              size="lg"
              href="/blog"
              className="px-4 py-3 me-3"
              style={{ borderRadius: "25px" }}
            >
              <i className="bi bi-pencil-square me-2"></i>
              View All Blog Posts
            </Button>
            <Button 
              variant="outline-success" 
              size="lg"
              href="/poems"
              className="px-4 py-3 me-3"
              style={{ borderRadius: "25px" }}
            >
              <i className="bi bi-journal-text me-2"></i>
              View All Poems
            </Button>
            <Button 
              variant="outline-info" 
              size="lg"
              href="/music"
              className="px-4 py-3"
              style={{ borderRadius: "25px" }}
            >
              <i className="bi bi-spotify me-2"></i>
              Discover My Music
            </Button>
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
            &copy; {new Date().getFullYear()} Zewo by Ralph Ulysse
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
