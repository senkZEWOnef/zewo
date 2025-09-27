import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import profileImg from "../assets/rome.jpg";
import "../styles/About.css";

const About = () => {
  // Real web applications built by Ralph Ulysse
  const webApps = [
    {
      title: "Cut by Zewo",
      description: "Professional cabinet making and woodworking business platform with project showcases, client management, and service booking system.",
      tech: ["React", "Node.js", "PostgreSQL", "Bootstrap"],
      liveUrl: "https://cutbyzewo.netlify.app",
      githubUrl: "https://github.com/senkZEWOnef/CutbyZewo",
      icon: "🔨"
    },
    {
      title: "Stoic Wisdom by Zewo",
      description: "Self-growth and mindfulness app featuring daily stoic quotes, journaling capabilities, goal tracking, and motivational tools for personal development.",
      tech: ["React", "Firebase", "CSS3", "Local Storage"],
      liveUrl: "https://stoicwisdombyzewo.netlify.app",
      githubUrl: "https://github.com/senkZEWOnef/StoicWisdombyZewo",
      icon: "🧘"
    },
    {
      title: "Scan & Order by Zewo",
      description: "QR code-based food ordering system for food trucks enabling quick, contactless ordering experiences with real-time order management.",
      tech: ["React", "QR Code API", "Payment Integration", "PWA"],
      liveUrl: "https://scanandorderbyzewo.netlify.app",
      githubUrl: "https://github.com/senkZEWOnef/ScanAndOrderByZewo",
      icon: "📱"
    },
    {
      title: "Spaces",
      description: "Wedding photo sharing platform allowing participants to upload, share, and view photos from wedding events in real-time with secure private galleries.",
      tech: ["React", "Firebase Storage", "Authentication", "Real-time DB"],
      liveUrl: "https://spaces-wedding.netlify.app",
      githubUrl: "https://github.com/senkZEWOnef/Spaces",
      icon: "📸"
    },
    {
      title: "zeWOWorld Platform",
      description: "This comprehensive platform showcasing engineering, solar, building, and poetry services with modern React architecture and premium UX design.",
      tech: ["React", "TypeScript", "Bootstrap", "Supabase", "Vite"],
      liveUrl: "https://byzewo.com",
      githubUrl: "https://github.com/senkZEWOnef/zewo",
      icon: "🌟"
    },
    {
      title: "Bennett Salon de Beauté",
      description: "Professional beauty salon webapp offering manicure services, nail art, and beauty treatments with appointment booking and service management system.",
      tech: ["React", "Bootstrap", "CSS3", "Responsive Design"],
      liveUrl: "https://bennettsalon.netlify.app",
      githubUrl: "https://github.com/senkZEWOnef/bennettsalon",
      icon: "💅"
    },
    {
      title: "Acevedo Eléctricos",
      description: "Sitio web moderno y profesional para Acevedo Eléctricos con sistema de reservas, procesamiento de pagos, tienda de productos y galería de proyectos. Completamente en español para el mercado puertorriqueño.",
      tech: ["React", "Payment Integration", "Bootstrap", "Spanish Localization"],
      liveUrl: "https://acevedoelectricosbyzewo.netlify.app",
      githubUrl: "https://github.com/senkZEWOnef/AcevedoElectricsbyZewo",
      icon: "⚡"
    },
    {
      title: "BookIt by Zewo",
      description: "A Calendly built for WhatsApp. Service providers get a shareable booking link that confirms appointments, collects deposits, and sends updates via WhatsApp first (with SMS fallback). Bilingual (EN/ES), Puerto Rico-friendly (Stripe + ATH Móvil).",
      tech: ["React", "WhatsApp API", "Stripe", "ATH Móvil", "SMS Integration"],
      liveUrl: "https://bookitbyzewo.netlify.app",
      githubUrl: "https://github.com/senkZEWOnef/bookitbyzewo",
      icon: "📅"
    },
    {
      title: "iRepair",
      description: "Una aplicación web completa para un negocio de reparación de electrónicos que incluye sistema de citas, venta de productos y gestión de clientes para Puerto Rico.",
      tech: ["Next.js 15", "Tailwind CSS", "Prisma", "NextAuth.js", "Stripe", "ATH Móvil"],
      liveUrl: "https://irepairbyzewo.netlify.app",
      githubUrl: "https://github.com/senkZEWOnef/iRepair",
      icon: "🔧"
    },
    {
      title: "PlacasPR",
      description: "A complete solar panel review and lead generation website built with Next.js, tailored specifically for the Puerto Rico market with affiliate monetization and local installer partnerships.",
      tech: ["Next.js 14", "Tailwind CSS", "Google Analytics", "React Hook Form", "Affiliate Integration"],
      liveUrl: "https://placaspr.netlify.app",
      githubUrl: "https://github.com/senkZEWOnef/PlacasPR",
      icon: "☀️"
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
                    href="https://github.com/senkZEWOnef" 
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
                    href="mailto:hello@byzewo.com"
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
                  <i className="bi bi-tools"></i>
                </div>
                <div className="project-content">
                  <h4>Cut by Zewo</h4>
                  <p>Professional cabinet making and woodworking business platform with project showcases and client management</p>
                  <div className="project-tech">
                    <span className="tech-tag">
                      <a href="https://github.com/senkZEWOnef/CutbyZewo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-icon">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <div className="project-content">
                  <h4>Stoic Wisdom by Zewo</h4>
                  <p>Self-growth app with journaling, stoic quotes, goal tracking, and motivational tools for personal development</p>
                  <div className="project-tech">
                    <span className="tech-tag">
                      <a href="https://github.com/senkZEWOnef/StoicWisdombyZewo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-icon">
                  <i className="bi bi-qr-code-scan"></i>
                </div>
                <div className="project-content">
                  <h4>Scan & Order by Zewo</h4>
                  <p>QR code-based food ordering system for food trucks, enabling quick and contactless ordering experiences</p>
                  <div className="project-tech">
                    <span className="tech-tag">
                      <a href="https://github.com/senkZEWOnef/ScanAndOrderByZewo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-icon">
                  <i className="bi bi-camera-fill"></i>
                </div>
                <div className="project-content">
                  <h4>Spaces</h4>
                  <p>Wedding photo sharing platform allowing participants to share and view photos from wedding events in real-time</p>
                  <div className="project-tech">
                    <span className="tech-tag">
                      <a href="https://github.com/senkZEWOnef/Spaces" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-icon">
                  <i className="bi bi-globe"></i>
                </div>
                <div className="project-content">
                  <h4>zeWOWorld Platform</h4>
                  <p>This comprehensive platform showcasing engineering, solar, building, and poetry services with modern React architecture</p>
                  <div className="project-tech">
                    <span className="tech-tag">
                      <a href="https://github.com/senkZEWOnef/zewo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-icon">
                  <i className="bi bi-building"></i>
                </div>
                <div className="project-content">
                  <h4>Client Websites</h4>
                  <p>Custom websites for medical services, retail stores, and various businesses with modern responsive designs</p>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Custom Design</span>
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
                      <span className="language-level">Native</span>
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
                  <div className="cert-list">
                    <div className="cert-item">
                      <a 
                        href="https://www.coursera.org/google-certificates/data-analytics-certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        <i className="bi bi-google"></i>
                        Google Data Analytics Certificate
                      </a>
                    </div>
                    <div className="cert-item">
                      <a 
                        href="https://codewithmosh.com/p/the-complete-python-programming-course-beginner-to-advanced"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        <i className="bi bi-code-slash"></i>
                        Complete Python Mastery - Code with Mosh
                      </a>
                    </div>
                    <div className="cert-item">
                      <a 
                        href="https://codewithmosh.com/p/the-ultimate-react-course"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        <i className="bi bi-bootstrap"></i>
                        React 18 Course - Code with Mosh
                      </a>
                    </div>
                    <div className="cert-item">
                      <a 
                        href="https://codewithmosh.com/p/complete-sql-mastery"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        <i className="bi bi-database"></i>
                        Complete SQL Mastery - Code with Mosh
                      </a>
                    </div>
                    <div className="cert-item">
                      <a 
                        href="https://codewithmosh.com/p/the-complete-node-js-course"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        <i className="bi bi-server"></i>
                        Complete Node.js Course - Code with Mosh
                      </a>
                    </div>
                    <div className="cert-item">
                      <a 
                        href="https://codewithmosh.com/p/the-ultimate-git-course"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        <i className="bi bi-git"></i>
                        Ultimate Git Course - Code with Mosh
                      </a>
                    </div>
                    <div className="cert-item">
                      <a 
                        href="https://codewithmosh.com/p/ultimate-javascript-series"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        <i className="bi bi-filetype-js"></i>
                        Ultimate JavaScript Series - Code with Mosh
                      </a>
                    </div>
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
                    {app.title === "BookIt by Zewo" ? (
                      <a 
                        href="/projects/bookit"
                        className="portfolio-btn"
                      >
                        <i className="bi bi-info-circle"></i>
                        View Details
                      </a>
                    ) : app.title === "Acevedo Eléctricos" ? (
                      <a 
                        href="/projects/acevedo-electrics"
                        className="portfolio-btn"
                      >
                        <i className="bi bi-info-circle"></i>
                        Ver Detalles
                      </a>
                    ) : app.title === "Bennett Salon de Beauté" ? (
                      <a 
                        href="/projects/bennett-salon"
                        className="portfolio-btn"
                      >
                        <i className="bi bi-info-circle"></i>
                        View Details
                      </a>
                    ) : app.title === "iRepair" ? (
                      <a 
                        href="/projects/irepair"
                        className="portfolio-btn"
                      >
                        <i className="bi bi-info-circle"></i>
                        Ver Detalles
                      </a>
                    ) : app.title === "Cut by Zewo" ? (
                      <a 
                        href="/projects/cut-by-zewo"
                        className="portfolio-btn"
                      >
                        <i className="bi bi-info-circle"></i>
                        View Details
                      </a>
                    ) : app.title === "PlacasPR" ? (
                      <a 
                        href="/projects/placaspr"
                        className="portfolio-btn"
                      >
                        <i className="bi bi-info-circle"></i>
                        View Details
                      </a>
                    ) : (
                      <a 
                        href={app.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-btn"
                      >
                        <i className="bi bi-globe"></i>
                        Live Demo
                      </a>
                    )}
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
