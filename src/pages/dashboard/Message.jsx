// pages/messages/Messages.jsx
import React, { useState } from "react";
import { Card, ListGroup, Badge, Row, Col, Form, Button } from "react-bootstrap";
import messagesData from "../../Data/messageData.js";

const Messages = () => {
  const [messages] = useState(messagesData);

  return (
    <div>
      <h3 className="mb-4 fw-semibold text-dark">Messages</h3>

      <Row className="g-4">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Header className="bg-white fw-semibold">Inbox</Card.Header>
            <ListGroup variant="flush">
              {messages.map((msg) => (
                <ListGroup.Item
                  key={msg.id}
                  className={`d-flex justify-content-between align-items-start ${
                    msg.unread ? "fw-semibold" : ""
                  }`}
                >
                  <div>
                    <div className="mb-1">
                      <span className="text-dark">{msg.sender}</span>{" "}
                      <small className="text-muted">({msg.email})</small>
                    </div>
                    <div>
                      <strong>{msg.subject}:</strong>{" "}
                      <span className="text-muted">{msg.content.slice(0, 50)}...</span>
                    </div>
                  </div>
                  <div className="text-end">
                    <Badge bg={msg.unread ? "primary" : "secondary"} pill>
                      {msg.time}
                    </Badge>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Header className="bg-white fw-semibold">Quick Reply</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="replyTo">
                  <Form.Label>Reply To</Form.Label>
                  <Form.Control type="email" placeholder="recipient@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="replyMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Messages;
