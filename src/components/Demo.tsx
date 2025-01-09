import "../index.css";
import { Container, Row, Col } from "react-bootstrap";
const Demo = () => {
 return( 
 <div className="">
  <Container>
    <Row className="mt-4 ">
      <Col md={8} className="d-flex flex-column justify-content-center">
        <h1>Host on us or on WordPress or Export to Code!</h1>
        <p>
          You can publish the project to your own domain, or publish in WordPress.
          We help you grow your business and remove all hassles involved with
          hosting a website.
        </p>
      </Col>
      <Col md={4} className="d-flex justify-content-center align-items-center">
        <img
          src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1711950645/static/group-48102239html-wordpresssvg_1711950644_12887.svg"
          alt="sl"
          className="img-fluid"
        />
      </Col>
    </Row>
    <Row className="mt-5">
      <Col className="d-flex justify-content-center align-items-center">
        <img
          src="https://777hosting.co.uk/wp-content/uploads/2024/10/Group-458-2.svg"
          alt="Dashboard"
          className="img-fluid"
        />
      </Col>
    </Row>
    <Row className="m-5 ">
      <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
      <h1>Don't like what you see? Regenerate with AI website creator</h1>
        <p>
          Bring life to your idea the way you want it. If you don't like what you see, you can regenerate a design any number of times until you find something perfect for you.
        </p>
        <button className="btn btn-primary mt-3" style={{background: '#4CAF50',borderRadius:'60px',border:'none',boxShadow:'-4px -4px 5px 0px rgba(0, 0, 0, 0.25098039215686274) inset',padding:'10px 40px'}}>Build your website with AI</button>
      </Col>
      <Col md={6}>
      <img
          src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1680966451/static/screenshot-2023-04-08-at-83614-pmpng_1680966448_17105.png"
          alt="ex1"
          className="img-fluid"
        />
      </Col>
    </Row>
    <Row className="m-5 ">
      <Col md={6}>
      <img
          src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1680967650/static/screenshot-2023-04-08-at-85711-pmpng_1680967648_11656.png"
          alt="ex2"
          className="img-fluid"
        />
      </Col>
      <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
      <h1>Use AI Magic to create your flawless marketing copy</h1>
        <p>
        Don't like the content or a particular heading? Want to make it more SEO friendly? You can use the AI Magic feature to turn your bland copy to something beautiful.
        </p>
        <button className="btn btn-primary mt-3" style={{background: '#4CAF50',borderRadius:'60px',border:'none',boxShadow:'-4px -4px 5px 0px rgba(0, 0, 0, 0.25098039215686274) inset',padding:'10px 40px'}}>Build your website with AI</button>
      </Col>
    </Row>
  </Container>
</div>);
};

export default Demo;
