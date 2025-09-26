import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Form, Modal, Badge } from "react-bootstrap";
import { useUser } from "../context/UserContext";
import "../styles/About.css";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
  shares: number;
}

const Blog = () => {
  const userContext = useUser();
  const user = userContext?.user;
  const isAdmin = user?.email === "admin@zewoworld.com"; // Adjust admin email as needed
  
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [charCount, setCharCount] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const maxChars = 280; // Twitter-like character limit

  // Mock initial posts (replace with actual data fetching)
  useEffect(() => {
    const mockPosts: BlogPost[] = [
      {
        id: "1",
        title: "Building the Future",
        content: "Just finished working on a new React project with some amazing features. The intersection of engineering and creativity never ceases to amaze me. 🚀",
        createdAt: new Date().toISOString(),
        likes: 12,
        shares: 3
      },
      {
        id: "2", 
        title: "Puerto Rico Tech Scene",
        content: "The tech ecosystem in Puerto Rico is growing rapidly. Seeing more developers and entrepreneurs building innovative solutions for local and global markets. Exciting times ahead! 🌴💻",
        createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        likes: 8,
        shares: 5
      }
    ];
    setPosts(mockPosts);
    setFilteredPosts(mockPosts);
  }, []);

  // Filter posts based on search term
  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [posts, searchTerm]);

  const handleCreatePost = () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      const post: BlogPost = {
        id: Date.now().toString(),
        title: newPost.title.trim(),
        content: newPost.content.trim(),
        createdAt: new Date().toISOString(),
        likes: 0,
        shares: 0
      };
      
      setPosts([post, ...posts]);
      setNewPost({ title: "", content: "" });
      setCharCount(0);
      setShowCreateModal(false);
    }
  };

  const handleContentChange = (content: string) => {
    if (content.length <= maxChars) {
      setNewPost({ ...newPost, content });
      setCharCount(content.length);
    }
  };

  const shareToInstagram = (post: BlogPost) => {
    // Generate Instagram story format
    const storyText = `${post.title}\n\n${post.content}\n\n🌐 Read more at zewoworld.com`;
    
    // Copy to clipboard for manual sharing
    navigator.clipboard.writeText(storyText).then(() => {
      alert("Post copied to clipboard! You can now paste it into your Instagram story.");
    });
    
    // Could integrate with Instagram Basic Display API in the future
    console.log("Sharing to Instagram:", storyText);
  };

  const handleDeletePost = (postId: string) => {
    setPostToDelete(postId);
    setShowDeleteModal(true);
  };

  const confirmDeletePost = () => {
    if (postToDelete) {
      const updatedPosts = posts.filter(post => post.id !== postToDelete);
      setPosts(updatedPosts);
      setFilteredPosts(updatedPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    }
    setShowDeleteModal(false);
    setPostToDelete(null);
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
        background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(19,26,51,0.6))",
        minHeight: "40vh",
        display: "flex",
        alignItems: "center"
      }}>
        <Container>
          <div className="text-center" data-aos="fade-up">
            <div className="mb-4">
              <span style={{ fontSize: "3rem" }}>📝</span>
            </div>
            
            <Badge bg="primary" className="px-4 py-2 mb-3">
              <i className="bi bi-pencil me-2"></i>THOUGHTS & INSIGHTS
            </Badge>
            
            <h1 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
              marginBottom: "2rem"
            }}>
              <span style={{ color: "#8b5cf6" }}>Blog</span>
            </h1>
            
            <p className="lead mb-4" style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              maxWidth: "600px",
              margin: "0 auto 2rem",
              color: "#ccc"
            }}>
              Thoughts on engineering, building, poetry, and life. Quick insights and longer reflections 
              from the intersection of technology and creativity.
            </p>
            
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              {isAdmin && (
                <Button
                  variant="primary"
                  onClick={() => setShowCreateModal(true)}
                  className="px-5 py-3"
                  size="lg"
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  Write a Post
                </Button>
              )}
              <Button
                variant="outline-success"
                href="/poems"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-journal-text me-2"></i>
                View Poetry Collection
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Search and Filter */}
      <section className="py-3" style={{ backgroundColor: "rgba(19,26,51,0.3)" }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              <div className="d-flex gap-3 align-items-center">
                <div className="flex-grow-1">
                  <Form.Control
                    type="text"
                    placeholder="Search posts by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      backgroundColor: "rgba(139,92,246,0.1)",
                      border: "1px solid rgba(139,92,246,0.3)",
                      color: "white"
                    }}
                  />
                </div>
                <div className="text-muted">
                  {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blog Posts */}
      <section className="py-5">
        <Container>
          <Row>
            {filteredPosts.length === 0 ? (
                <Col xs={12}>
                  <div className="text-center py-5">
                    <i className="bi bi-journal-text" style={{ fontSize: "4rem", color: "#8b5cf6", opacity: 0.5 }}></i>
                    <h3 className="mt-3 text-muted">
                      {searchTerm ? `No posts found for "${searchTerm}"` : "No posts yet"}
                    </h3>
                    <p className="text-muted">
                      {searchTerm ? "Try a different search term" : "Check back soon for updates!"}
                    </p>
                  </div>
                </Col>
              ) : (
                filteredPosts.map((post) => (
                  <Col xl={3} lg={4} md={6} className="mb-4" key={post.id}>
                    <Card
                      className="h-100 border-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(139,92,246,0.2)"
                      }}
                      data-aos="fade-up"
                    >
                    <Card.Body className="p-4">
                      {/* Post Header */}
                      <div className="d-flex align-items-start justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <div
                            className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                            style={{
                              width: "50px",
                              height: "50px",
                              background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                              fontSize: "1.2rem"
                            }}
                          >
                            R
                          </div>
                          <div>
                            <h6 className="mb-0 text-light">Ralph Ulysse</h6>
                            <small className="text-muted">@zewo · {formatDate(post.createdAt)}</small>
                          </div>
                        </div>
                        {isAdmin && (
                          <div className="d-flex gap-2">
                            <Button
                              variant="outline-primary"
                              size="sm"
                              onClick={() => shareToInstagram(post)}
                              className="d-flex align-items-center"
                            >
                              <i className="bi bi-instagram me-2"></i>
                              Share
                            </Button>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => handleDeletePost(post.id)}
                              className="d-flex align-items-center"
                            >
                              <i className="bi bi-trash"></i>
                            </Button>
                          </div>
                        )}
                      </div>

                      {/* Post Content */}
                      <div className="mb-3">
                        <h5 className="mb-2" style={{ color: "#8b5cf6" }}>
                          {post.title}
                        </h5>
                        <p className="text-light mb-0" style={{ 
                          fontSize: "1.1rem", 
                          lineHeight: "1.6",
                          whiteSpace: "pre-wrap"
                        }}>
                          {post.content}
                        </p>
                      </div>

                      {/* Post Actions */}
                      <div className="d-flex align-items-center justify-content-between pt-3" style={{
                        borderTop: "1px solid rgba(139,92,246,0.2)"
                      }}>
                        <div className="d-flex align-items-center gap-4">
                          <Button
                            variant="link"
                            className="p-0 text-muted d-flex align-items-center"
                            style={{ textDecoration: "none" }}
                          >
                            <i className="bi bi-heart me-2"></i>
                            <span>{post.likes}</span>
                          </Button>
                          <Button
                            variant="link"
                            className="p-0 text-muted d-flex align-items-center"
                            style={{ textDecoration: "none" }}
                          >
                            <i className="bi bi-share me-2"></i>
                            <span>{post.shares}</span>
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

      {/* Create Post Modal */}
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
            borderBottom: "1px solid rgba(139,92,246,0.2)",
            color: "white"
          }}
        >
          <Modal.Title>
            <i className="bi bi-pencil-square me-2"></i>
            Write a New Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1a1f3a", color: "white" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Give your post a catchy title..."
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                style={{
                  backgroundColor: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  color: "white"
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <Form.Label>Content</Form.Label>
                <small className={`${charCount > maxChars * 0.9 ? 'text-warning' : 'text-muted'}`}>
                  {charCount}/{maxChars}
                </small>
              </div>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="What's on your mind? Share your thoughts..."
                value={newPost.content}
                onChange={(e) => handleContentChange(e.target.value)}
                style={{
                  backgroundColor: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  color: "white",
                  resize: "none"
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ 
          backgroundColor: "#131a33", 
          borderTop: "1px solid rgba(139,92,246,0.2)" 
        }}>
          <Button 
            variant="outline-secondary" 
            onClick={() => setShowCreateModal(false)}
          >
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleCreatePost}
            disabled={!newPost.title.trim() || !newPost.content.trim()}
          >
            <i className="bi bi-send me-2"></i>
            Publish Post
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
            borderBottom: "1px solid rgba(139,92,246,0.2)",
            color: "white"
          }}
        >
          <Modal.Title>
            <i className="bi bi-exclamation-triangle me-2"></i>
            Confirm Delete
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1a1f3a", color: "white" }}>
          Are you sure you want to delete this post? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer style={{ 
          backgroundColor: "#131a33", 
          borderTop: "1px solid rgba(139,92,246,0.2)" 
        }}>
          <Button 
            variant="outline-secondary" 
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </Button>
          <Button 
            variant="danger" 
            onClick={confirmDeletePost}
          >
            <i className="bi bi-trash me-2"></i>
            Delete Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Blog;