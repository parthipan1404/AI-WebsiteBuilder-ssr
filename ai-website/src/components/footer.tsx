import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-5 text-light" style={{ backgroundColor: "#072839" }} >
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="mb-3">777Hosting</h5>
            <p>
              777Hosting proudly provides web hosting to over 2,000 customers
              with 99.95% uptime to over 8,000 websites.
            </p>
          </Col>
          <Col md={2}>
            <h6>Hosting</h6>
            <ul className="list-unstyled">
              <li>Web Hosting</li>
              <li>WordPress Hosting</li>
              <li>Managed WordPress Hosting</li>
              <li>VPS Hosting</li>
              <li>Website Builder</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Additional Services</h6>
            <ul className="list-unstyled">
              <li>Domains</li>
              <li>Website Design Services</li>
              <li>WordPress Migration</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Help & Support</h6>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Live Chat</li>
              <li>Call Us</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>Sales Inquiries</li>
              <li>Legal</li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">© 2025 777Hosting. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div>
              <FaFacebook className="mx-2" />
              <FaTwitter className="mx-2" />
              <FaInstagram className="mx-2" />
              <FaLinkedin className="mx-2" />
              <FaYoutube className="mx-2" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;