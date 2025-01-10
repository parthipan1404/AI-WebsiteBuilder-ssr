import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const AIWebsitePromo = () => {
  return (
    <div
      style={{
        background: "#4CAF50", // Green background
        padding: "40px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <Container>
        <Row className="d-flex justify-content-center">
          <Col
            md={8}
            style={{
              background: "#fff", // White box
              borderRadius: "16px",
              padding: "40px",
              color: "#333", // Dark text
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
              Would you like to try our AI Website Maker for free?
            </h2>
            <p style={{ fontSize: "18px", marginBottom: "30px" }}>
              CodeDesign is your go-to AI website maker! Whether you're new here, or back to see what's up, we’ll have you running and ready to do your best work in minutes.
            </p>
            <Button
              style={{
                backgroundColor: "#4CAF50",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
              }}
            >
              ✨ Create your website with AI
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AIWebsitePromo;
