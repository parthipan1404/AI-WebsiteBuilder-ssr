import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container,Row,Col } from "react-bootstrap";

const LoginPage = () => {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/submit",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setShowForm(response.data.showForm);
      console.log(response.data);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  return (
    <>
    {showForm ? (
      <Container className="d-flex vh-100">
      <Row className="m-auto align-self-center w-100">
        <Col xs={12} md={6} className="mx-auto">
          <h1 className="text-center mb-4">Form Submission</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    ): (
      <div className="text-center mt-5">
        <h2>Form SucessFully Submitted</h2>
      </div>
    )}
    </>
    
    
  );
};

export default LoginPage;
