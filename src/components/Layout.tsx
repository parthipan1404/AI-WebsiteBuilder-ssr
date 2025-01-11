import "../index.css";
import myImage from '../assets/Group-761.png';
import { Container, Row, Col } from "react-bootstrap";
const Layout = () => {
  return (
    <div className="imge-layout">
      <Container>
        <Row>
          <Col md={6} className="mt-3">
            <img
              src={myImage}
              alt="77hosting"
              className="img-fluid"
              style={{ height: "657px", width: "417px" }}
            />
          </Col>
          <Col md={6} className="mt-3">
            <h1>Simple Three Steps</h1>
            <h1>To Your Online Success</h1>
            <Row>
              <Col md={12}>
                <div
                  className="card"
                  style={{ width: "32rem", border: "none" }}
                >
                  <Row>
                    <Col md={1} className="icon_value">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                      </svg>
                    </Col>
                    <Col md={11}>
                      <div className="card-body">
                        <h5 className="card-title">Free Registration</h5>
                        <p className="card-text">
                          Start by signing up with 777Builder, completely free
                          no credit card needed.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={12} className="my-4">
                <div
                  className="card"
                  style={{ width: "32rem", border: "none" }}
                >
                  <Row>
                    <Col md={1} className="icon_value">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                      </svg>
                    </Col>
                    <Col md={11}>
                      <div className="card-body">
                        <h5 className="card-title">Answer few questions</h5>
                        <p className="card-text">
                          Answer few simple questions, In minutes, our AI will
                          create a website tailored to your ideas and goals.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={12}>
                <div
                  className="card"
                  style={{ width: "32rem", border: "none" }}
                >
                  <Row>
                    <Col md={1} className="icon_value">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                      </svg>
                    </Col>
                    <Col md={11}>
                      <div className="card-body">
                        <h5 className="card-title">Publish your website</h5>
                        <p className="card-text">
                          Once your website is ready, take a look, review the
                          design or content as you like, and publish it with
                          just one click!
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
