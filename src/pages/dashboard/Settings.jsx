import React, { useState } from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

const Settings = () => {
  const [formData, setFormData] = useState({
    name: "Admin User",
    email: "admin@example.com",
    password: "",
    darkMode: false,
    notifications: true,
    language: "en", // default language
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved!");
  };

  return (
    <div>
      <h3 className="mb-4 fw-semibold text-dark">Settings</h3>

      <Form onSubmit={handleSubmit}>
        <Row className="g-4 mb-4">
          {/* Profile Settings Card */}
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="mb-3 fs-5">Profile Settings</Card.Title>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Leave blank to keep current password"
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          {/* Preferences Card */}
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="mb-3 fs-5">Preferences</Card.Title>

                {/* Dark Mode Toggle */}
                <Form.Check
                  type="switch"
                  id="darkModeSwitch"
                  label="Enable Dark Mode"
                  name="darkMode"
                  checked={formData.darkMode}
                  onChange={handleChange}
                />

                {/* Language Selector */}
                <Form.Group className="mt-3">
                  <Form.Label>Language</Form.Label>
                  <Form.Select
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </Form.Select>
                </Form.Group>

                {/* Notifications Toggle */}
                <Form.Check
                  type="switch"
                  id="notificationsSwitch"
                  label="Enable Notifications"
                  name="notifications"
                  checked={formData.notifications}
                  onChange={handleChange}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Account Security Card */}
        <Row className="g-4 mb-4">
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="mb-3 fs-5">Account Security</Card.Title>
                <Form.Group className="mb-3">
                  <Form.Label>Two-Factor Authentication</Form.Label>
                  <Form.Check
                    type="checkbox"
                    label="Enable 2FA"
                    name="twoFactor"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Change Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="newPassword"
                    placeholder="Enter a new password"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          {/* Account Deactivation Card */}
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="mb-3 fs-5 text-danger">Deactivate Account</Card.Title>
                <p className="text-muted">Once deactivated, your account and data will be lost permanently.</p>
                <Button variant="danger">Deactivate Account</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Save Changes Button */}
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default Settings;
