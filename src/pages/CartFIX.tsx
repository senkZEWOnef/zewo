import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div
        style={{
          backgroundColor: "#0a0f2c",
          color: "white",
          minHeight: "80vh",
          padding: "50px",
        }}
      >
        <Container>
          <h1 style={{ fontFamily: "Cormorant Garamond" }}>Your Cart</h1>
          <p>No items in cart yet.</p>
          <Button variant="outline-warning" href="/shop">
            Continue Shopping
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#0a0f2c",
        color: "white",
        minHeight: "80vh",
        padding: "50px",
      }}
    >
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 style={{ fontFamily: "Cormorant Garamond" }}>Your Cart</h1>
          <div>
            <span className="me-3">{getTotalItems()} items</span>
            <Button variant="outline-danger" size="sm" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </div>

        <Row>
          <Col lg={8}>
            {items.map((item) => (
              <Card
                key={item.id}
                className="mb-3"
                style={{ backgroundColor: "#131a33", color: "white" }}
              >
                <Row className="g-0">
                  <Col md={3}>
                    <Card.Img
                      src={item.img}
                      alt={item.title}
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col md={9}>
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <div>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text className="small">{item.description}</Card.Text>
                          <p className="text-warning fw-bold">{item.price}</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <Button
                            variant="outline-warning"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button
                            variant="outline-warning"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            className="ms-3"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>

          <Col lg={4}>
            <Card style={{ backgroundColor: "#131a33", color: "white" }}>
              <Card.Body>
                <h4>Order Summary</h4>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span>Total Items:</span>
                  <span>{getTotalItems()}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total Price:</strong>
                  <strong className="text-warning">${getTotalPrice().toFixed(2)}</strong>
                </div>
                <Button variant="warning" className="w-100 mb-2">
                  Checkout
                </Button>
                <Button variant="outline-warning" className="w-100" href="/shop">
                  Continue Shopping
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
