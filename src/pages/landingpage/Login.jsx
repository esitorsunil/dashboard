import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  Alert,
} from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const redirectPath = queryParams.get('redirect') || '/dashboard';

  const allowedUsers = [
    { email: 'sunilrio23@gmail.com', password: 'sunil123' },
    { email: 'pranathi@gmail.com', password: 'Pranathi123' },
  ];

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidUser = allowedUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (isValidUser) {
      localStorage.setItem('authToken', 'mock_token');
      localStorage.setItem('user', JSON.stringify({ email }));

      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      navigate(redirectPath, { replace: true });
    } else {
      setErrorMsg('Invalid email or password.');
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow-sm p-4 border-0 rounded-4">
              <div className="text-center mb-4">
                <h3 className="fw-bold text-primary">Admin Login</h3>
                <p className="text-muted small">Sign in to your dashboard</p>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-3"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Password</Form.Label>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="rounded-3"
                  />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Show password"
                    checked={showPassword}
                    onChange={(e) => setShowPassword(e.target.checked)}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                </div>

                {errorMsg && (
                  <Alert variant="danger" className="py-2 px-3 small rounded-3">
                    {errorMsg}
                  </Alert>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-100 mt-2 rounded-3 fw-semibold"
                >
                  Login
                </Button>
              </Form>
            </Card>
            <div className="text-center mt-3 text-muted small">
              &copy; {new Date().getFullYear()} Admin Dashboard | All rights reserved
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
