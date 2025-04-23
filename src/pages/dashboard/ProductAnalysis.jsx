// src/pages/analysis/ProductAnalysis.jsx

import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Card, Row, Col } from 'react-bootstrap';
import 'chart.js/auto';

import {
  topProductsData,
  stockCategoryData,
  monthlyRevenueData,
  productSummary,
} from '../../Data/productAnalysisData.js';

const ProductAnalysis = () => {
  return (
    <div className="product-analysis">
      <h3 className="mb-3 fw-semibold text-dark">Product Analysis</h3>

      <Row className="g-3 mb-3">
        <Col md={4}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <h6 className="text-muted mb-1">Total Products</h6>
              <h4 className="fw-bold">{productSummary.total.toLocaleString()}</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <h6 className="text-muted mb-1">Out of Stock</h6>
              <h4 className="fw-bold text-danger">{productSummary.outOfStock}</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <h6 className="text-muted mb-1">Monthly Revenue</h6>
              <h4 className="fw-bold text-success">
                ${productSummary.monthlyRevenue.toLocaleString()}
              </h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="mb-3 fs-5">Top Products by Sales</Card.Title>
              <Bar data={topProductsData} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="mb-3 fs-5">Stock by Category</Card.Title>
              <Pie data={stockCategoryData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-3">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="mb-3 fs-5">Monthly Revenue Trend</Card.Title>
              <Line data={monthlyRevenueData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductAnalysis;
