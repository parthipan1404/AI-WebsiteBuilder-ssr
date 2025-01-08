import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="./"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          777Hosting
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hosting
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                WordPress Hosting
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                AI Website Builder
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Domains
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-success"
                href="#"
                role="button"
                style={{
                  background: "#4CAF50",
                  borderRadius: "60px",
                  border: "none",
                  boxShadow:
                    "-4px -4px 5px 0px rgba(0, 0, 0, 0.25098039215686274) inset",
                  padding: "10px 40px",
                }}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
