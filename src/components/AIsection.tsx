import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AISection = () => {
  return (
    <Container className="py-5">
      <Row className="text-center">
        <Col md={2}></Col>
        <Col md={4}>
          <Card className="p-3 mb-5  rounded hover-card ">
            <Card.Body>
              <Card.Title>2000+ AI FUNNEL TEMPLATES</Card.Title>
              <Card.Text>
                Customize Sales Funnel Templates<br/> using AI
              </Card.Text>
              <ul className="list-unstyled text-start">
                <li>🎯 Capture Lead</li>
                <li>📈 Sales Process</li>
                <li>🛒 Order / Upsell</li>
                <li>🚀 Ascend</li>
              </ul>
              <Button variant="primary">Select a Funnel & Customize using AI</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 mb-5 rounded hover-card">
            <Card.Body>
              <Card.Title>5000+ AI TEMPLATES</Card.Title>
              <Card.Text>
                Customize Website/Landing Page Templates using AI
              </Card.Text>
              <ul className="list-unstyled text-start">
                <li>📄 About Us</li>
                <li>📚 Services</li>
                <li>📰 Latest Articles</li>
                <li>🚩 Call-to-Action (CTA)</li>
              </ul>
              <Button variant="primary">Select a Template & Customize using AI</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};

export default AISection;