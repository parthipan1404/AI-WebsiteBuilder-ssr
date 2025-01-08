import React from 'react';

const HeroPage = () => {
  const containerStyle = {
    backgroundColor: '#DFF0E0',
    height:'600px',
    display: 'flex',
    alignitems: 'center',
    padding:'80px 0px 0px 0px'
};
  return (
    <div style={containerStyle}>
      <div className='container'>
    <div className="row ">
            <h4 className="col-12 text-center py-2">777Builder AI</h4>
            <h1 className="col-12 text-center py-2">Build your free website, and we'll host it for you!</h1>
            <p className="col-12 text-center">Start from scratch or bring your ideas to life—our AI tools make it easy.</p>
            
            
            <div className="col-4 text-center">Free Hosting</div>
            <div className="col-4 text-center">No credit card needed
            </div>
            <div className="col-4 text-center">No coding required</div>
            <div className="col-12 text-center">
            <button className="btn btn-primary mt-3" style={{background: '#4CAF50',borderRadius:'60px',border:'none',boxShadow:'-4px -4px 5px 0px rgba(0, 0, 0, 0.25098039215686274) inset',padding:'10px 40px'}}>Get StartNow</button>
            </div>
        </div>
    </div>
    </div>
  );
};

export default HeroPage;