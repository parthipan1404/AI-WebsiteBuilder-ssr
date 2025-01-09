import "../index.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AISection from "./AIsection";
const HeroPage = () => {
  return (
    <div className="container_dev">
      <Container>
        <Row className="text-center">
          <Col xs={12} className="mt-5">
            <h4 className="py-2">777Builder AI</h4>
            <h1 className="py-2">Build your free website, and we'll host it for you!</h1>
            <p>Start from scratch or bring your ideas to life—our AI tools make it easy.</p>
          </Col>
        </Row>
        <Row className="text-center my-3">
          <Col xs={12} md={5} className="text-md-end">
            Free Hosting
          </Col>
          <Col xs={12} md={2}>
            No credit card needed
          </Col>
          <Col xs={12} md={5} className="text-md-start">
            No coding required
          </Col>
        </Row>
        <Row className="text-center my-3">
          <Col>
            <Button
              variant="primary"
              style={{
                background: "#4CAF50",
                borderRadius: "60px",
                border: "none",
                boxShadow:
                  "-4px -4px 5px 0px rgba(0, 0, 0, 0.25) inset",
                padding: "10px 40px",
              }}
            >
              Generate Website
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center px-5 py-3 min_with">
            <h4>
              Get access to our AI templates at
              <br />
              Zero Cost—no design skill or copywriting experience required!
            </h4>
          </Col>
        </Row>
        <AISection />
      </Container>
    </div>
  );
};

export default HeroPage;
