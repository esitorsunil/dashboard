import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
 
  return (
    <div className="home-landing">
      <div className="bg-dark text-white py-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold">Next-Gen eCommerce Admin Dashboard</h1>

          <p className="lead mt-3">
            Manage your orders, customers, inventory, and analytics — all in one intuitive dashboard.
          </p>
          <Link to="/login">
          <Button variant="primary" size="lg" className="mt-3">
            Get Started
          </Button>
          </Link>
        </Container>
  
      </div>

      <Container className="py-5">
  <h2 className="text-center mb-4">Powerful Features</h2>
  <Row className="g-4">
    <Col md={4}>
      <Card
        className="text-center shadow-sm h-100 border-0 p-3"
        onMouseEnter={(e) => e.currentTarget.classList.add('shadow-lg')}
        onMouseLeave={(e) => e.currentTarget.classList.remove('shadow-lg')}
      >
        <div className="mb-3 text-primary">
          <i className="bi bi-graph-up-arrow fs-1"></i>
        </div>
        <Card.Body>
          <Card.Title>Real-Time Analytics</Card.Title>
          <Card.Text>
            Stay on top of your store's performance with real-time sales and traffic data.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col md={4}>
      <Card
        className="text-center shadow-sm h-100 border-0 p-3"
        onMouseEnter={(e) => e.currentTarget.classList.add('shadow-lg')}
        onMouseLeave={(e) => e.currentTarget.classList.remove('shadow-lg')}
      >
        <div className="mb-3 text-success">
          <i className="bi bi-person-lines-fill fs-1"></i>
        </div>
        <Card.Body>
          <Card.Title>Customer Management</Card.Title>
          <Card.Text>
            View and manage all your customers with filters, insights, and engagement tools.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col md={4}>
      <Card
        className="text-center shadow-sm h-100 border-0 p-3"
        onMouseEnter={(e) => e.currentTarget.classList.add('shadow-lg')}
        onMouseLeave={(e) => e.currentTarget.classList.remove('shadow-lg')}
      >
        <div className="mb-3 text-warning">
          <i className="bi bi-box-seam fs-1"></i>
        </div>
        <Card.Body>
          <Card.Title>Product & Inventory</Card.Title>
          <Card.Text>
            Add, edit, or remove products easily. Track inventory levels and restock alerts.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>

      <div className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h3 className="mb-3">Smart Insights, Smarter Decisions</h3>
              <p>
                Our analytics dashboard helps you identify top-selling products, understand customer behavior,
                and optimize your sales funnel with beautifully visualized metrics.
              </p>
              <Button variant="outline-primary">Explore Analytics</Button>
            </Col>
            <Col md={6}>
              <img
              src="/images/dashboardlayout.webp"
                alt="Analytics Overview"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-primary text-white text-center py-5">
        <Container>
          <h2 className="fw-bold">Ready to Supercharge Your Store?</h2>
          <p className="lead">Start your journey with our modern admin tools today.</p>
          <Button variant="light" size="lg">
            Sign Up Free
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
