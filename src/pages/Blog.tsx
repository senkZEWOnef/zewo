import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Form, Modal, Badge } from "react-bootstrap";
import { useUser } from "../context/UserContext";
import { useContent } from "../context/ContentContext";
import engineerImg from "../assets/engineer.jpeg";
import "../styles/About.css";

const Blog = () => {
  const userContext = useUser();
  const user = userContext?.user;
  const { posts, loading, addPost, editPost, deletePost } = useContent();
  const isAdmin = user?.email === "admin@byzewo.com"; // Adjust admin email as needed
  
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [charCount, setCharCount] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [postToEdit, setPostToEdit] = useState<any>(null);
  const [editPost_local, setEditPost_local] = useState({ title: "", content: "" });
  const [editCharCount, setEditCharCount] = useState(0);
  const maxChars = 280; // Twitter-like character limit

  // Filter posts based on search term
  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [posts, searchTerm]);

  const handleCreatePost = async () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      try {
        await addPost({
          title: newPost.title.trim(),
          content: newPost.content.trim()
        });
        
        setNewPost({ title: "", content: "" });
        setCharCount(0);
        setShowCreateModal(false);
      } catch (error) {
        console.error('Error creating post:', error);
        alert('Failed to create post. Please try again.');
      }
    }
  };

  const handleContentChange = (content: string) => {
    if (content.length <= maxChars) {
      setNewPost({ ...newPost, content });
      setCharCount(content.length);
    }
  };

  const shareToInstagram = (post: any) => {
    // Generate Instagram story format
    const storyText = `${post.title}\n\n${post.content}\n\n🌐 Read more at byzewo.com`;
    
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

  const handleEditPost = (post: any) => {
    setPostToEdit(post);
    setEditPost_local({ title: post.title, content: post.content });
    setEditCharCount(post.content.length);
    setShowEditModal(true);
  };

  const handleEditContentChange = (content: string) => {
    if (content.length <= maxChars) {
      setEditPost_local({ ...editPost_local, content });
      setEditCharCount(content.length);
    }
  };

  const confirmEditPost = async () => {
    if (postToEdit && editPost_local.title.trim() && editPost_local.content.trim()) {
      try {
        await editPost(postToEdit.id, {
          title: editPost_local.title.trim(),
          content: editPost_local.content.trim()
        });
        
        setShowEditModal(false);
        setPostToEdit(null);
        setEditPost_local({ title: "", content: "" });
        setEditCharCount(0);
      } catch (error) {
        console.error('Error editing post:', error);
        alert('Failed to edit post. Please try again.');
      }
    }
  };

  const confirmDeletePost = async () => {
    if (postToDelete) {
      try {
        await deletePost(postToDelete);
        setShowDeleteModal(false);
        setPostToDelete(null);
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post. Please try again.');
      }
    }
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
            {loading ? (
              <Col xs={12}>
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <h3 className="mt-3 text-muted">Loading posts...</h3>
                </div>
              </Col>
            ) : filteredPosts.length === 0 ? (
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
                  <Col xl={3} lg={4} md={6} sm={6} className="mb-4" key={post.id}>
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
                          <img
                            src={engineerImg}
                            alt="Ralph Ulysse"
                            className="rounded-circle me-3"
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover"
                            }}
                          />
                          <div>
                            <h6 className="mb-0 text-light">Ralph Ulysse</h6>
                            <small className="text-muted">@zewo · {formatDate(post.created_at)}</small>
                          </div>
                        </div>
                        {isAdmin && (
                          <div className="d-flex gap-1 flex-wrap">
                            <Button
                              variant="outline-primary"
                              size="sm"
                              onClick={() => shareToInstagram(post)}
                              className="d-flex align-items-center flex-fill flex-sm-grow-0"
                              style={{ minWidth: "80px" }}
                            >
                              <i className="bi bi-instagram me-1"></i>
                              <span className="d-none d-sm-inline">Share</span>
                            </Button>
                            <Button
                              variant="outline-warning"
                              size="sm"
                              onClick={() => handleEditPost(post)}
                              className="d-flex align-items-center justify-content-center"
                              style={{ minWidth: "40px" }}
                              title="Edit Post"
                            >
                              <i className="bi bi-pencil"></i>
                            </Button>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => handleDeletePost(post.id)}
                              className="d-flex align-items-center justify-content-center"
                              style={{ minWidth: "40px" }}
                              title="Delete Post"
                            >
                              <i className="bi bi-trash"></i>
                            </Button>
                          </div>
                        )}
                      </div>

                      {/* Post Content */}
                      <div className="mb-3">
                        <h5 className="mb-2" style={{ 
                          color: "#8b5cf6",
                          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                          lineHeight: "1.3"
                        }}>
                          {post.title}
                        </h5>
                        <p className="text-light mb-0" style={{ 
                          fontSize: "clamp(0.9rem, 2vw, 1.1rem)", 
                          lineHeight: "1.6",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word"
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
        fullscreen="sm-down"
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
                rows={6}
                placeholder="What's on your mind? Share your thoughts..."
                value={newPost.content}
                onChange={(e) => handleContentChange(e.target.value)}
                style={{
                  backgroundColor: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  color: "white",
                  resize: "vertical",
                  fontSize: "1rem",
                  minHeight: "120px"
                }}
                autoComplete="off"
                spellCheck="true"
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

      {/* Edit Post Modal */}
      <Modal 
        show={showEditModal} 
        onHide={() => setShowEditModal(false)}
        size="lg"
        centered
        fullscreen="sm-down"
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
            Edit Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1a1f3a", color: "white" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Give your post a catchy title..."
                value={editPost_local.title}
                onChange={(e) => setEditPost_local({ ...editPost_local, title: e.target.value })}
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
                <small className={`${editCharCount > maxChars * 0.9 ? 'text-warning' : 'text-muted'}`}>
                  {editCharCount}/{maxChars}
                </small>
              </div>
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="What's on your mind? Share your thoughts..."
                value={editPost_local.content}
                onChange={(e) => handleEditContentChange(e.target.value)}
                style={{
                  backgroundColor: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  color: "white",
                  resize: "vertical",
                  fontSize: "1rem",
                  minHeight: "120px"
                }}
                autoComplete="off"
                spellCheck="true"
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
            onClick={() => setShowEditModal(false)}
          >
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={confirmEditPost}
            disabled={!editPost_local.title.trim() || !editPost_local.content.trim()}
          >
            <i className="bi bi-check2 me-2"></i>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <footer
        className="text-white py-5"
        style={{ backgroundColor: "#131a33" }}
      >
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h4 style={{ fontFamily: "Cormorant Garamond" }}>byZewo</h4>
              <p style={{ color: "#ccc" }}>Code. Build. Create.</p>
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
            &copy; {new Date().getFullYear()} byZewo by Ralph Ulysse
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Blog;