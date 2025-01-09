import "../index.css";
const HeroPage = () => {
  return (
    <div className="container_dev ">
      <div className="container">
        <div className="row ">
          <h4 className="col-12 text-center py-2">777Builder AI</h4>
          <h1 className="col-12 text-center py-2">
            Build your free website, and we'll host it for you!
          </h1>
          <p className="col-12 text-center">
            Start from scratch or bring your ideas to life—our AI tools make it
            easy.
          </p>

          <div className="col-5 text-end">Free Hosting</div>
          <div className="col-2 text-center">No credit card needed</div>
          <div className="col-5 text-start">No coding required</div>
          <div className="col-12 text-center">
            <button
              className="btn btn-primary mt-3"
              style={{
                background: "#4CAF50",
                borderRadius: "60px",
                border: "none",
                boxShadow:
                  "-4px -4px 5px 0px rgba(0, 0, 0, 0.25098039215686274) inset",
                padding: "10px 40px",
              }}
            >
              Generate Website
            </button>
          </div>
          <div className="min_with">
            <h2 className="col-12 text-center px-5 py-3 ">
              Get access to our AI templates at Zero Cost—no design skill or
              copywriting experience required!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
