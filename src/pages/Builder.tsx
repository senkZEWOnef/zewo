import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import homeImage from "../assets/placeholder-cabinet.jpg";
import homeImage2 from "../assets/placeholder-desk.jpg";
import { supabase } from "../supabase";

const categories = ["Kitchens", "Desks", "Closets", "Others"];

const sampleGallery = [
  {
    title: "Modern Kitchen",
    price: 1200,
    image: homeImage,
    colors: ["White", "Walnut", "Black"],
  },
  {
    title: "Compact Desk",
    price: 650,
    image: homeImage2,
    colors: ["Oak", "Teak", "Charcoal"],
  },
];

const Builder = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quote, setQuote] = useState({
    type: "Kitchen",
    width: 0,
    height: 0,
    depth: 0,
    material: "PVC",
  });

  const getRate = (material: string) => {
    switch (material) {
      case "PVC":
        return 0.6;
      case "Wood":
        return 0.9;
      case "Premium Laminate":
        return 1.2;
      default:
        return 0.6;
    }
  };

  return (
    <Container
      className="py-5"
      style={{ backgroundColor: "#0a0f2c", color: "white" }}
    >
      <h1
        className="text-center mb-5"
        style={{ fontFamily: "Cormorant Garamond" }}
      >
        Custom Cabinet Work
      </h1>

      {/* Category Selector */}
      {!selectedCategory && (
        <>
          <h3 className="text-center mb-4">Choose a Category</h3>
          <Row className="text-center">
            {categories.map((cat) => (
              <Col md={3} key={cat} className="mb-4">
                <Card
                  className="h-100 shadow-sm bg-dark text-white"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedCategory(cat)}
                >
                  <Card.Img
                    src={homeImage}
                    alt={cat}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{cat}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Gallery View */}
      {selectedCategory && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>{selectedCategory} Gallery</h3>
            <Button
              variant="outline-light"
              onClick={() => setSelectedCategory(null)}
            >
              Back to Categories
            </Button>
          </div>

          <Row>
            {sampleGallery.map((item, idx) => (
              <Col md={4} className="mb-4" key={idx}>
                <Card className="h-100 shadow-sm bg-white text-dark">
                  <Card.Img
                    src={item.image}
                    alt={item.title}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <p>Starting at ${item.price}</p>
                    <DropdownButton
                      id={`dropdown-${idx}`}
                      title="Choose a Color"
                      variant="secondary"
                    >
                      {item.colors.map((color) => (
                        <Dropdown.Item key={color}>{color}</Dropdown.Item>
                      ))}
                    </DropdownButton>
                    <Button variant="dark" className="mt-3">
                      Inquire
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Workshop Techniques Section */}
      <section
        className="py-5"
        style={{ backgroundColor: "#131a33", color: "white" }}
      >
        <Container>
          <h2
            className="text-center mb-5"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Inside the Workshop
          </h2>
          <Row>
            <Col md={6}>
              <Card className="bg-dark text-white shadow-sm mb-4">
                <Card.Body>
                  <Card.Title>Tool Spotlight: Edge Bander</Card.Title>
                  <Card.Text>
                    One of my favorite shop tools — smooths the edges and gives
                    cabinets a clean, professional finish.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="bg-dark text-white shadow-sm mb-4">
                <Card.Body>
                  <Card.Title>Behind the Scenes: PVC Panel Cutting</Card.Title>
                  <Card.Text>
                    Here’s how I cut and prep PVC panels for kitchens — precise,
                    clean, and made to last.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <p className="text-center text-muted mt-4">
            More updates from the shop coming soon...
          </p>
        </Container>
      </section>

      {/* Quote Generator */}
      <section
        className="py-5"
        style={{ backgroundColor: "#0a0f2c", color: "white" }}
      >
        <Container>
          <h2
            className="text-center mb-4"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Get a Custom Quote
          </h2>

          <Row className="justify-content-center">
            <Col md={8}>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const estimatedPrice = Math.round(
                    (quote.width *
                      quote.height *
                      quote.depth *
                      getRate(quote.material)) /
                      1000
                  );

                  const { error } = await supabase.from("quotes").insert([
                    {
                      type: quote.type,
                      width: quote.width,
                      height: quote.height,
                      depth: quote.depth,
                      material: quote.material,
                      price: estimatedPrice,
                    },
                  ]);

                  if (error) {
                    alert("Something went wrong. Please try again.");
                    console.error(error);
                  } else {
                    alert("Quote submitted!");
                  }
                }}
              >
                <div className="mb-3">
                  <label className="form-label">Project Type</label>
                  <select
                    className="form-select"
                    value={quote.type}
                    onChange={(e) =>
                      setQuote({ ...quote, type: e.target.value })
                    }
                  >
                    <option>Kitchen</option>
                    <option>Vanity</option>
                    <option>Desk</option>
                    <option>Other</option>
                  </select>
                </div>

                <Row>
                  <Col md={4}>
                    <label className="form-label">Width (in)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={quote.width}
                      onChange={(e) =>
                        setQuote({ ...quote, width: Number(e.target.value) })
                      }
                    />
                  </Col>
                  <Col md={4}>
                    <label className="form-label">Height (in)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={quote.height}
                      onChange={(e) =>
                        setQuote({ ...quote, height: Number(e.target.value) })
                      }
                    />
                  </Col>
                  <Col md={4}>
                    <label className="form-label">Depth (in)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={quote.depth}
                      onChange={(e) =>
                        setQuote({ ...quote, depth: Number(e.target.value) })
                      }
                    />
                  </Col>
                </Row>

                <div className="mt-3 mb-4">
                  <label className="form-label">Material</label>
                  <select
                    className="form-select"
                    value={quote.material}
                    onChange={(e) =>
                      setQuote({ ...quote, material: e.target.value })
                    }
                  >
                    <option>PVC</option>
                    <option>Wood</option>
                    <option>Premium Laminate</option>
                  </select>
                </div>

                <h5 className="mb-3">
                  Estimated Price:{" "}
                  <span className="text-info">
                    $
                    {Math.round(
                      (quote.width *
                        quote.height *
                        quote.depth *
                        getRate(quote.material)) /
                        1000
                    )}
                  </span>
                </h5>

                <Button type="submit" variant="light">
                  Submit Request
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section 4: Contact Form */}
      <section
        className="py-5"
        style={{ backgroundColor: "#131a33", color: "white" }}
      >
        <Container>
          <h2
            className="text-center mb-4"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Contact Me
          </h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const name = (
                    form.elements.namedItem("name") as HTMLInputElement
                  ).value;
                  const email = (
                    form.elements.namedItem("email") as HTMLInputElement
                  ).value;
                  const message = (
                    form.elements.namedItem("message") as HTMLInputElement
                  ).value;

                  const { error } = await supabase
                    .from("messages")
                    .insert([{ name, email, message }]);

                  if (error) {
                    alert("Something went wrong. Please try again.");
                    console.error(error);
                  } else {
                    alert("Message sent!");
                    form.reset();
                  }
                }}
                className="p-4 rounded shadow-lg bg-dark"
              >
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="form-control"
                    required
                  />
                </div>
                <div className="text-end">
                  <Button type="submit" variant="light">
                    Send Message
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default Builder;
