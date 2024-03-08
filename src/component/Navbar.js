import React from "react";
import { Link,useLocation } from "react-router-dom";
import './navbarCss.css'

function Navbar() {
  const location = useLocation();

  React.useEffect(() => {
    // Google Analytics 
    console.log(location.pathname)
  }, [location]);
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"  >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            rnNotebook
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} to="/about">
                  About Us
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
