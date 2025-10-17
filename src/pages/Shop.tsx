import { useCart } from "../context/CartContext";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Card,
} from "react-bootstrap";
import "../styles/Shop.css";
import fiveAmCover from "../assets/fiveamcover.jpeg";
import romeCover from "../assets/romecover.jpeg";
import theOldGuitaristCover from "../assets/theoldguitaristcover.jpeg";
import stillYouCover from "../assets/stillyoucover.jpeg";

// ✅ Define a proper type for book products
type Book = {
  title: string;
  author: string;
  description: string;
  price: string;
  coverImage?: string;
  genre: string;
  pages?: number;
  isbn?: string;
};

const Shop = () => {
  const { addItem } = useCart();

  const books: Book[] = [
    {
      title: "Five AM",
      author: "Ralph Ulysse",
      description: "A profound collection of poetry exploring the quiet hours before dawn, where thoughts become clearest and emotions run deepest. Reflections on solitude, creativity, and the magic found in early morning silence.",
      price: "$20.00",
      genre: "Poetry",
      pages: 96,
      coverImage: fiveAmCover
    },
    {
      title: "Rome",
      author: "Ralph Ulysse", 
      description: "An evocative journey through history, memory, and place. This collection weaves together personal experiences with the eternal city's timeless stories, exploring themes of heritage, discovery, and transformation.",
      price: "$20.00",
      genre: "Poetry",
      pages: 112,
      coverImage: romeCover
    },
    {
      title: "The Old Guitarist",
      author: "Ralph Ulysse",
      description: "Inspired by Picasso's famous painting, this collection delves into the relationship between art, struggle, and perseverance. Poetry that speaks to the artist's journey and the music that lives within us all.",
      price: "$20.00",
      genre: "Poetry",
      pages: 88,
      coverImage: theOldGuitaristCover
    }
  ];

  const handleAddToCart = (book: Book, idx: number) => {
    const cartItem = {
      id: `book-${idx}`,
      title: book.title,
      price: book.price,
      img: book.coverImage || "/api/placeholder/300/400",
      description: book.description,
      category: "books" as const,
    };
    addItem(cartItem);
  };

  const handleAddComboToCart = () => {
    const comboItem = {
      id: "book-combo-all-3",
      title: "Complete Poetry Collection (All 3 Books)",
      price: "$50.00",
      img: fiveAmCover, // Use first book as combo image
      description: "Get all three poetry collections: Five AM, Rome, and The Old Guitarist. Save $10 with this bundle!",
      category: "books" as const,
    };
    addItem(comboItem);
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
              <span style={{ fontSize: "3rem" }}>📚</span>
            </div>
            
            <Badge bg="primary" className="px-4 py-2 mb-3">
              <i className="bi bi-book me-2"></i>PUBLISHED WORKS
            </Badge>
            
            <h1 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
              marginBottom: "2rem"
            }}>
              <span style={{ color: "#8b5cf6" }}>Poetry & Books</span>
            </h1>
            
            <p className="lead mb-4" style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              maxWidth: "600px",
              margin: "0 auto 2rem",
              color: "#ccc"
            }}>
              Explore my published collections of poetry, memoirs, and reflections on technology, 
              identity, and the human experience in the digital age.
            </p>
            
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="outline-success"
                href="/poems"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-journal-text me-2"></i>
                Read Poetry Online
              </Button>
              <Button
                variant="outline-info"
                href="/blog"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-pen me-2"></i>
                Visit Blog
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Books Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "300",
              background: "linear-gradient(135deg, #8b5cf6, #fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem"
            }}>
              Available Books
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "600px", color: "#ccc" }}>
              Physical and digital copies of my published works
            </p>
          </div>

          <Row className="g-4">
            {books.map((book, idx) => (
              <Col lg={4} md={6} className="mb-4" key={idx}>
                <Card
                  className="h-100 border-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(139,92,246,0.2)",
                    transition: "all 0.3s ease"
                  }}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="text-center p-4">
                    <img 
                      src={book.coverImage}
                      alt={`${book.title} cover`}
                      style={{
                        width: "200px",
                        height: "280px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        margin: "0 auto 20px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                        border: "2px solid rgba(139,92,246,0.3)"
                      }}
                    />
                  </div>
                  
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <Badge bg="secondary" className="mb-2">{book.genre}</Badge>
                      <h5 className="mb-2" style={{ color: "#8b5cf6", fontFamily: "Cormorant Garamond" }}>
                        {book.title}
                      </h5>
                      <p className="text-muted small mb-2">by {book.author}</p>
                      {book.pages && (
                        <p className="text-muted small mb-3">{book.pages} pages</p>
                      )}
                    </div>

                    <p className="text-light mb-4" style={{ 
                      fontSize: "0.95rem", 
                      lineHeight: "1.6",
                      minHeight: "80px"
                    }}>
                      {book.description}
                    </p>

                    <div className="d-flex align-items-center justify-content-between">
                      <span className="h5 mb-0" style={{ color: "#28a745", fontWeight: "bold" }}>
                        {book.price}
                      </span>
                      <Button
                        variant="primary"
                        onClick={() => handleAddToCart(book, idx)}
                        className="px-4"
                      >
                        <i className="bi bi-cart-plus me-2"></i>
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Combo Deal Section */}
          <div className="text-center mt-5 mb-5" data-aos="fade-up">
            <div className="p-5 rounded" style={{
              background: "linear-gradient(135deg, rgba(255,215,0,0.15), rgba(139,92,246,0.15))",
              border: "2px solid rgba(255,215,0,0.3)",
              maxWidth: "800px",
              margin: "0 auto",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                background: "linear-gradient(45deg, #ff6b35, #f7931e)",
                color: "white",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: "bold",
                transform: "rotate(12deg)"
              }}>
                SAVE $10!
              </div>
              
              <h3 style={{ 
                color: "#ffd700", 
                marginBottom: "1.5rem",
                fontFamily: "Cormorant Garamond",
                fontSize: "2.5rem"
              }}>
                🎁 Complete Poetry Collection
              </h3>
              
              <Row className="align-items-center">
                <Col md={4}>
                  <div className="d-flex justify-content-center gap-2 mb-3">
                    <img src={fiveAmCover} alt="Five AM" style={{ width: "60px", height: "80px", objectFit: "cover", borderRadius: "4px" }} />
                    <img src={romeCover} alt="Rome" style={{ width: "60px", height: "80px", objectFit: "cover", borderRadius: "4px" }} />
                    <img src={theOldGuitaristCover} alt="The Old Guitarist" style={{ width: "60px", height: "80px", objectFit: "cover", borderRadius: "4px" }} />
                  </div>
                </Col>
                <Col md={4}>
                  <p className="text-light mb-3" style={{ fontSize: "1.1rem" }}>
                    Get all three poetry collections in one bundle and save $10!
                  </p>
                  <p className="text-muted mb-0">
                    <span style={{ textDecoration: "line-through", color: "#888" }}>$60.00</span>{" "}
                    <span className="h4" style={{ color: "#28a745", fontWeight: "bold" }}>$50.00</span>
                  </p>
                </Col>
                <Col md={4}>
                  <Button
                    variant="warning"
                    size="lg"
                    onClick={handleAddComboToCart}
                    className="px-4 py-3"
                    style={{ 
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      borderRadius: "25px",
                      boxShadow: "0 4px 15px rgba(255,215,0,0.4)"
                    }}
                  >
                    <i className="bi bi-cart-plus me-2"></i>
                    Add Bundle to Cart
                  </Button>
                </Col>
              </Row>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="text-center mt-5" data-aos="fade-up">
            <h2 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: "300",
              background: "linear-gradient(135deg, #8b5cf6, #fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "2rem"
            }}>
              Coming Soon
            </h2>
            
            <Row className="justify-content-center">
              <Col lg={4} md={6}>
                <Card
                  className="h-100 border-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(19,26,51,0.7), rgba(14,19,55,0.6))",
                    backdropFilter: "blur(10px)",
                    border: "2px solid rgba(139,92,246,0.4)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  data-aos="fade-up"
                >
                  <div style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: "linear-gradient(45deg, #8b5cf6, #6366f1)",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "15px",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    zIndex: 2
                  }}>
                    COMING SOON
                  </div>
                  
                  <div className="text-center p-4">
                    <img 
                      src={stillYouCover}
                      alt="Still You cover"
                      style={{
                        width: "200px",
                        height: "280px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        margin: "0 auto 20px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                        border: "2px solid rgba(139,92,246,0.3)",
                        filter: "brightness(0.8) saturate(0.9)"
                      }}
                    />
                  </div>
                  
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <Badge bg="secondary" className="mb-2">Poetry</Badge>
                      <h5 className="mb-2" style={{ color: "#8b5cf6", fontFamily: "Cormorant Garamond" }}>
                        Still You
                      </h5>
                      <p className="text-muted small mb-3">by Ralph Ulysse</p>
                    </div>

                    <p className="text-light mb-4" style={{ 
                      fontSize: "0.95rem", 
                      lineHeight: "1.6",
                      minHeight: "80px"
                    }}>
                      An intimate collection exploring love, loss, and the echoes of memory. 
                      Raw and tender verses that capture the essence of what remains when everything changes.
                    </p>

                    <div className="text-center">
                      <Button
                        variant="outline-primary"
                        disabled
                        className="px-4"
                        style={{ opacity: 0.6 }}
                      >
                        <i className="bi bi-clock me-2"></i>
                        Notify Me
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
            <div className="mt-4">
              <p className="text-light">
                Follow my <a href="/blog" className="text-primary">blog</a> for updates on the release date and 
                behind-the-scenes content from the writing process.
              </p>
            </div>
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

export default Shop;