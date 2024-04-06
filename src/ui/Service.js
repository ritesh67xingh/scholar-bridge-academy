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
                At our core, we specialize in converting
                <span style={{ color: "#fedc00" }}> Raw Data Into Practical Insights</span> empowering
                our clients to make well-informed decisions that drive towards their business goals.
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
                  <p className="description">
                    
                  In today's dynamic business landscape, transformation isn't just a 
                  buzzword—it's a necessity. At ProCrumbs, our "Consult to Transform" 
                  service goes beyond mere consultation.
                  </p>
                  <p className="description">
                  We immerse ourselves in your organization, working hand in hand with your 
                  teams to understand your unique challenges, aspirations, and opportunities. 
                  </p>
                  <p className="description">
                    
                  Through our innovative "Digital Twin" approach, we create a comprehensive 
                  digital representation of your business, enabling us to identify areas for 
                  improvement and devise tailored strategies for sustainable transformation.
                  </p>
                  <p className="description">
                    
                    <span className="fw-bold">
                    Whether it's streamlining operations, enhancing customer experiences, 
                    or leveraging emerging technologies, we're committed to driving tangible 
                    results that propel your business forward. 
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
                  <p className="description">
                    
                  In a rapidly evolving digital landscape, staying ahead of the curve 
                  requires more than just keeping pace—it demands innovation and agility.
                  </p>
                  <p className="description">
                  Our AI-led Platform Solutions empower businesses across diverse 
                  industries to embrace the future with confidence. 
                  </p>
                  <p className="description">
                    
                  Leveraging cutting-edge artificial intelligence technologies, 
                  we help you shape, develop, and implement next-generation platforms 
                  that unlock new levels of efficiency, productivity, and competitiveness. 
                  </p>
                  <p className="description">
                    
                    <span className="fw-bold">
                    Whether you're looking to automate processes, harness the power of 
                    data analytics, or enhance decision-making capabilities, our platform 
                    solutions are tailored to meet your specific needs and drive sustainable growth.
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
                  <p className="description">
                    
                  In today's competitive business environment, organizations need more than just 
                  technology—they need strategic partners who can provide reliable support and 
                  guidance every step of the way.
                  </p>
                  <p className="description">
                  Our Managed Services offerings are designed to alleviate the burden of 
                  IT management, allowing you to focus on your core business activities with 
                  confidence.
                  </p>
                  <p className="description">
                    
                  From infrastructure management and application support to security monitoring and 
                  compliance management, we offer customized solutions that align with your unique 
                  requirements and budget constraints. 
                  </p>
                  <p className="description">
                    
                    <span className="fw-bold">
                    With ProCrumbs as your trusted managed services provider, you can rest 
                    assured knowing that your IT infrastructure is in capable hands, enabling 
                    you to achieve your business objectives with ease.
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
                    
                  Whether you need assistance with project management, 
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
