const Navbar = () => {
  const containerStyle = {
    backgroundColor: "#ffffff",
    height: "70px",
    justifycontent: "center",
    display: "grid",
    alignitems: "center",
  };
  return (
    <div style={containerStyle}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://parthipan1404.github.io/AI-WebsiteBuilder-ssr/assets/favicon-DUDWcYBr.ico"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top mx-2"
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
              <li className="nav-item mx-2">
                <button
                  className="text-light button-css"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
