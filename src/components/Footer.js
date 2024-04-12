import React from "react";import footerLogo from "../img/pro-logo.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                <img src={footerLogo} alt="" title="" />
               </Link> 
                <p>
                Unraveling Complexity, Powering Value.
                </p>
                <div className="social-links d-flex  mt-3">
                  

                  <Link
                    to="https://www.linkedin.com/in/procrumbs-unraveling-complexity-powering-value-a4b331302/"
                    className="linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/about">About Us</Link>
                  </li>

                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink
                      smooth
                      to="/services/#Consult to Transform-content"
                    >
                      Consult to Transform
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink
                      smooth
                      to="/services/#AI led Platform Solutions-content"
                    >
                      AI led Platform Solutions
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to="/services/#Managed Services">
                      Managed Services
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to="/services/#Professional Services">
                      Professional Services
                    </HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <address>
                  102, <br /> Pioneer Lake District, <br /> Reliable Dollar
                  Colony Phase 1, Gattahalli, Sarjapur, Bengaluru - 560 099{" "}
                  <br />
                  <br />
                  <strong>Phone:</strong> +91 91484 44499 <br />
                  <strong>Email: </strong>
                  <a href="mailto:info@procrumbs.com">info@procrumbs.com</a>
                  <br />
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              <span id="copyright">
                <script>
                  document.getElementById('copyright').appendChild(document.createTextNode(new
                  Date().getFullYear()) )
                </script>
              </span>
              &copy; Copyright
              <span> ProCrumbs Pvt. Ltd 2024 </span>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
