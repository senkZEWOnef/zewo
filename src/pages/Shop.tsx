import { useCart } from "../context/CartContext";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
} from "react-bootstrap";
import "../styles/Shop.css";
import vanity1 from "../assets/vanity1.jpeg";
import closet1 from "../assets/closet1.jpeg";
import kitchen1 from "../assets/kitchen1.jpeg";
import other1 from "../assets/other1.jpeg";

// ✅ Define a proper type for products
type Product = {
  title: string;
  img: string;
  description: string;
  price: string;
};

const Shop = () => {
  const { addItem } = useCart();

  const products: Product[] = [
    {
      title: "Modern Vanity",
      img: vanity1,
      description: "Elegant custom bathroom vanity with premium finishes.",
      price: "$400",
    },
    {
      title: "Walk-In Closet",
      img: closet1,
      description: "Maximize your space with style and organization.",
      price: "$1500",
    },
    {
      title: "Compact Kitchen",
      img: kitchen1,
      description: "Perfect for small apartments, big on functionality.",
      price: "$3200",
    },
    {
      title: "Custom Shelf Unit",
      img: other1,
      description: "Handmade shelf system, fits any space perfectly.",
      price: "$250",
    },
  ];

  const handleAddToCart = (item: Product, idx: number) => {
    const cartItem = {
      id: `woodwork-${idx}`,
      title: item.title,
      price: item.price,
      img: item.img,
      description: item.description,
      category: "cabinets" as const,
    };
    addItem(cartItem);
  };

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white" }}>
      {/* Premium Hero Section */}
      <section className="shop-hero">
        <div className="shop-hero-content" data-aos="fade-up">
          <div className="mb-4">
            <Badge bg="warning" text="dark" className="px-4 py-2 mb-3 shop-badge-pulse">
              <i className="bi bi-hammer me-2"></i>CUSTOM WOODWORK
            </Badge>
          </div>
          <h1 className="shop-title mb-4">
            Handcrafted Furniture
          </h1>
          <p className="shop-subtitle">
            Discover bespoke woodwork and custom cabinetry — 
            where craftsmanship meets functionality in every piece.
          </p>
          <div className="text-center mt-4">
            <small className="text-muted">
              <i className="bi bi-info-circle me-2"></i>
              Looking for poetry books? Visit my <a href="/poet" className="text-warning">blog & poetry page</a> for Amazon links.
            </small>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="category-toggle-section">
        <Container>
          <div className="text-center">
            <h3 className="mb-4" style={{ 
              fontFamily: "Cormorant Garamond, serif",
              color: "#daa520",
              fontSize: "2.2rem"
            }}>
              Handcrafted Woodwork
            </h3>
            <p className="text-muted mb-4">
              Custom furniture and cabinetry designed and built with precision, passion, and attention to detail. 
              Each piece is crafted from premium materials using traditional techniques.
            </p>
          </div>
        </Container>
      </section>

      {/* Premium Product Grid */}
      <section className="products-section">
        <Container>
          <Row className="g-4 justify-content-center">
            {products.map((item, idx) => (
              <Col md={6} lg={3} key={`woodwork-${idx}`}>
                <div
                  className="product-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-text">{item.description}</p>
                    <div className="product-price">
                      {item.price}
                    </div>
                    <Button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(item, idx)}
                    >
                      <i className="bi bi-cart-plus me-2"></i>
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Craftsmanship */}
      <section className="featured-products-section">
        <Container>
          <div className="featured-content" data-aos="fade-up">
            <h2 className="featured-title">
              Master Craftsmanship
            </h2>
            <p className="featured-subtitle">
              Every piece is meticulously designed and handcrafted using premium materials and traditional techniques 
              passed down through generations of skilled artisans. From initial concept to final installation, 
              we ensure every detail meets the highest standards of quality and beauty.
            </p>
            <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
              <div className="text-center">
                <div className="stat-number">50+</div>
                <div className="stat-label">Custom Pieces</div>
              </div>
              <div className="text-center">
                <div className="stat-number">25+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Custom Order Info */}
      <section className="py-5" style={{ background: "linear-gradient(135deg, rgba(19, 26, 51, 0.6), rgba(25, 25, 112, 0.2))" }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h3 className="mb-3" style={{ color: "#daa520" }}>Need a Custom Piece?</h3>
              <p className="text-muted mb-0">
                Don't see exactly what you're looking for? I specialize in creating custom furniture and cabinetry 
                tailored to your specific needs and space. From concept to completion, let's bring your vision to life.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
              <Button 
                variant="outline-warning" 
                size="lg"
                href="/appointment"
                className="px-4 py-3"
              >
                <i className="bi bi-calendar me-2"></i>
                Schedule Consultation
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer
        className="text-white py-5"
        style={{ backgroundColor: "#0f1419" }}
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
                  <a href="/poet" className="text-white">
                    Poetry & Blog
                  </a>
                </li>
                <li>
                  <a href="/shop" className="text-white">
                    Shop
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Contact</h5>
              <p>Email: your@email.com</p>
              <p>Phone: (787) 555-1234</p>
              <div className="d-flex gap-3 fs-4">
                <a
                  href="https://instagram.com/yourhandle"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://github.com/yourhandle"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://facebook.com/yourhandle"
                  target="_blank"
                  className="text-white"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://youtube.com/@yourhandle"
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

export default Shop;