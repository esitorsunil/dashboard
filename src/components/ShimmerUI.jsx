// src/components/SkeletonLoader.jsx
import React from 'react';
import { Card, Row, Col, Placeholder } from 'react-bootstrap';

const SkeletonLoader = () => (
  <Row className="g-4">
    <Col md={4}>
      <Card className="shadow-sm text-center">
        <Card.Body>
          <Placeholder as="div" animation="wave" className="rounded-circle mb-3" style={{ width: '100px', height: '100px' }} />
          <Placeholder as="p" animation="wave" className="fw-bold" style={{ width: '60%' }} />
          <Placeholder as="p" animation="wave" style={{ width: '80%' }} />
          <Placeholder as="span" animation="wave" className="mb-2" style={{ width: '50%' }} />
        </Card.Body>
      </Card>
    </Col>
    
    <Col md={8}>
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title className="mb-3 fs-5">
            <Placeholder as="span" animation="wave" style={{ width: '40%' }} />
          </Card.Title>
          <Placeholder as="p" animation="wave" style={{ width: '90%' }} />
          <Placeholder as="p" animation="wave" style={{ width: '80%' }} />
          <Placeholder as="p" animation="wave" style={{ width: '70%' }} />
        </Card.Body>
      </Card>
      <Row className="g-3">
        <Col sm={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted"><Placeholder as="span" animation="wave" style={{ width: '60%' }} /></h6>
              <Placeholder as="h4" animation="wave" style={{ width: '80%' }} />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted"><Placeholder as="span" animation="wave" style={{ width: '60%' }} /></h6>
              <Placeholder as="h4" animation="wave" style={{ width: '80%' }} />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted"><Placeholder as="span" animation="wave" style={{ width: '60%' }} /></h6>
              <Placeholder as="h4" animation="wave" style={{ width: '80%' }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default SkeletonLoader;
