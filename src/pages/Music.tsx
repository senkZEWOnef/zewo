import { Container, Row, Col, Button, Badge, Alert, Spinner } from "react-bootstrap";
import "../styles/About.css";
import { useSpotifyPlaylists } from "../hooks/useSpotifyPlaylists";
import PlaylistCard from "../components/PlaylistCard";

const Music = () => {
  const SPOTIFY_USER_ID = "22ksclexjv7ru2buznlzrmkdq";
  const { playlists, loading, error } = useSpotifyPlaylists(SPOTIFY_USER_ID);

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(30,215,96,0.3), rgba(19,26,51,0.6))",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center"
      }}>
        <Container>
          <div className="text-center" data-aos="fade-up">
            <div className="mb-4">
              <i className="bi bi-spotify" style={{ fontSize: "4rem", color: "#1ed760" }}></i>
            </div>
            
            <Badge bg="success" className="px-4 py-2 mb-3">
              <i className="bi bi-headphones me-2"></i>MUSIC DISCOVERY
            </Badge>
            
            <h1 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
              marginBottom: "2rem"
            }}>
              <span style={{ color: "#1ed760" }}>My Music</span>
            </h1>
            
            <p className="lead mb-4" style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              maxWidth: "700px",
              margin: "0 auto 2rem",
              color: "#ccc",
              fontFamily: "Cormorant Garamond",
              fontStyle: "italic"
            }}>
              Discover the soundtracks that fuel my creativity, inspire my work, 
              and accompany my daily adventures. From coding sessions to late-night contemplations.
            </p>
            
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="success"
                href={`https://open.spotify.com/user/${SPOTIFY_USER_ID}`}
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-spotify me-2"></i>
                Follow on Spotify
              </Button>
              <Button
                variant="outline-success"
                href="#playlists"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-music-note-list me-2"></i>
                Explore Playlists
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Spotify Playlists Section */}
      <section id="playlists" className="py-5" style={{ backgroundColor: "rgba(30,215,96,0.05)" }}>
        <Container>
          <div className="text-center mb-5">
            <h2 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2.5rem",
              color: "#1ed760",
              marginBottom: "1rem"
            }}>
              <i className="bi bi-spotify me-3"></i>
              My Playlists
            </h2>
            <p className="text-muted">
              Curated collections of songs that soundtrack my life - from deep focus coding sessions to weekend adventures
            </p>
          </div>

          {error && (
            <Alert variant="warning" className="mb-4">
              <i className="bi bi-exclamation-triangle me-2"></i>
              {error}
              <div className="mt-2 small">
                Make sure to set up your Spotify credentials in the .env file and replace the user ID in the code.
              </div>
            </Alert>
          )}

          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="success" className="me-3" />
              <span className="text-muted">Loading playlists...</span>
            </div>
          ) : playlists.length > 0 ? (
            <Row>
              {playlists.slice(0, 6).map((playlist) => (
                <Col lg={4} md={6} key={playlist.id} className="mb-4">
                  <PlaylistCard playlist={playlist} />
                </Col>
              ))}
            </Row>
          ) : !error && (
            <div className="text-center py-5">
              <i className="bi bi-music-note-list" style={{ fontSize: "3rem", color: "#666" }}></i>
              <p className="text-muted mt-3">No playlists found</p>
            </div>
          )}

          {playlists.length > 6 && (
            <div className="text-center mt-4">
              <Button
                variant="outline-success"
                href={`https://open.spotify.com/user/${SPOTIFY_USER_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2"
              >
                <i className="bi bi-spotify me-2"></i>
                View All Playlists on Spotify
              </Button>
            </div>
          )}
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
                <li>
                  <a href="/music" className="text-white">
                    Music
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
                  href="https://open.spotify.com/artist/your-artist-id"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-spotify"></i>
                </a>
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

export default Music;