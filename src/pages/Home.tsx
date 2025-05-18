import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeImage from "../assets/home.jpg";
import { supabase } from "../supabase";
import vanityImg from "../assets/placeholder-vanity.jpg";
import kitchenImg from "../assets/placeholder-kitchen.jpg";
import deskImg from "../assets/placeholder-desk.jpg";
import cabinetImg from "../assets/placeholder-cabinet.jpg";

type Product = {
  id: string;
  title: string;
  price: number;
  image_url?: string;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data || []);
      }
    };

    fetchProducts();
  }, []);

  const fallbackImages = [vanityImg, kitchenImg, deskImg, cabinetImg];

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white" }}>
      {/* Hero Section */}
      <section
        className="hero-section text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          textShadow: "0 2px 4px rgba(0,0,0,0.7)",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontFamily: "Cormorant Garamond", fontSize: "3.2rem" }}>
            Welcome to Zewo
          </h1>
          <p className="lead mb-4" style={{ fontSize: "1.5rem" }}>
            Build. Code. Write.
          </p>
          <Button variant="light" size="lg" href="/shop">
            Explore My World
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5" style={{ backgroundColor: "#0a0f2c" }}>
        <Container>
          <h2
            className="text-center mb-5"
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2.5rem",
              fontWeight: "lighter",
              color: "white",
            }}
          >
            My World in Three Words
          </h2>
          <Row>
            {[
              {
                title: "Builder",
                desc: "Custom kitchens, vanities, and furniture — built from scratch in my workshop.",
                link: "/builder",
              },
              {
                title: "Engineer",
                desc: "I develop web tools, systems, and automations with modern tech.",
                link: "/engineer",
              },
              {
                title: "Poet",
                desc: "Books and verses about love, identity, and memory — written from the heart.",
                link: "/poet",
              },
            ].map((section, idx) => (
              <Col md={4} className="text-center mb-4" key={idx}>
                <div
                  className="p-4 h-100 shadow-sm rounded"
                  style={{ backgroundColor: "#131a33" }}
                >
                  <img
                    src={homeImage}
                    alt={section.title}
                    className="img-fluid rounded mb-3"
                    style={{
                      height: "180px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <h4
                    style={{ fontFamily: "Cormorant Garamond", color: "white" }}
                  >
                    {section.title}
                  </h4>
                  <p
                    className="mb-3"
                    style={{ fontSize: "0.95rem", color: "#ccc" }}
                  >
                    {section.desc}
                  </p>
                  <Button variant="outline-light" href={section.link}>
                    Learn More
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Cabinet Work Section */}
      <section className="py-5" style={{ backgroundColor: "#0a0f2c" }}>
        <Container>
          <h2
            className="text-center mb-5"
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2.5rem",
              fontWeight: "lighter",
              color: "white",
            }}
          >
            Featured Cabinet Work
          </h2>
          <Row className="justify-content-center">
            {products.slice(0, 4).map((product, idx) => (
              <Col md={3} className="mb-4" key={product.id}>
                <div
                  className="card text-white h-100 shadow-sm"
                  style={{ backgroundColor: "#131a33" }}
                >
                  <img
                    src={
                      product.image_url ||
                      fallbackImages[idx % fallbackImages.length]
                    }
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    <Button variant="outline-light" href="/builder">
                      See More Builds
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer
        className="text-center text-white mt-5 py-5"
        style={{ backgroundColor: "#131a33" }}
      >
        <Container>
          <h5
            style={{ fontFamily: "Cormorant Garamond", fontWeight: "lighter" }}
          >
            Let’s build something together.
          </h5>
          <p>Have a project, idea, or poem you want to talk about?</p>
          <Button variant="outline-light" href="/builder">
            Get in Touch
          </Button>

          <div className="d-flex justify-content-center gap-4 mt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-4"
            >
              <i className="bi bi-github"></i>
            </a>
            <a href="mailto:your@email.com" className="text-white fs-4">
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-4"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>

          <p className="mt-4 small text-muted">
            &copy; {new Date().getFullYear()} Zewo by Ralph Ulysse
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
