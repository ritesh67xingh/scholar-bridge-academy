import React from "react";
import consult from "../img/consult-bg.png";
import AI_led from "../img/AI_led-bg.png";
import managed_services from "../img/managed_services-bg.png";
import professional_services from "../img/professional_services-bg.png";

import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from '../img/services-header.jpg'

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img = {serviceHeader}/>

      <main id="main">
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                 We leverage
                <span style={{ color: "#fedc00" }}> Process mining and AI technologies</span> to 
                deliver actionable insights
                which empower our clients to make well-informed decisions which further helps in process
                transformation and automation.
              </h2>
            </div>

            <div
              className="row gy-5 pt-5 align-items-center"
              id="Consult-content"
            >
              <div
                className="col-lg-5 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={consult}
                  className="img-fluid"
                  alt=""
                  title="Consult-content"
                />
              </div> 

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                
                <div>
                  <h4 className="title"> Consult To Transform </h4>
                  <br></br>

                  <p className="description">
                    
                  Today, complex business processes run on a myriad of underlying IT systems.
                  Visibility and Transparency is required across processes before efficiency and 
                  effectiveness can be improved substantially.
                  </p>
                  <br></br>
                  <p className="description">
                    
                  Through our Digital Twin approach, we create comprehensive digital 
                  representations of your businesses, enabling us to identify areas for 
                  improvement and devise tailored strategies for sustainable transformation.
                  </p>
                  <br></br>
                  <p className="description">
                    
                    <span className="fw-bold">
                    Along with our technology partners, we are committed to driving 
                    tangible results by stitching domain specific solutions which address 
                    the problems that are important to you.
 
                    </span>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="AI_led-content">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div>
                <h4 className="title"> AI-led Platform Solutions </h4>
                <br></br>
                  <p className="description">
                    
                  Our AI-led Platform Solutions empower businesses in shaping, developing and
                  implementing next-generation AI platforms which connect with business problems 
                  that unlock new levels of efficiency, productivity, and competitiveness.
                  </p>
                  <br></br>
                  
                  <p className="description">
                    
                    <span className="fw-bold">
                    If you are considering real-time process monitoring, process automation or 
                    enhancing decision-making capabilities, our platform solutions are tailored to 
                    meet your specific needs and power growth.
                    </span>
                    
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={AI_led} className="img-fluid" alt="AI_led" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="managed_services">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={managed_services} className="img-fluid" alt="managed_services" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                <h4 className="title"> Managed Services </h4>
                <br></br>
                  <p className="description">
                    
                  We believe Managed Services programs need to deliver value and not just 
                  BAU productivity and turnaround KPIs.
                  </p>
                  <br></br>
                  <p className="description">
                  Our Managed Services offerings are designed to manage new-age and complex 
                  CoEs built to drive AI platforms and products.
                  </p>
                  <br></br>
                  
                  <p className="description">
                    
                    <span className="fw-bold">
                    Our customized solutions align with your requirements ranging from 
                    CoE formation, roadmap planning and execution, identifying and expanding 
                    into new growth areas, delivering value and operating Build-Operate-Transfer 
                    models.
                    </span>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="professional_services">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div>
                <h4 className="title"> Professional Services </h4>
                  <p className="description">
                    
                  As businesses strive to stay ahead of the curve in today's fast-paced world, 
                  the demand for skilled professionals who can deliver impactful results has 
                  never been greater.
                  </p>
                  <p className="description">
                  Our Professional Services are designed to bridge the gap between vision and 
                  execution, providing you with access to a diverse pool of certified experts 
                  who possess the knowledge, experience, and expertise needed to drive success.
                  </p>
                  <p className="description">
                    
                  Whether you need assistance with project management 
                  or strategic planning, our team of professionals is committed to delivering 
                  innovative solutions that drive tangible business outcomes.
                  </p>
                  <p className="description">
                    
                    <span className="fw-bold">
                    With ProCrumbs as your partner, you can leverage our global talent pool to 
                    accelerate your journey towards excellence and achieve sustainable growth.
                    </span>
                    
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={professional_services} className="img-fluid" alt="professional_services" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Service;
