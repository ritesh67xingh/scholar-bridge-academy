import React from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Organized Learning Approach </h2>
            <p>
            Our Organized Learning Approach ensures that students follow a 
            clear and logical progression in their educational journey.{" "}
            </p>
          </div>
          <div className="row gy-5">
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-binoculars" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/ervices" className="stretched-link">
                    Explore{" "}
                    </Link>
                  </h4>
                  <p className="description">
                  Dive into interactive learning sessions that allow students to 
                  discover new concepts and ideas. Each lesson is designed to spark 
                  curiosity and make learning engaging.
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
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-check-circle"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                    Assess
                    </Link>
                  </h4>
                  <p className="description">
                  Get a real-time evaluation of your progress through engaging 
                  quizzes and exercises. These assessments help track your understanding 
                  and ensure you're on the right path.
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
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-file-earmark-text"
                    style={{ color: "#f5cf13" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                    Assignments{" "}
                    </Link>
                  </h4>
                  <p className="description">
                  Apply your learning with personalized tasks designed to reinforce key 
                  concepts and skills. Completing assignments deepens knowledge and builds 
                  confidence in every subject.
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
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-pencil"
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                    Feedback{" "}
                    </Link>
                  </h4>
                  <p className="description">
                  Receive detailed reviews and constructive feedback to guide your 
                  learning journey and improvement. Continuous feedback ensures that 
                  students are supported at every step and can reach their full 
                  potential.{" "}
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
