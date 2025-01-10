import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AISection = () => {
  return (
    <Container className="py-5">
      <Row className="text-center">
        <Col md={2}></Col>
        <Col md={4}>
          <Card
            className="p-3 mb-5  rounded hover-card "
            style={{
              background:
                "linear-gradient(135deg, #4CAF50 0%,rgb(180, 153, 255) 100%)",
              height: "400px",
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
               border:"none"
            }}
          >
            <Card.Body>
              <Card.Title>2000+ AI FUNNEL TEMPLATES</Card.Title>
              <Card.Text>
                Customize Sales Funnel Templates
                <br /> using AI
              </Card.Text>
              <ul className="list-unstyled text-start">
                <li>🎯 Capture Lead</li>
                <li>📈 Sales Process</li>
                <li>🛒 Order / Upsell</li>
                <li>🚀 Ascend</li>
              </ul>
              <Button  style={{
                background: "rgb(0, 0, 0)",
                borderRadius: "60px",
                border: "none",
                boxShadow: "-4px -4px 5px 0px rgba(0, 0, 0, 0.25) inset",
                padding: "8px 30px",
              }}>
               Customize using AI
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="p-3 mb-5 rounded hover-card"
            style={{
              background:
                "linear-gradient(180deg,rgba(255,255,255,0.6)0%,rgba(255,255,255,0.1",
              height: "400px",
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              border:"none"
            }}
          >
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
              <Button  style={{
                background: "#4CAF50",
                borderRadius: "60px",
                border: "none",
                boxShadow: "-4px -4px 5px 0px rgba(0, 0, 0, 0.25) inset",
                padding: "8px 30px",
              }}>
                Select a Template
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};

export default AISection;
