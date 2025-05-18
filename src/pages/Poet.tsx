import { useState } from "react";
import { Container, Row, Col, Button, Card, Tab, Nav } from "react-bootstrap";
import stillYou from "../assets/poem1.jpg";
import rome from "../assets/poem2.jpg";
import oldGuitarist from "../assets/poem3.jpg";
import fiveAM from "../assets/poem4.jpg";
import { useUser } from "../context/UserContext";

const books = [
  { title: "Still, You", image: stillYou, link: "#" },
  { title: "Rome", image: rome, link: "#" },
  { title: "The Old Guitarist", image: oldGuitarist, link: "#" },
  { title: "5am", image: fiveAM, link: "#" },
];

const sampleOpinions = [
  {
    id: 1,
    title: "The Heart of the Game",
    category: "Sports",
    content:
      "Sports teach us about failure, teamwork, and how we carry ourselves beyond the scoreboard.",
  },
  {
    id: 2,
    title: "When Silence Speaks",
    category: "Politics",
    content:
      "Sometimes leadership is not in what’s said, but in the ability to listen and act with restraint.",
  },
  {
    id: 3,
    title: "Mi Isla, Mi Voz",
    category: "Haiti & PR Stories",
    content:
      "Our islands are stories — painful, proud, poetic. To write them is to heal.",
  },
];

const Poet = () => {
  const [activeTab, setActiveTab] = useState("poetry");
  const [selectedOpinion, setSelectedOpinion] = useState(sampleOpinions[0]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { user } = useUser();

  const filteredOpinions =
    selectedCategory === "All"
      ? sampleOpinions
      : sampleOpinions.filter((op) => op.category === selectedCategory);

  return (
    <Container className="py-5">
      <Tab.Container
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k || "poetry")}
      >
        <Nav variant="tabs" className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link eventKey="poetry">Poetry</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="opinions">Opinions</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="poetry">
            <h2 style={{ fontFamily: "Cormorant Garamond" }}>
              Poem of the Week
            </h2>
            <Card className="mb-4 bg-dark text-white shadow-sm">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    "You called me rain and I came thundering. Soft but
                    undeniable."
                  </p>
                  <footer className="blockquote-footer text-white">
                    from <cite>Still, You</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
            <h3>Books</h3>
            <Row className="mt-4">
              {books.map((book, idx) => (
                <Col md={3} key={idx} className="mb-4">
                  <Card className="h-100 text-center">
                    <Card.Img
                      variant="top"
                      src={book.image}
                      alt={book.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Button variant="dark" href={book.link}>
                        Buy on Amazon
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="opinions">
            <Row>
              <Col md={3}>
                <h5>Categories</h5>
                {[
                  "All",
                  "Sports",
                  "Politics",
                  "Haiti & PR Stories",
                  "Others",
                ].map((cat) => (
                  <div
                    key={cat}
                    style={{ cursor: "pointer", marginBottom: "8px" }}
                    onClick={() => setSelectedCategory(cat)}
                    className={
                      cat === selectedCategory
                        ? "text-info fw-bold"
                        : "text-light"
                    }
                  >
                    {cat}
                  </div>
                ))}

                <hr />
                <h5>Articles</h5>
                {filteredOpinions.map((op) => (
                  <div
                    key={op.id}
                    onClick={() => setSelectedOpinion(op)}
                    style={{ cursor: "pointer", marginBottom: "6px" }}
                    className={
                      selectedOpinion.id === op.id
                        ? "text-info fw-bold"
                        : "text-light"
                    }
                  >
                    {op.title}
                  </div>
                ))}
              </Col>

              <Col md={9}>
                <h4>{selectedOpinion.title}</h4>
                <p className="text-muted">
                  Category: {selectedOpinion.category}
                </p>
                <p style={{ fontSize: "1.1rem" }}>{selectedOpinion.content}</p>

                {user ? (
                  <div className="mt-4">
                    <h5>Leave a Comment</h5>
                    <textarea
                      className="form-control mb-2"
                      placeholder="Write your thoughts..."
                      rows={3}
                    ></textarea>
                    <Button variant="light">Post</Button>
                  </div>
                ) : (
                  <p className="text-muted mt-4">
                    <em>You must be logged in to comment.</em>
                  </p>
                )}
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default Poet;
