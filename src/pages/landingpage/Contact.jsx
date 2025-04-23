import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (

    <div className="contact-page">

      <div className="bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-5 fw-bold">Get in Touch</h1>
          <p className="lead">Need help or have questions? We’re here to assist you 24/7.</p>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="g-5">
          <Col md={6}>
            <h3 className="fw-bold mb-4">Send Us a Message</h3>
            <Card className="p-4 shadow-sm border-0">

              {submitted && (
                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                  Thank you! Your message has been received. We'll get back to you shortly.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Message subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Submit Message
                </Button>
              </Form>
            </Card>
          </Col>

          <Col md={6}>
            <h3 className="fw-bold mb-4">Contact Information</h3>
            <Card className="p-4 shadow-sm border-0">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                  <strong>Address:</strong> 2 Pranathi Software Ptv. Ltd, White House, Begumpet
                </li>
                <li className="mb-3">
                  <i className="bi bi-envelope-fill text-primary me-2"></i>
                  <strong>Email:</strong> support@pranadmin.com
                </li>
                <li className="mb-3">
                  <i className="bi bi-telephone-fill text-success me-2"></i>
                  <strong>Phone:</strong> +44 80 107 4090
                </li>
                <li>
                  <i className="bi bi-clock-fill text-warning me-2"></i>
                  <strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="bg-light py-5 text-center">
        <Container>
          <h4 className="fw-bold mb-3">Need Immediate Help?</h4>
          <p className="lead">Our support team is available 24/7 to assist you with any issues.</p>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
