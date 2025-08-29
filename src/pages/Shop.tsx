import { useState } from "react";
import { useCart } from "../context/CartContext";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Badge,
} from "react-bootstrap";
import "../styles/Shop.css";
import book1 from "../assets/stillyoucover.jpeg";
import book2 from "../assets/romecover.jpeg";
import book3 from "../assets/fiveamcover.jpeg";
import book4 from "../assets/theoldguitaristcover.jpeg";
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
  const [category, setCategory] = useState<"books" | "cabinets">("books");
  const { addItem } = useCart();

  const books: Product[] = [
    {
      title: "Still You",
      img: book1,
      description:
        "A deeply personal collection about love, longing, and return.",
      price: "$20",
    },
    {
      title: "Rome",
      img: book2,
      description:
        "A lyrical journey through the eternal city’s hidden moments.",
      price: "$18",
    },
    {
      title: "Five AM",
      img: book3,
      description: "Poems born in the quiet, restless early hours.",
      price: "$15",
    },
    {
      title: "The Old Guitarist",
      img: book4,
      description:
        "Verses inspired by Picasso’s painting — blue, broken, beautiful.",
      price: "$17",
    },
  ];

  const cabinets: Product[] = [
    {
      title: "Modern Vanity",
      img: vanity1,
      description: "Elegant custom bathroom vanity.",
      price: "$400",
    },
    {
      title: "Walk-In Closet",
      img: closet1,
      description: "Maximize your space with style.",
      price: "$1500",
    },
    {
      title: "Compact Kitchen",
      img: kitchen1,
      description: "Perfect for small apartments.",
      price: "$3200",
    },
    {
      title: "Custom Shelf Unit",
      img: other1,
      description: "Handmade shelf, fits any space.",
      price: "$250",
    },
  ];

  const handleAddToCart = (item: Product, idx: number) => {
    const cartItem = {
      id: `${category}-${idx}`,
      title: item.title,
      price: item.price,
      img: item.img,
      description: item.description,
      category,
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
              <i className="bi bi-shop me-2"></i>PREMIUM COLLECTION
            </Badge>
          </div>
          <h1 className="shop-title mb-4">
            Curated Creations
          </h1>
          <p className="shop-subtitle">
            Discover handcrafted poetry books and bespoke woodwork — 
            where artistry meets craftsmanship in every piece.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
            <Button
              className={`category-btn ${category === 'books' ? 'active' : ''}`}
              onClick={() => setCategory('books')}
            >
              <i className="bi bi-journal-text me-2"></i>
              Poetry Collection
            </Button>
            <Button
              className={`category-btn ${category === 'cabinets' ? 'active' : ''}`}
              onClick={() => setCategory('cabinets')}
            >
              <i className="bi bi-hammer me-2"></i>
              Custom Woodwork
            </Button>
          </div>
        </div>
      </section>

      {/* Category Toggle Section */}
      <section className="category-toggle-section">
        <Container>
          <div className="text-center">
            <h3 className="mb-4" style={{ 
              fontFamily: "Cormorant Garamond, serif",
              color: "#daa520",
              fontSize: "2.2rem"
            }}>
              {category === 'books' ? 'Literary Collection' : 'Handcrafted Woodwork'}
            </h3>
            <p className="text-muted mb-4">
              {category === 'books' 
                ? 'Four volumes of poetry exploring love, loss, identity, and the spaces between silence and song.'
                : 'Custom furniture and cabinetry designed and built with precision, passion, and attention to detail.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Premium Product Grid */}
      <section className="products-section">
        <Container>
          <Row className="g-4 justify-content-center">
            {(category === "books" ? books : cabinets).map((item, idx) => (
              <Col md={6} lg={3} key={`${category}-${idx}`}>
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

      {/* Featured Collection */}
      <section className="featured-products-section">
        <Container>
          <div className="featured-content" data-aos="fade-up">
            <h2 className="featured-title">
              {category === 'books' ? 'Award-Winning Poetry' : 'Master Craftsmanship'}
            </h2>
            <p className="featured-subtitle">
              {category === 'books'
                ? 'Each book represents years of reflection, observation, and the distillation of human experience into verse that resonates across cultures and time.'
                : 'Every piece is meticulously designed and handcrafted using premium materials and traditional techniques passed down through generations of skilled artisans.'}
            </p>
            <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
              <div className="text-center">
                <div className="stat-number">{category === 'books' ? '4' : '50+'}</div>
                <div className="stat-label">{category === 'books' ? 'Published Volumes' : 'Custom Pieces'}</div>
              </div>
              <div className="text-center">
                <div className="stat-number">{category === 'books' ? '1000+' : '25+'}</div>
                <div className="stat-label">{category === 'books' ? 'Copies Sold' : 'Happy Clients'}</div>
              </div>
              <div className="text-center">
                <div className="stat-number">{category === 'books' ? '5⭐' : '100%'}</div>
                <div className="stat-label">{category === 'books' ? 'Average Rating' : 'Satisfaction Rate'}</div>
              </div>
            </div>
          </div>
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
                    Poet
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
