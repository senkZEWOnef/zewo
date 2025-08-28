import { useState } from "react";
import { supabase } from "../../supabase";
import { Container, Form, Button, Alert } from "react-bootstrap";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Sign-up successful! Please check your email to confirm.");
      }
    } catch (err) {
      console.error("Sign-up error:", err);
      setMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </Form>
      {message && <Alert className="mt-3">{message}</Alert>}
    </Container>
  );
};

export default SignUp;
