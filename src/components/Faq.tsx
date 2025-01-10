import React from 'react';
import "../index.css";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Row, Col } from "react-bootstrap";

const Faq = () => {
  return (
    <div className='m-5'>
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <Row className="mt-4 text-center">
                <Col>
                    <h1>777Builder AI FAQs</h1>
                    <p>Common questions about our hosting services.</p>
                </Col>
            </Row>
        </Container>
        <Container >
            <Row >
                <Accordion className="m-2" style={{boxShadow: "none" }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>How do I get started with 777Builder AI services?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        It’s super easy to get started! Just sign up for free—no credit card needed. Tell us a little about your website by answering a few simple questions, and our AI will take care to set up the foundation for you. Choose a design that fits your style, tweak it as you like, and your website will be ready in no time!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="m-2" style={{boxShadow: "none" }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>What platform does 777Builder AI use, and how does it help?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        777Builder uses WordPress, a trusted platform used by millions worldwide. With AI integration, it helps you build a fast, secure, and easy-to-customize website. You get a solid foundation without the hard work, so you can focus on making it your own and getting online quickly.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="m-2" style={{boxShadow: "none" }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Is it really free to get started?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Yes! You can start with a 14 days free trial—no credit card needed. You can explore all the features and build your website and When you’re ready to go live, simply choose a paid plan to publish and share it with everyone!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="m-2" style={{boxShadow: "none" }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Do I need any technical knowledge to use it?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Not at all! It’s made for everyone. Just answer a few simple questions, and we’ll guide you step by step to get your website ready.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Row>
        </Container>
    </div>
  );
};

export default Faq;
