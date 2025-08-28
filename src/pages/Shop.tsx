import { useState } from "react";
import { useCart } from "../context/CartContext";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
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
      {/* Hero */}
      <section className="text-center py-5">
        <h1 style={{ fontFamily: "Cormorant Garamond", fontSize: "3rem" }}>
          Shop My Creations
        </h1>
        <p className="lead">Books & Bespoke Cabinets — curated for you.</p>
      </section>

      {/* Toggle */}
      <section className="text-center mb-5">
        <ToggleButtonGroup
          type="radio"
          name="categories"
          value={category}
          onChange={(val) => setCategory(val)}
        >
          <ToggleButton
            id="tbg-radio-1"
            value="books"
            variant={category === "books" ? "warning" : "outline-warning"}
          >
            Poetry Books
          </ToggleButton>
          <ToggleButton
            id="tbg-radio-2"
            value="cabinets"
            variant={category === "cabinets" ? "warning" : "outline-warning"}
          >
            Cabinets & Woodwork
          </ToggleButton>
        </ToggleButtonGroup>
      </section>

      {/* Product Grid */}
      <Container className="pb-5">
        <Row className="g-4">
          {(category === "books" ? books : cabinets).map((item, idx) => (
            <Col md={6} lg={3} key={idx}>
              <Card
                className="h-100 product-card"
                style={{ backgroundColor: "#131a33", overflow: "hidden" }}
              >
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{ transition: "transform 0.4s ease" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <p style={{ fontWeight: "bold", color: "gold" }}>
                    {item.price}
                  </p>
                  <Button
                    variant="outline-warning"
                    onClick={() => handleAddToCart(item, idx)}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

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
