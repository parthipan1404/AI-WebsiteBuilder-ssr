import { Form, Button, Container, Row, Col } from "react-bootstrap";

const LoginPage = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Login submitted");
  };
  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <Row>
          <Col
            xs={12}
            md={12}
            lg={12}
            className="shadow p-5 border border-primary rounded"
          >
            <h2 className="font-color">AI-WebsiteBuilder </h2>
            <h3 className="text-center mb-4">Login</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>

              <button type="submit" className=" text-light w-100 button-css">
                Login
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
