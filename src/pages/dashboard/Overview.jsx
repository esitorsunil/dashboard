import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, Row, Col } from 'react-bootstrap';
import 'chart.js/auto';

import {
  salesData,
  pageVisitsData,
  countryVisitsData,
  topAuthorEarnings,
  globalRank,
  notifications,
} from '../../Data/overviewData.js';

const Overview = () => {
  return (
    <div className="overview">
      <h3 className="mb-3 fw-semibold text-dark">Dashboard Overview</h3>

      <Row className="g-3 mb-3">
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="mb-3 fs-5">Weekly Sales</Card.Title>
              <Bar data={salesData} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="mb-3 fs-5">Page Visits</Card.Title>
              <Pie data={pageVisitsData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="mb-3 fs-5">Visits by Country</Card.Title>
              <Bar data={countryVisitsData} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="mb-3 fs-5">Top Author Earnings</Card.Title>
              <h4 className="text-success fw-bold">${topAuthorEarnings.amount.toLocaleString()}</h4>
              <p className="text-muted mb-0">in {topAuthorEarnings.month}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-3">
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="mb-3 fs-5">Global Rank</Card.Title>
              <h4 className="text-primary fw-bold">{globalRank.rank}</h4>
              <p className="text-muted mb-0">{globalRank.period}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="mb-3 fs-5">Notifications</Card.Title>
              <ul className="mb-0">
                {notifications.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Overview;