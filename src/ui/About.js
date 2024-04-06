import React from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import about_img from "../img/about-image.jpg";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import abtHeader from "../img/about-header.jpg";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"About Us"} img={abtHeader} />

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>We Are ProcessCrumbs.</h2>
            </div>
            <div className="row gy-4 align-items-center" data-aos="fade-up">
              <div className="col-lg-6">
                <img
                  src={about_img}
                  className="img-fluid"
                  alt="Helping Clients achieve their Vision"
                  title="Helping Clients achieve their Vision"
                />
              </div>
              <div className="col-lg-6">
                <p>
                  {" "}
                  We work at the intersection of Process Mining, AI and
                  Automation to drive real-time transparency, focus on the
                  problems that matter and drive visible outcomes to develop
                  "Best-In-Class" process.
                </p>
                <p>
                  {" "}
                  We cover digital transformation across the "Customer Value
                  Spectrum".
                </p>
                <p>
                  Our people and products arm customers with data-driven
                  insights, quantified and prioritized problem statements, AI
                  driven solutions and automated processes.
                </p>
                <p>
                  We believe that change should be visible and should unlock
                  tremendous value for our customers.
                  
                  <p>
                  <br></br>
                    {" "}
                    Our leaders live by that philosophy and have been driving
                    process and digital transformation for the last 20 years.
                  </p>
                  <p>
                    {" "}
                    We are currently expanding our team and building new
                    transformation squads.
                  </p>
                </p>
                <h4>Connect with us if you would like to hear more.</h4>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
