import React from "react";
import education from "../img/education-bg.png";
import entertainment from "../img/entertainment-bg.png";
import games from "../img/games-bg.png";
import sports from "../img/sports-bg.png";

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
              We are a  
             <span style={{ color: "#155bd5" }}> LEADING INSTITUTION</span> in 
             providing innovative education, offering courses in 
             Online Tuition, Olympiad Preparation, Robotics, STEM, and IT Skills.
              </h2>
            </div>

            <div
              className="row gy-5 pt-5 align-items-center"
              id="Educational-content"
            >
              <div
                className="col-lg-5 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={education}
                  className="img-fluid"
                  alt=""
                  title="Educational-content"
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-book" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title"> Online Tuition Classes (Grades 5 to 10) </h4>
                  <p className="description">
                    
                  Our Online Tuition Classes provide personalized learning experiences 
                  for students from grades 5 to 10. We offer a comprehensive curriculum 
                  that aligns with CBSE, ICSE, and state board standards. Our expert 
                  teachers from IITs and NITs ensure that every student gets the support 
                  they need to excel in their academics.
                  </p>
                  <span className="fw-bold">
                  Key features of our Tuition classes include:
                  </span>
                  <br />
                  <br />
                  <span className="fw-bold">
                  Personalized Attention: </span> 
                  Small class sizes ensure that each student gets focused attention.
                  <br />
                  <br />
                  <span className="fw-bold">
                  Conceptual Clarity: </span> 
                  Our teachers focus on building strong fundamentals in core subjects such as Mathematics, Science, English, and Social Studies.
                  <br />
                  <br />
                  <span className="fw-bold">
                  Interactive Sessions:  </span> 
                  We employ interactive teaching methods using quizzes, polls, and real-time problem-solving.
                  <br />
                  <br />
                  <span className="fw-bold">
                  Doubt Clearing: </span> 
                  Regular doubt-clearing sessions help students stay on top of their subjects.
                  <br />
                  <br />
                  <span className="fw-bold">
                  Regular Assessments: </span> 
                  We provide continuous evaluation through weekly tests and assignments to track progress.
                  <br />
                  <br />
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Entertainment-content">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-trophy"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Olympiad Preparation </h4>
                  <p className="description">
                  Prepare your child for competitive excellence with our Olympiad 
                  Preparation programs. We offer dedicated courses to help students 
                  ace prestigious Olympiad .
                  <span className="fw-bold">
                  <br />
                  <br />
                    Such As:
                    Math Olympiad,
                    Science Olympiad,
                    Coding Olympiad,
                    English Olympiad.
                    </span>
                  </p>
                  <span className="fw-bold">
                  Our Olympiad courses focus on:
                  </span>
                  <br />
                  <br />
                  <span className="fw-bold">
                  Advanced Conceptual Learning: </span> 
                  We delve deep into subject topics, offering students a better 
                  understanding of competitive concepts.
                  <br />
                  <br />
                  <span className="fw-bold">
                  Problem-Solving Skills: </span> 
                  Through rigorous practice, students enhance their critical thinking and analytical abilities.
                  <br />
                  <br />
                  <span className="fw-bold">
                  Interactive Sessions:  </span> 
                  We employ interactive teaching methods using quizzes, polls, and real-time problem-solving.
                  <br />
                  <br />
                  <span className="fw-bold">
                  Mock Tests & Practice Papers: </span> 
                  Our tests simulate real Olympiad exams, giving students ample practice and confidence.
                  <br />
                  <br />
                  <span className="fw-bold">
                  Experienced Faculty:  </span> 
                  Our Olympiad teachers specialize in advanced subject knowledge, providing expert guidance for success.
                  <br />
                  <br />
                  
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={entertainment} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Games">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={games} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-robot"
                    style={{ color: "#f5cf13" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Robotics & STEM Programs </h4>
                  <p className="description">
                    
                  Our Robotics and STEM Programs are designed to foster creativity, 
                  critical thinking, and innovation among students. Suitable for students 
                  from Grade 1 to 10, these programs blend practical and theoretical 
                  knowledge, allowing students to build robots, code, and explore the 
                  fascinating world of STEM (Science, Technology, Engineering, and Mathematics).
                  </p>
                  <span className="fw-bold">
                  What students will learn:
                  </span>
                  <br />
                  <br />
                  <span className="fw-bold">
                  Robotics: </span> 
                  Build and program robots using LEGO kits, Raspberry Pi, and other platforms.
                  <br />
                  <br />
                  <span className="fw-bold">
                  Coding: </span> 
                  Learn programming languages such as Python, Scratch, and block-based 
                  coding to control robots and create interactive projects.
                  <br />
                  <br />
                  <span className="fw-bold">
                  STEM Projects:  </span> 
                  Engage in hands-on STEM experiments to understand concepts in physics, 
                  mathematics, and engineering.
                  <br />
                  <br />
                  <span className="fw-bold">
                  Problem Solving: </span> 
                  Develop critical thinking and problem-solving skills through fun 
                  and challenging projects.
                  <br />
                  <br />                 
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Sports">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-laptop"
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> IT Courses for Future Innovators </h4>
                  <p className="description">
                    
                  Our IT Courses for Future Innovators aim to equip students with 
                  essential skills in technology and software development. Whether they 
                  are just starting out or are tech enthusiasts, these courses are designed 
                  to help students master key IT skills for the future.
                  </p>
                  <span className="fw-bold">
                  Our courses cover:
                  </span>
                  <br />
                  <br />
                  <span className="fw-bold">
                  Coding for Beginners: </span> 
                  Introduce students to the world of programming with beginner-friendly languages like Python, Java, and C++.
                  <br />
                  <br />
                  <span className="fw-bold">
                  App Development:  </span> 
                  Learn how to create mobile apps for Android and iOS platforms.
                  <br />
                  <br />
                  <span className="fw-bold">
                  Web Development:  </span> 
                  Understand how to build responsive websites using HTML, CSS, JavaScript, and popular frameworks like React.
                  <br />
                  <br />
                  <span className="fw-bold">
                  Artificial Intelligence & Machine Learning: </span> 
                  Dive into AI and ML concepts, training models and understanding how AI impacts the world.
                  <br />
                  <br />
                  <span className="fw-bold">
                  Cybersecurity : </span> 
                  Learn the fundamentals of cybersecurity, how to protect digital assets, and the importance of privacy in the online world.
                  <br />
                  <br />
                  
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={sports} className="img-fluid" alt="" />
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
