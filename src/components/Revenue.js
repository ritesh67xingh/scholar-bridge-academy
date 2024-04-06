import React from "react";
import { Link } from "react-router-dom";

import dashboard from "../img/revenue-dashboard.png";

const Revenue = () => {
  return (
    <>
      <section id="features" className="features">
        <div className="details">
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-md-7">
                <h4>
                  At Procrumbs, we are dedicated to revolutionizing your
                  business landscape.
                </h4>
                <p>
                  Our tailored solutions are designed to seamlessly drive
                  revenue while optimizing every aspect of your operations,
                  ensuring peak efficiency and sustainable growth.
                </p>
                <p>
                  {" "}
                  With Procrumbs by your side, you'll unlock new opportunities,
                  maximize your revenue potential, and achieve unparalleled
                  success in today's dynamic marketplace.
                </p>
                <p>
                  {" "}
                  We are dedicated to unlocking new opportunities for business
                  growth through innovative data processing services tailored to
                  meet our clients' specific requirements.{" "}
                </p>
                <Link to="/Services" className="btn-get-started">
                  Read More
                </Link>
              </div>
              <div
                className="col-lg-5 position-relative"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="phone-wrap">
                  <img src={dashboard} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Revenue;
