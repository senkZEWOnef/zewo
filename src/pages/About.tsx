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

      {/* Interactive Resume */}
      <section className="resume-section">
        <Container>
          <h2 className="section-title" data-aos="fade-up">
            Professional Journey
          </h2>
          
          <div className="resume-timeline">
            {/* Education */}
            <div className="timeline-item" data-aos="fade-right">
              <div className="timeline-marker education">
                <i className="bi bi-mortarboard-fill"></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Bachelor of Science: Computer Engineering</h3>
                  <span className="timeline-date">2018 - 2022</span>
                </div>
                <h4 className="timeline-subtitle">
                  <a 
                    href="https://www.uprm.edu/inge/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="institution-link"
                  >
                    University of Puerto Rico, Mayagüez (UPRM)
                  </a>
                </h4>
                <div className="timeline-skills">
                  <span className="skill-badge">Data Structures & Algorithms</span>
                  <span className="skill-badge">Embedded Systems</span>
                  <span className="skill-badge">Software Design</span>
                  <span className="skill-badge">C/C++/C#</span>
                </div>
              </div>
            </div>

            {/* Teaching Experience */}
            <div className="timeline-item" data-aos="fade-left">
              <div className="timeline-marker experience">
                <i className="bi bi-person-workspace"></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Instructor</h3>
                  <span className="timeline-date">Sep 2021 - Sep 2022</span>
                </div>
                <h4 className="timeline-subtitle">
                  <a 
                    href="https://www.uprm.edu/decep/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="institution-link"
                  >
                    División de Educación Continua y Estudios Profesionales - UPRM
                  </a>
                </h4>
                <ul className="timeline-description">
                  <li>Developed curriculum and course materials for diverse learning styles</li>
                  <li>Evaluated student performance and provided constructive feedback</li>
                  <li>Created instructional guides to reinforce lecture content</li>
                </ul>
              </div>
            </div>

            {/* Cabinet Design Experience */}
            <div className="timeline-item" data-aos="fade-right">
              <div className="timeline-marker experience">
                <i className="bi bi-tools"></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Cabinet Designer</h3>
                  <span className="timeline-date">Jun 2018 - 2022</span>
                </div>
                <h4 className="timeline-subtitle">Las Americas Design - Mayagüez, PR</h4>
                <ul className="timeline-description">
                  <li>Designed detailed cabinet layouts using AutoCAD</li>
                  <li>Calculated materials and measurements for project completion</li>
                  <li>Collaborated with teams to meet project deadlines</li>
                </ul>
                <div className="timeline-skills">
                  <span className="skill-badge">AutoCAD</span>
                  <span className="skill-badge">Project Management</span>
                  <span className="skill-badge">Technical Drawing</span>
                </div>
              </div>
            </div>

            {/* Entrepreneur Journey */}
            <div className="timeline-item current" data-aos="fade-left">
              <div className="timeline-marker entrepreneur">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Founder & Custom Builder</h3>
                  <span className="timeline-date">2022 - Present</span>
                </div>
                <h4 className="timeline-subtitle">zeWOWorld - San Juan, PR</h4>
                <ul className="timeline-description">
                  <li>Founded custom cabinet making and woodworking company</li>
                  <li>Expanded into web development and software solutions</li>
                  <li>Built comprehensive service platform combining physical and digital craftsmanship</li>
                  <li>Developed multiple web applications while growing woodworking business</li>
                </ul>
                <div className="timeline-skills">
                  <span className="skill-badge">
                    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a>
                  </span>
                  <span className="skill-badge">
                    <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">TypeScript</a>
                  </span>
                  <span className="skill-badge">
                    <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a>
                  </span>
                  <span className="skill-badge">
                    <a href="https://supabase.com" target="_blank" rel="noopener noreferrer">Supabase</a>
                  </span>
                  <span className="skill-badge">Entrepreneurship</span>
                  <span className="skill-badge">Custom Woodworking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="resume-projects" data-aos="fade-up">
            <h3 className="projects-title">Notable Projects & Achievements</h3>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-icon">
                  <i className="bi bi-flask"></i>
                </div>
                <div className="project-content">
                  <h4>Python Flask REST API</h4>
                  <p>Collaborated with classmates to build a booking system web application with PostgreSQL database</p>
                  <div className="project-tech">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Flask</span>
                    <span className="tech-tag">PostgreSQL</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-icon">
                  <i className="bi bi-mortarboard"></i>
                </div>
                <div className="project-content">
                  <h4>Moodle Services Enhancement</h4>
                  <p>Capstone project improving university Moodle services with new plugins deployed the following semester</p>
                  <div className="project-tech">
                    <span className="tech-tag">PHP</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">Moodle API</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-icon">
                  <i className="bi bi-globe"></i>
                </div>
                <div className="project-content">
                  <h4>zeWOWorld Platform</h4>
                  <p>Full-stack platform showcasing multiple services with modern React architecture</p>
                  <div className="project-tech">
                    <span className="tech-tag">
                      <a href="https://github.com/zewo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Certifications */}
          <div className="resume-extras" data-aos="fade-up">
            <Row>
              <Col md={6}>
                <div className="languages-section">
                  <h4>
                    <i className="bi bi-translate me-2"></i>
                    Languages
                  </h4>
                  <div className="language-list">
                    <div className="language-item">
                      <span className="language-name">English</span>
                      <span className="language-level">Fluent</span>
                    </div>
                    <div className="language-item">
                      <span className="language-name">Spanish</span>
                      <span className="language-level">Fluent</span>
                    </div>
                    <div className="language-item">
                      <span className="language-name">French</span>
                      <span className="language-level">Fluent</span>
                    </div>
                    <div className="language-item">
                      <span className="language-name">Italian</span>
                      <span className="language-level">Fluent</span>
                    </div>
                    <div className="language-item">
                      <span className="language-name">Haitian Creole</span>
                      <span className="language-level">Native</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="certifications-section">
                  <h4>
                    <i className="bi bi-award me-2"></i>
                    Certifications
                  </h4>
                  <div className="cert-item">
                    <a 
                      href="https://www.coursera.org/google-certificates/data-analytics-certificate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <i className="bi bi-google"></i>
                      Google Data Analytics Certificate
                      <span className="cert-status">In Progress</span>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
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
