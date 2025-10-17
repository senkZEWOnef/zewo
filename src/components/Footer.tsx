import { Container, Row, Col } from 'react-bootstrap';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer
      className="text-white py-5"
      style={{ backgroundColor: "#0f1419" }}
    >
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <div className="mb-3">
              <Logo variant="dark" size="lg" />
            </div>
            <p style={{ color: "#ccc", fontSize: "1.1rem" }}>
              Code. Build. Create. <span style={{ color: "#FFD700" }}>WOW!</span>
            </p>
            <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
              Professional services that deliver exceptional results.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled" style={{ color: "#aaa" }}>
              <li>
                <a href="/" className="text-white-50 text-decoration-none">
                  <i className="bi bi-house me-2"></i>Home
                </a>
              </li>
              <li className="mt-2">
                <a href="/engineer" className="text-white-50 text-decoration-none">
                  <i className="bi bi-code-slash me-2"></i>Engineer
                </a>
              </li>
              <li className="mt-2">
                <a href="/solar" className="text-white-50 text-decoration-none">
                  <i className="bi bi-sun me-2"></i>Solar Energy
                </a>
              </li>
              <li className="mt-2">
                <a href="/blog" className="text-white-50 text-decoration-none">
                  <i className="bi bi-journal-text me-2"></i>Blog
                </a>
              </li>
              <li className="mt-2">
                <a href="/about" className="text-white-50 text-decoration-none">
                  <i className="bi bi-person me-2"></i>About
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>
              <i className="bi bi-envelope me-2"></i>
              Email: hello@byzewo.com
            </p>
            <p>
              <i className="bi bi-telephone me-2"></i>
              Phone: (787) 555-1234
            </p>
            <div className="d-flex gap-3 fs-4 mt-3">
              <a
                href="https://instagram.com/zewoworld"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50"
                style={{ transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://github.com/zewoworld"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50"
                style={{ transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://facebook.com/zewoworld"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50"
                style={{ transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://youtube.com/@zewoworld"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50"
                style={{ transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFD700'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr style={{ borderColor: '#333', marginTop: '2rem' }} />
        <p className="text-center mt-4 small text-muted">
          &copy; {new Date().getFullYear()} byZewo by Ralph Ulysse • Built with passion and purpose
        </p>
      </Container>
    </footer>
  );
};

export default Footer;