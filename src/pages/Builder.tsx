import { supabase } from "../supabase";
import { FormEvent } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import home from "../assets/home.jpg";

const Builder = () => {
  return (
    <Container className="py-5">
      {/* Title Section */}
      <section className="text-center mb-5">
        <h1 style={{ fontFamily: "Cormorant Garamond" }}>
          Cabinetry & Custom Builds
        </h1>
        <p>
          From kitchens to custom furniture, I build it all from scratch in my
          own workshop.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="mb-5">
        <h2 style={{ fontFamily: "Cormorant Garamond" }}>Gallery</h2>
        <Row className="mt-4">
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card className="border-0 shadow-sm">
                <Card.Img variant="top" src={home} />
                <Card.Body>
                  <Card.Text>Custom Build #{idx + 1}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Job Request Form */}
      <section className="mb-5">
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Request a Project
        </h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form
              onSubmit={async (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();

                const form = e.currentTarget;
                const name = (
                  form.elements.namedItem("name") as HTMLInputElement
                ).value;
                const email = (
                  form.elements.namedItem("email") as HTMLInputElement
                ).value;
                const request = (
                  form.elements.namedItem("request") as HTMLInputElement
                ).value;

                const { error } = await supabase
                  .from("build_requests")
                  .insert([{ name, email, request }]);

                if (error) {
                  alert("Something went wrong. Please try again.");
                  console.error(error);
                } else {
                  alert("Your request has been submitted!");
                  form.reset();
                }
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>What are you looking to build?</Form.Label>
                <Form.Control name="request" as="textarea" rows={3} required />
              </Form.Group>
              <Button variant="dark" type="submit">
                Send Request
              </Button>
            </Form>
          </Col>
        </Row>
      </section>

      {/* For Sale Section */}
      <section>
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Pieces for Sale
        </h2>
        <Row className="justify-content-center">
          {[
            { title: "Walnut Bench", price: "$450" },
            { title: "Floating Vanity", price: "$750" },
          ].map((item, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card className="border-0 shadow-sm text-center">
                <Card.Img variant="top" src={home} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <p>{item.price}</p>
                  <Button variant="dark">Inquire</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Builder;
