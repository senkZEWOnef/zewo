import { useState, FormEvent } from "react";
import { supabase } from "../../supabase";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "../../styles/Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Login successful! Redirecting...");
        setTimeout(() => navigate("/admin"), 1500);
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <Link to="/" className="back-to-home">
        <i className="bi bi-arrow-left"></i>
        Back to Home
      </Link>
      
      <div className="auth-card" data-aos="fade-up">
        <div className="auth-header">
          <Link to="/" className="auth-brand d-flex align-items-center justify-content-center">
            <Logo variant="dark" size="md" />
          </Link>
          <div className="auth-badge">
            <i className="bi bi-shield-lock"></i>
            Secure Login
          </div>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">
            Sign in to access your admin dashboard and manage your content.
          </p>
        </div>

        <Form onSubmit={handleSubmit} className={`auth-form ${loading ? 'auth-loading' : ''}`}>
          <Form.Group className="auth-form-group">
            <Form.Label className="auth-label">
              <i className="bi bi-envelope"></i>
              Email Address
            </Form.Label>
            <Form.Control
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
              placeholder="Enter your email address"
              disabled={loading}
            />
          </Form.Group>

          <Form.Group className="auth-form-group">
            <Form.Label className="auth-label">
              <i className="bi bi-lock"></i>
              Password
            </Form.Label>
            <div className="password-input-group">
              <Form.Control
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
                placeholder="Enter your password"
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
              >
                <i className={`bi bi-eye${showPassword ? '-slash' : ''}`}></i>
              </button>
            </div>
          </Form.Group>

          <Button
            type="submit"
            className="auth-submit-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="auth-spinner"></div>
                Signing In...
              </>
            ) : (
              <>
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Sign In
              </>
            )}
          </Button>
        </Form>

        {message && (
          <Alert 
            className={`auth-alert ${
              message.includes('successful') ? 'success' : 'error'
            }`}
          >
            <i className={`bi bi-${
              message.includes('successful') ? 'check-circle' : 'exclamation-triangle'
            } me-2`}></i>
            {message}
          </Alert>
        )}

        <div className="auth-navigation">
          <p className="auth-nav-text">Don't have an account?</p>
          <Link to="/signup" className="auth-nav-link">
            <i className="bi bi-person-plus"></i>
            Create Account
          </Link>
        </div>

        <div className="security-features">
          <div className="security-title">
            <i className="bi bi-shield-check"></i>
            Security Features
          </div>
          <ul className="security-list">
            <li className="security-item">
              <i className="bi bi-check2 security-icon"></i>
              End-to-end encryption
            </li>
            <li className="security-item">
              <i className="bi bi-check2 security-icon"></i>
              Secure session management
            </li>
            <li className="security-item">
              <i className="bi bi-check2 security-icon"></i>
              Multi-factor authentication ready
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
