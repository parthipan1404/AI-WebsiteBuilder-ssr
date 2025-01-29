import "../index.css";
import { Container, Row, Col } from "react-bootstrap";
import svgImage from "../assets/s1.svg";
import dasboardimg from "../assets/s2.svg";
import img2 from "../assets/s3.svg";
import img3 from "../assets/s4.svg";
const Demo = () => {
  return (
    <div className="">
      <Container>
        <Row className="mt-4 ">
          <Col
            md={8}
            xs={12}
            className="d-flex flex-column justify-content-center"
          >
            <h1>Host on us or on WordPress or Export to Code!</h1>
            <p>
              You can publish the project to your own domain, or publish in
              WordPress. We help you grow your business and remove all hassles
              involved with hosting a website.
            </p>
          </Col>
          <Col
            md={4}
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={svgImage} alt="sl" className="img-fluid" />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={dasboardimg} alt="Dashboard" className="img-fluid" />
          </Col>
        </Row>
        <Row className="m-3">
          <Col md={12}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1>Unlock more features</h1>
              <p>
                Whatever your business is, we have exclusive features that fit
                your needs.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="m-3  ">
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div
              className="card"
              style={{
                alignSelf: "flex-start",
                border: "none",
              }}
            >
              <Row>
                <Col md={1} xs={1} className="icon_value">
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
                <Col md={11} xs={11}>
                  <div className="card-body ">
                    <h5 className="card-title">Website editor</h5>
                    <p className="card-text">
                      Professional CMS with dozens of optimizations and
                      integrations for lightning-fast design speeds.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className="card"
              style={{
                alignSelf: "flex-start",
                border: "none",
              }}
            >
              <Row>
                <Col md={1} xs={1} className="icon_value">
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
                <Col md={11} xs={11}>
                  <div className="card-body ">
                    <h5 className="card-title">Section presets</h5>
                    <p className="card-text">
                      Use over 120 prebuilt responsive structures and variants
                      to save valuable time.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className="card"
              style={{
                alignSelf: "flex-start",
                border: "none",
              }}
            >
              <Row>
                <Col md={1} xs={1} className="icon_value">
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
                <Col md={11} xs={11}>
                  <div className="card-body ">
                    <h5 className="card-title">Template Pool</h5>
                    <p className="card-text">
                      Quickly drag-and-drop 140+ template segments. Edit as a
                      template or individually inside the CMS.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div style={{ alignSelf: "flex-start", width: "100%" }}>
              <button className="mt-3 button-css text-light">
                Get Started Now
              </button>
            </div>
          </Col>
          <Col md={6}>
            <img src={img2} alt="ex1" className="img-fluid" />
          </Col>
        </Row>
        <Row className="m-3 ">
          <Col md={6}>
            <img src={img3} alt="ex2" className="img-fluid" />
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div
              className="card"
              style={{
                alignSelf: "flex-start",
                border: "none",
              }}
            >
              <Row>
                <Col md={1} xs={1} className="icon_value">
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
                <Col md={11} xs={11}>
                  <div className="card-body ">
                    <h5 className="card-title">Responsive design features</h5>
                    <p className="card-text">
                      Every template displays perfectly on every device—from
                      desktops to mobile—and is fully customizable.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className="card"
              style={{
                alignSelf: "flex-start",
                border: "none",
              }}
            >
              <Row>
                <Col md={1} xs={1} className="icon_value">
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
                <Col md={11} xs={11}>
                  <div className="card-body ">
                    <h5 className="card-title">Keyboard shortcuts</h5>
                    <p className="card-text">
                      Save minutes or even hours of each design with dozens of
                      intuitive built-in keyboard shortcuts.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className="card"
              style={{
                alignSelf: "flex-start",
                border: "none",
              }}
            >
              <Row>
                <Col md={1} xs={1} className="icon_value">
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
                <Col md={11} xs={11}>
                  <div className="card-body ">
                    <h5 className="card-title">Contact data management</h5>
                    <p className="card-text">
                      Manage and update contact information across the
                      site—headers, footers, “Contact Us” page—with the click of
                      a button.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div style={{ alignSelf: "flex-start", width: "100%" }}>
              <button className="button-css mt-3 text-light">
                Get Started Now
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Demo;
