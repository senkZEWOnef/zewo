import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Form, Modal, Badge } from "react-bootstrap";
import { useUser } from "../context/UserContext";
import "../styles/About.css";

interface Poem {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
  shares: number;
}

const Poems = () => {
  const userContext = useUser();
  const user = userContext?.user;
  const isAdmin = user?.email === "admin@zewoworld.com"; // Adjust admin email as needed
  
  const [poems, setPoems] = useState<Poem[]>([]);
  const [filteredPoems, setFilteredPoems] = useState<Poem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPoem, setNewPoem] = useState({ title: "", content: "" });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [poemToDelete, setPoemToDelete] = useState<string | null>(null);

  // Mock initial poems (replace with actual data fetching)
  useEffect(() => {
    const mockPoems: Poem[] = [
      {
        id: "1",
        title: "Morning Coffee",
        content: `Steam rises like prayers
from the cup between my palms—
morning's first communion.

The world awakens slow,
but here in this quiet moment,
I am already whole.`,
        createdAt: new Date().toISOString(),
        likes: 24,
        shares: 8
      },
      {
        id: "2", 
        title: "City Rain",
        content: `The city wears rain
like a well-loved coat—
familiar, comfortable,
transforming.

Each drop a story,
each puddle a mirror
reflecting what we
choose to see.`,
        createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        likes: 31,
        shares: 12
      },
      {
        id: "3",
        title: "Heritage",
        content: `I carry my grandmother's hands,
my father's stubborn hope,
my mother's quiet strength.

In this new country,
I am both the seed
and the harvest.`,
        createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        likes: 45,
        shares: 18
      },
      {
        id: "4",
        title: "Builder's Prayer",
        content: `Let my hands know wood
like old friends know silence—
intimate, reverent.

Let each cut be clean,
each joint true,
each piece a small act
of faith.`,
        createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
        likes: 19,
        shares: 7
      }
    ];
    setPoems(mockPoems);
    setFilteredPoems(mockPoems);
  }, []);

  // Filter poems based on search term
  useEffect(() => {
    const filtered = poems.filter(poem =>
      poem.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPoems(filtered);
  }, [poems, searchTerm]);

  const handleCreatePoem = () => {
    if (newPoem.title.trim() && newPoem.content.trim()) {
      const poem: Poem = {
        id: Date.now().toString(),
        title: newPoem.title.trim(),
        content: newPoem.content.trim(),
        createdAt: new Date().toISOString(),
        likes: 0,
        shares: 0
      };
      
      setPoems([poem, ...poems]);
      setNewPoem({ title: "", content: "" });
      setShowCreateModal(false);
    }
  };

  const shareToInstagram = (poem: Poem) => {
    // Generate Instagram story format for poems
    const storyText = `"${poem.title}"

${poem.content}

— Ralph Ulysse

🌐 Read more poetry at zewoworld.com/poems`;
    
    // Copy to clipboard for manual sharing
    navigator.clipboard.writeText(storyText).then(() => {
      alert("Poem copied to clipboard! You can now paste it into your Instagram story.");
    });
    
    console.log("Sharing poem to Instagram:", storyText);
  };

  const handleDeletePoem = (poemId: string) => {
    setPoemToDelete(poemId);
    setShowDeleteModal(true);
  };

  const confirmDeletePoem = () => {
    if (poemToDelete) {
      const updatedPoems = poems.filter(poem => poem.id !== poemToDelete);
      setPoems(updatedPoems);
      setFilteredPoems(updatedPoems.filter(poem =>
        poem.title.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    }
    setShowDeleteModal(false);
    setPoemToDelete(null);
  };

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
    <div style={{ backgroundColor: "#0a0f2c", color: "white", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(34,197,94,0.3), rgba(19,26,51,0.6))",
        minHeight: "40vh",
        display: "flex",
        alignItems: "center"
      }}>
        <Container>
          <div className="text-center" data-aos="fade-up">
            <div className="mb-4">
              <span style={{ fontSize: "3rem" }}>🌿</span>
            </div>
            
            <Badge bg="success" className="px-4 py-2 mb-3">
              <i className="bi bi-journal-text me-2"></i>POETRY COLLECTION
            </Badge>
            
            <h1 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
              marginBottom: "2rem"
            }}>
              <span style={{ color: "#22c55e" }}>Poems</span>
            </h1>
            
            <p className="lead mb-4" style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              maxWidth: "600px",
              margin: "0 auto 2rem",
              color: "#ccc",
              fontFamily: "Cormorant Garamond",
              fontStyle: "italic"
            }}>
              Verses about love, identity, heritage, and the sacred moments that shape us. 
              Poetry born from the intersection of memory and hope.
            </p>
            
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              {isAdmin && (
                <Button
                  variant="success"
                  onClick={() => setShowCreateModal(true)}
                  className="px-5 py-3"
                  size="lg"
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  Write a Poem
                </Button>
              )}
              <Button
                variant="outline-primary"
                href="/blog"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-pencil-square me-2"></i>
                View Blog Posts
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Search and Filter */}
      <section className="py-3" style={{ backgroundColor: "rgba(34,197,94,0.1)" }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              <div className="d-flex gap-3 align-items-center">
                <div className="flex-grow-1">
                  <Form.Control
                    type="text"
                    placeholder="Search poems by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(34,197,94,0.5)",
                      color: "white"
                    }}
                    className="search-input"
                  />
                </div>
                <div className="text-muted">
                  {filteredPoems.length} poem{filteredPoems.length !== 1 ? 's' : ''}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Poems Collection */}
      <section className="py-5">
        <Container>
          <Row>
            {filteredPoems.length === 0 ? (
                <Col xs={12}>
                  <div className="text-center py-5">
                    <i className="bi bi-journal-text" style={{ fontSize: "4rem", color: "#22c55e", opacity: 0.5 }}></i>
                    <h3 className="mt-3 text-muted">
                      {searchTerm ? `No poems found for "${searchTerm}"` : "No poems yet"}
                    </h3>
                    <p className="text-muted">
                      {searchTerm ? "Try a different search term" : "Check back soon for new verses!"}
                    </p>
                  </div>
                </Col>
              ) : (
                filteredPoems.map((poem) => (
                  <Col lg={6} md={6} className="mb-4" key={poem.id}>
                    <Card
                      className="h-100 border-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(14,19,55,0.8))",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(34,197,94,0.2)"
                      }}
                      data-aos="fade-up"
                    >
                    <Card.Body className="p-5">
                      {/* Poem Header */}
                      <div className="d-flex align-items-start justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <div
                            className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                            style={{
                              width: "50px",
                              height: "50px",
                              background: "linear-gradient(135deg, #22c55e, #16a34a)",
                              fontSize: "1.2rem"
                            }}
                          >
                            R
                          </div>
                          <div>
                            <h6 className="mb-0 text-light">Ralph Ulysse</h6>
                            <small className="text-muted">@zewo · {formatDate(poem.createdAt)}</small>
                          </div>
                        </div>
                        {isAdmin && (
                          <div className="d-flex gap-2">
                            <Button
                              variant="outline-success"
                              size="sm"
                              onClick={() => shareToInstagram(poem)}
                              className="d-flex align-items-center"
                            >
                              <i className="bi bi-instagram me-2"></i>
                              Share
                            </Button>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => handleDeletePoem(poem.id)}
                              className="d-flex align-items-center"
                            >
                              <i className="bi bi-trash"></i>
                            </Button>
                          </div>
                        )}
                      </div>

                      {/* Poem Content */}
                      <div className="text-center mb-4">
                        <h2 className="mb-4" style={{ 
                          color: "#22c55e", 
                          fontFamily: "Cormorant Garamond",
                          fontSize: "2rem",
                          fontWeight: "300"
                        }}>
                          "{poem.title}"
                        </h2>
                        <div 
                          className="poem-content mx-auto"
                          style={{ 
                            fontSize: "1.2rem", 
                            lineHeight: "2",
                            fontFamily: "Cormorant Garamond",
                            fontStyle: "italic",
                            color: "#e5e5e5",
                            maxWidth: "500px",
                            whiteSpace: "pre-line"
                          }}
                        >
                          {poem.content}
                        </div>
                        <div className="mt-4">
                          <small className="text-muted">— Ralph Ulysse</small>
                        </div>
                      </div>

                      {/* Poem Actions */}
                      <div className="d-flex align-items-center justify-content-between pt-3" style={{
                        borderTop: "1px solid rgba(34,197,94,0.2)"
                      }}>
                        <div className="d-flex align-items-center gap-4">
                          <Button
                            variant="link"
                            className="p-0 text-muted d-flex align-items-center"
                            style={{ textDecoration: "none" }}
                          >
                            <i className="bi bi-heart me-2"></i>
                            <span>{poem.likes}</span>
                          </Button>
                          <Button
                            variant="link"
                            className="p-0 text-muted d-flex align-items-center"
                            style={{ textDecoration: "none" }}
                          >
                            <i className="bi bi-share me-2"></i>
                            <span>{poem.shares}</span>
                          </Button>
                        </div>
                        <Button
                          variant="link"
                          className="p-0 text-muted"
                          style={{ textDecoration: "none" }}
                        >
                          <i className="bi bi-bookmark"></i>
                        </Button>
                      </div>
                    </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
          </Row>
        </Container>
      </section>

      {/* Create Poem Modal */}
      <Modal 
        show={showCreateModal} 
        onHide={() => setShowCreateModal(false)}
        size="lg"
        centered
      >
        <Modal.Header 
          closeButton 
          style={{ 
            backgroundColor: "#131a33", 
            borderBottom: "1px solid rgba(34,197,94,0.2)",
            color: "white"
          }}
        >
          <Modal.Title>
            <i className="bi bi-journal-text me-2"></i>
            Write a New Poem
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1a1f3a", color: "white" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Give your poem a title..."
                value={newPoem.title}
                onChange={(e) => setNewPoem({ ...newPoem, title: e.target.value })}
                style={{
                  backgroundColor: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  color: "white"
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                placeholder="Let your verses flow..."
                value={newPoem.content}
                onChange={(e) => setNewPoem({ ...newPoem, content: e.target.value })}
                style={{
                  backgroundColor: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  color: "white",
                  resize: "vertical",
                  fontFamily: "Cormorant Garamond",
                  fontStyle: "italic",
                  fontSize: "1.1rem"
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ 
          backgroundColor: "#131a33", 
          borderTop: "1px solid rgba(34,197,94,0.2)" 
        }}>
          <Button 
            variant="outline-secondary" 
            onClick={() => setShowCreateModal(false)}
          >
            Cancel
          </Button>
          <Button 
            variant="success" 
            onClick={handleCreatePoem}
            disabled={!newPoem.title.trim() || !newPoem.content.trim()}
          >
            <i className="bi bi-feather me-2"></i>
            Publish Poem
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal 
        show={showDeleteModal} 
        onHide={() => setShowDeleteModal(false)}
        centered
      >
        <Modal.Header 
          closeButton 
          style={{ 
            backgroundColor: "#131a33", 
            borderBottom: "1px solid rgba(34,197,94,0.2)",
            color: "white"
          }}
        >
          <Modal.Title>
            <i className="bi bi-exclamation-triangle me-2"></i>
            Confirm Delete
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1a1f3a", color: "white" }}>
          Are you sure you want to delete this poem? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer style={{ 
          backgroundColor: "#131a33", 
          borderTop: "1px solid rgba(34,197,94,0.2)" 
        }}>
          <Button 
            variant="outline-secondary" 
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </Button>
          <Button 
            variant="danger" 
            onClick={confirmDeletePoem}
          >
            <i className="bi bi-trash me-2"></i>
            Delete Poem
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Poems;