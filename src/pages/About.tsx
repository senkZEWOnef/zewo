import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import profileImg from "../assets/rome.jpg";
import "../styles/About.css";

const About = () => {
  // Sample web apps data - replace with your actual projects
  const webApps = [
    {
      title: "zeWOWorld Platform",
      description: "A comprehensive platform showcasing engineering, solar, building, and poetry services with modern React architecture and premium UX design.",
      tech: ["React", "TypeScript", "Bootstrap", "Supabase", "Vite"],
      liveUrl: "https://zewoworld.com",
      githubUrl: "https://github.com/ralphyzu/zewoworld",
      icon: "🌟"
    },
    {
      title: "Solar Energy Calculator",
      description: "An intelligent solar panel calculator for Puerto Rico residents to estimate savings and energy independence potential.",
      tech: ["React", "Chart.js", "Weather API", "Bootstrap"],
      liveUrl: "https://solar-calc-pr.vercel.app",
      githubUrl: "https://github.com/ralphyzu/solar-calculator",
      icon: "☀️"
    },
    {
      title: "Poetry Archive",
      description: "Digital archive and reading platform for my published poetry collections with search, categorization, and reading analytics.",
      tech: ["Next.js", "MDX", "Tailwind", "Framer Motion"],
      liveUrl: "https://poetry.zewoworld.com",
      githubUrl: "https://github.com/ralphyzu/poetry-archive",
      icon: "📚"
    },
    {
      title: "Custom Builder Portfolio",
      description: "Interactive portfolio showcasing custom woodworking projects with 3D galleries and client testimonials.",
      tech: ["Three.js", "React", "GSAP", "Node.js"],
      liveUrl: "https://builder.zewoworld.com",
      githubUrl: "https://github.com/ralphyzu/builder-portfolio",
      icon: "🔨"
    }
  ];

  const skills = [
    {
      icon: "💻",
      title: "Full-Stack Engineering",
      description: "Building robust web applications with modern technologies, from concept to deployment.",
      tags: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS"]
    },
    {
      icon: "☀️",
      title: "Solar Energy Solutions",
      description: "Designing and implementing renewable energy systems for residential and commercial properties.",
      tags: ["System Design", "Energy Analysis", "Grid Integration", "Puerto Rico Specialist"]
    },
    {
      icon: "🔨",
      title: "Custom Building & Woodwork",
      description: "Crafting bespoke furniture and architectural elements with precision and artistic vision.",
      tags: ["Cabinet Making", "Furniture Design", "Restoration", "Hand Tools", "CNC"]
    },
    {
      icon: "✍️",
      title: "Poetry & Writing",
      description: "Published poet exploring themes of identity, place, and human connection through verse.",
      tags: ["Creative Writing", "Literary Journals", "Book Publishing", "Editorial"]
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <Container>
          <div className="about-hero-content" data-aos="fade-up">
            <div className="profile-section">
              <div className="profile-image-container">
                <div className="profile-glow"></div>
                <img
                  src={profileImg}
                  alt="Ralph Ulysse"
                  className="profile-image"
                />
              </div>
              
              <div className="profile-content">
                <div className="about-badge">
                  <i className="bi bi-star-fill"></i>
                  MULTI-DISCIPLINARY CREATOR
                </div>
                
                <h1 className="about-title">Ralph Ulysse</h1>
                
                <p className="about-subtitle">
                  I'm Ralph Ulysse — a poet, a software engineer, and a builder. I've 
                  spent years shaping wood, shaping words, and shaping tools to bring 
                  visions to life.
                </p>
                <p className="about-subtitle">
                  I was born in Haiti. I've built a workshop, published poetry, and 
                  launched apps — all in pursuit of honest, beautiful work.
                </p>
                
                <div className="social-links">
                  <a 
                    href="https://github.com/ralphyzu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn github-btn"
                  >
                    <i className="bi bi-github"></i>
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/ralphyzu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    <i className="bi bi-linkedin"></i>
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:hello@zewoworld.com"
                    className="social-btn"
                  >
                    <i className="bi bi-envelope"></i>
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills & Expertise */}
      <section className="skills-section">
        <Container>
          <h2 className="section-title" data-aos="fade-up">
            Expertise & Passion
          </h2>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="skill-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-tags">
                  {skill.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Web Apps Portfolio */}
      <section className="portfolio-section">
        <Container>
          <h2 className="section-title" data-aos="fade-up">
            Web Applications
          </h2>
          
          <div className="portfolio-grid">
            {webApps.map((app, index) => (
              <div 
                key={index}
                className="portfolio-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="portfolio-image">
                  <span style={{ fontSize: '3rem' }}>{app.icon}</span>
                </div>
                
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{app.title}</h3>
                  <p className="portfolio-description">{app.description}</p>
                  
                  <div className="portfolio-tech">
                    {app.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="portfolio-links">
                    <a 
                      href={app.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-btn"
                    >
                      <i className="bi bi-globe"></i>
                      Live Demo
                    </a>
                    <a 
                      href={app.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-btn secondary"
                    >
                      <i className="bi bi-github"></i>
                      Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <Container>
          <div className="contact-content" data-aos="fade-up">
            <h2 className="cta-title">Let's Create Something WOW Together</h2>
            <p className="cta-subtitle">
              Whether you need engineering expertise, solar solutions, custom building, 
              or want to discuss poetry and life — I'd love to connect.
            </p>
            <a href="/engineer#contact" className="cta-btn">
              <i className="bi bi-chat-dots"></i>
              Start a Conversation
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default About;
