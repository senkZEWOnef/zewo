import { useState } from "react";
import { supabase } from "../../supabase";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "../../styles/Auth.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match. Please try again.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Account created successfully! Please check your email to confirm your account.");
      }
    } catch (err) {
      console.error("Sign-up error:", err);
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
            <i className="bi bi-person-plus-fill"></i>
            Create Account
          </div>
          <h1 className="auth-title">Join zeWOWorld</h1>
          <p className="auth-subtitle">
            Create your account to access exclusive content and admin features.
          </p>
        </div>

        <Form onSubmit={handleSignUp} className={`auth-form ${loading ? 'auth-loading' : ''}`}>
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
                placeholder="Create a strong password"
                disabled={loading}
                minLength={6}
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

          <Form.Group className="auth-form-group">
            <Form.Label className="auth-label">
              <i className="bi bi-lock-fill"></i>
              Confirm Password
            </Form.Label>
            <div className="password-input-group">
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="auth-input"
                placeholder="Confirm your password"
                disabled={loading}
                minLength={6}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={loading}
              >
                <i className={`bi bi-eye${showConfirmPassword ? '-slash' : ''}`}></i>
              </button>
            </div>
          </Form.Group>

          <Button
            type="submit"
            className="auth-submit-btn"
            disabled={loading || password !== confirmPassword}
          >
            {loading ? (
              <>
                <div className="auth-spinner"></div>
                Creating Account...
              </>
            ) : (
              <>
                <i className="bi bi-person-plus me-2"></i>
                Create Account
              </>
            )}
          </Button>
        </Form>

        {message && (
          <Alert 
            className={`auth-alert ${
              message.includes('successful') ? 'success' : 
              message.includes('match') || message.includes('characters') ? 'warning' : 'error'
            }`}
          >
            <i className={`bi bi-${
              message.includes('successful') ? 'check-circle' : 
              message.includes('match') || message.includes('characters') ? 'exclamation-triangle' :
              'exclamation-triangle'
            } me-2`}></i>
            {message}
          </Alert>
        )}

        <div className="auth-navigation">
          <p className="auth-nav-text">Already have an account?</p>
          <Link to="/login" className="auth-nav-link">
            <i className="bi bi-box-arrow-in-right"></i>
            Sign In
          </Link>
        </div>

        <div className="security-features">
          <div className="security-title">
            <i className="bi bi-shield-check"></i>
            Account Security
          </div>
          <ul className="security-list">
            <li className="security-item">
              <i className="bi bi-check2 security-icon"></i>
              Secure password encryption
            </li>
            <li className="security-item">
              <i className="bi bi-check2 security-icon"></i>
              Email verification required
            </li>
            <li className="security-item">
              <i className="bi bi-check2 security-icon"></i>
              Privacy protection guaranteed
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
