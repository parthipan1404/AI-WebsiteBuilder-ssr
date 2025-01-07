import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroPage = () => {
  return (
    <div>
    <div className=''>
        <div className="row">
            <div className="col-12 m-5">
            <h4 className="m-2">777Builder AI</h4>
            <h1 className="m-4">Build your free website, and we'll host it for you!</h1>
            <p className="m-2">Start from scratch or bring your ideas to life—our AI tools make it easy.</p>
            </div>
            <div className='d-flex justify-content-center'>
            <div className="col-3 ">Free Hosting</div>
            <div className="col-3 ">No credit card needed
            </div>
            <div className="col-3">No coding required</div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default HeroPage;