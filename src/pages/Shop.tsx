import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
} from "react-bootstrap";

const Shop = () => {
  const [filter, setFilter] = useState<"cabinets" | "poetry">("cabinets");

  const cabinetItems = [
    {
      title: "Modern Kitchen – Student Housing",
      image: "https://via.placeholder.com/600x300?text=Kitchen",
      price: "$3,000",
    },
    {
      title: "Custom Vanity – Natural Finish",
      image: "https://via.placeholder.com/600x300?text=Vanity",
      price: "$1,200",
    },
  ];

  const poetryBooks = [
    {
      title: "Still, You",
      image: "https://via.placeholder.com/600x300?text=Still+You",
      link: "https://www.amazon.com/dp/your-book-link-1",
    },
    {
      title: "The Old Guitarist",
      image: "https://via.placeholder.com/600x300?text=The+Old+Guitarist",
      link: "https://www.amazon.com/dp/your-book-link-2",
    },
    {
      title: "Rome",
      image: "https://via.placeholder.com/600x300?text=Rome",
      link: "https://www.amazon.com/dp/your-book-link-3",
    },
    {
      title: "5am",
      image: "https://via.placeholder.com/600x300?text=5am",
      link: "https://www.amazon.com/dp/your-book-link-4",
    },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Shop</h1>

      {/* Filter Buttons */}
      <Row className="justify-content-center mb-4">
        <ButtonGroup>
          <Button
            variant={filter === "cabinets" ? "primary" : "outline-primary"}
            onClick={() => setFilter("cabinets")}
          >
            Cabinets
          </Button>
          <Button
            variant={filter === "poetry" ? "primary" : "outline-primary"}
            onClick={() => setFilter("poetry")}
          >
            Poetry
          </Button>
        </ButtonGroup>
      </Row>

      {/* Items Display */}
      <Row>
        {filter === "cabinets" &&
          cabinetItems.map((item, idx) => (
            <Col md={6} lg={4} className="mb-4" key={idx} data-aos="fade-up">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>Price: {item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}

        {filter === "poetry" &&
          poetryBooks.map((book, idx) => (
            <Col md={6} lg={4} className="mb-4" key={idx} data-aos="fade-up">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={book.image} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Button variant="dark" href={book.link} target="_blank">
                    Buy on Amazon
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Shop;
