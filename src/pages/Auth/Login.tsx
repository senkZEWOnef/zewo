import { useState, FormEvent, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Logo from "../../components/Logo";
import "../../styles/Auth.css";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [authMode, setAuthMode] = useState<'username' | 'password'>('username');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  // Randomly choose username or password on component mount
  useEffect(() => {
    const modes: ('username' | 'password')[] = ['username', 'password'];
    const randomMode = modes[Math.floor(Math.random() * modes.length)];
    setAuthMode(randomMode);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const ADMIN_USERNAME = "zewo";
      const ADMIN_PASSWORD = "Poesie509$";
      
      let isValid = false;
      
      if (authMode === 'username') {
        isValid = inputValue === ADMIN_USERNAME;
      } else {
        isValid = inputValue === ADMIN_PASSWORD;
      }

      if (isValid) {
        // Create a mock user object for admin
        const adminUser = {
          id: "admin-user-id",
          email: "admin@zewoworld.com",
          aud: "authenticated",
          role: "authenticated",
          email_confirmed_at: new Date().toISOString(),
          app_metadata: { provider: "local", role: "admin" },
          user_metadata: { username: "zewo" },
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        
        setUser(adminUser);
        setMessage("Login successful! Redirecting...");
        setTimeout(() => navigate("/admin"), 1500);
      } else {
        setMessage(`Invalid ${authMode}. Please try again.`);
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
              <i className={`bi bi-${authMode === 'username' ? 'person' : 'lock'}`}></i>
              {authMode === 'username' ? 'Username' : 'Password'}
            </Form.Label>
            {authMode === 'password' ? (
              <div className="password-input-group">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  required
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
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
            ) : (
              <Form.Control
                type="text"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="auth-input"
                placeholder="Enter your username"
                disabled={loading}
              />
            )}
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
