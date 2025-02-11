import React from "react";
import footerLogo from '../img/sba-logo.svg'
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
                At Scholar Bridge Academy, we recognize that each student is unique, 
                with their own strengths and learning styles. That’s why we design 
                personalized curriculums to ensure every student can excel and reach 
                their full potential.
                </p>
                <div className="social-links d-flex  mt-3">
                  <Link to="https://x.com/ScholarBridge67" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>

                  <Link to="https://www.facebook.com/profile.php?id=61561866722071" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  
                  <Link to ="https://www.linkedin.com/company/104079916/admin/feed/posts/" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Explore Further</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/">Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/Courses">Courses</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/Terms">Terms Conditions & Policies</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-6 footer-links">
                <h4>Our Courses</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#Educational-content">
                    Online Tuition Classes (Grades 5 to 10)
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#Entertainment-content">
                    Olympiad Preparation
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to="/services/#Games">Robotics & STEM Programs</HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#Sports">IT Courses for Future Innovators</HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <address>
                 
                G-93 SNN Raj Grandeur, <br /> Begur Main Road, <br />  HONGASANDRA LAYOUT 
                Banglore India 560068.  <br />
                  <br />
                  <strong>Phone:</strong> +91 99166 34178 <br />
                  <strong>Email: </strong>
                  <a href="mailto:info@scholarbridgeacademy.com">                  
                  info@scholarbridgeacademy.com
                  </a> 
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
              Copyright&copy; 2024
              <span> Scholar Bridge Academy </span>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
      
    </>
  )
  
};

export default Footer;
