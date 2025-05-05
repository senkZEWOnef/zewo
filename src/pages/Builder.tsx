import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FormEvent } from "react";
import { supabase } from "../supabase";

const Builder = () => {
  // ✅ Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const interest = (form.elements.namedItem("interest") as HTMLInputElement)
      .value;
    const date = (form.elements.namedItem("date") as HTMLInputElement).value;

    const { error } = await supabase
      .from("appointments")
      .insert([{ name, email, interest, date }]);

    if (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } else {
      alert("Appointment submitted successfully!");
      form.reset();
    }
  };

  return (
    <Container className="mt-5">
      {/* Header */}
      <Row className="justify-content-center mb-4">
        <Col md={8} data-aos="fade-down">
          <h1 className="text-center">Builder</h1>
          <p className="lead text-center">
            I design and build custom kitchens, closets, and furniture from my
            workshop — blending precision and craftsmanship.
          </p>
        </Col>
      </Row>

      {/* Showcase */}
      <Row className="mb-5">
        <Col md={6} data-aos="fade-right">
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/600x300?text=Kitchen+Design"
            />
            <Card.Body>
              <Card.Title>Student Apartment Kitchens</Card.Title>
              <Card.Text>
                Smart, compact, and durable designs perfect for student housing
                — custom-built from scratch.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} data-aos="fade-left">
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/600x300?text=Closet+Build"
            />
            <Card.Body>
              <Card.Title>Modern Closets</Card.Title>
              <Card.Text>
                Built-in storage solutions that make the most of your space,
                tailored to client needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Appointment Form */}
      <Row className="my-5">
        <Col md={8} className="mx-auto" data-aos="fade-up">
          <h3 className="text-center mb-4">Schedule an Appointment</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formInterest">
              <Form.Label>What are you interested in?</Form.Label>
              <Form.Control
                name="interest"
                as="textarea"
                rows={4}
                placeholder="Tell me about your project..."
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Preferred Date</Form.Label>
              <Form.Control name="date" type="date" required />
            </Form.Group>

            <div className="text-center">
              <Button variant="success" type="submit">
                Submit Request
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Builder;
