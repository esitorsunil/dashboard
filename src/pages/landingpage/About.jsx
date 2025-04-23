import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  return(
 
    <div className="about-page">
      <div className="bg-light py-5 text-center">
        <Container>
          <h1 className="display-5 fw-bold">About Our Dashboard</h1>
          <p className="lead">
            Built to simplify eCommerce management and empower business owners with intuitive tools and insights.
          </p>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h3 className="fw-bold">Our Mission</h3>
            <p>
              Our mission is to provide modern, powerful, and user-friendly dashboard tools to eCommerce businesses of all sizes.
              From analytics to inventory, we streamline everything so you can focus on growing your business.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://cdn.dribbble.com/userupload/5311377/file/original-c2ff971c349610ba556c881d117f4890.png?resize=1600x1200"
              alt="eCommerce Mission"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
        </Row>
      </Container>

      <div className="bg-light py-5">
        <Container>
          <h3 className="text-center mb-4 fw-bold">Why Choose Our Admin Dashboard</h3>
          <Row className="g-4">
            <Col md={4}>
              <Card className="text-center h-100 border-0 shadow-sm p-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-speedometer2 fs-3"></i>
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">Fast & Responsive</Card.Title>
                    <Card.Text>
                      Optimized for performance and speed with real-time updates to keep your operations smooth.
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center h-100 border-0 bg-dark text-white shadow p-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="bg-light text-dark rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-shield-lock fs-3"></i>
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">Secure & Reliable</Card.Title>
                    <Card.Text>
                      Enterprise-grade encryption and uptime. Your data is always protected and accessible.
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center h-100 border-0 bg-white shadow-lg p-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-stars fs-3"></i>
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">Feature Rich</Card.Title>
                    <Card.Text>
                      From order management to API access — everything you need in one sleek, scalable dashboard.
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <h3 className="text-center mb-4 fw-bold">Our Core Values</h3>
        <Row className="text-center">
          <Col md={4}>
            <i className="bi bi-lightbulb fs-2 text-warning"></i>
            <h5 className="mt-3">Innovation</h5>
            <p>We constantly evolve to bring the most powerful features to your fingertips.</p>
          </Col>
          <Col md={4}>
            <i className="bi bi-people fs-2 text-primary"></i>
            <h5 className="mt-3">User-Centered Design</h5>
            <p>We design for real users, solving real pain points in intuitive ways.</p>
          </Col>
          <Col md={4}>
            <i className="bi bi-award fs-2 text-success"></i>
            <h5 className="mt-3">Quality</h5>
            <p>From UX to codebase, we maintain high standards in everything we deliver.</p>
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <h3 className="text-center mb-4 fw-bold">Trusted by Modern Brands</h3>
        <Row className="justify-content-center text-center">
          <Col md={2}><img src="https://img.icons8.com/bubbles/58/flipkart.png" alt="flipkart" className="img-fluid" /></Col>
          <Col md={2}><img src="https://img.icons8.com/plasticine/58/amazon.png" alt="amazon" className="img-fluid" /></Col>
          <Col md={2}><img src="https://img.icons8.com/fluency/58/allen-career-institute.png" alt="allen-career-institute" className="img-fluid" /></Col>
          <Col md={2}><img src="https://img.icons8.com/color/58/taobao.png" alt="taobao" className="img-fluid" /></Col>
        </Row>
      </Container>

      <div className="bg-primary text-white text-center py-5">
        <Container>
          <h2 className="fw-bold mb-3">Ready to Transform Your Business?</h2>
          <p className="lead">Start managing your online store like a pro with our powerful admin dashboard.</p>
          <Link to="/login">
          <Button variant="light" size="lg">Get Started Now</Button>
          </Link>
        </Container>
      </div>

    </div>
  );
};

export default About;
