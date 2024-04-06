import React from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Services </h2>
            <p>
              Our expertise lies in transforming raw data into actionable
              insights, enabling our clients to make informed decisions and
              achieve their business objectives.{" "}
            </p>
          </div>
          <div className="row gy-5">
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="single-service">
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Consult To Transform{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    We make it tangible with our "Digital twin"approach. Whether
                    innovating, elevating operations, or modernising technology,
                    we work shoulder to shoulder and unearth every part of your
                    business to prioritize journeys and iterate for impact......
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      AI led Platform Solutions
                    </Link>
                  </h4>
                  <p className="description">
                    We make it faster across Industry verticals. Shape-up.
                    Develop. Build. next generation process and realise new
                    opportunities to accelerate business value. Our holistic
                    approach encompasses shaping, developing, and building
                    next-generation processes, ensuring your organization stays
                    ahead of the curve .......
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="single-service">
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Managed Services{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    We understand the importance of predictable costs and
                    efficient use of resources for our clients. That’s why we
                    offer customized Managed Services arrangements that help our
                    clients receive the necessary capabilities and expertise to
                    scale as needs grow......
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-service">
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Professional Services{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    Strike a balance between delivering quick wins to make
                    immediate impact and innovating for future growth with
                    ProCrumbs certified global skill pool With our certified
                    global skill pool, we ensure that every solution we provide
                    not only addresses immediate needs but also sets the stage
                    for long-term success.......{" "}
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
