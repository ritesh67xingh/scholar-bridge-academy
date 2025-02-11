import React, { useState } from "react";
import shapeImg from "../img/img-wave2.png";
import heroImg1 from "../img/header/hero-image-1.jpg";
import heroImg2 from "../img/header/hero-image-2.jpg";
import heroImg3 from "../img/header/hero-image-3.jpg";
import heroImg4 from "../img/header/hero-image-4.jpg";
import { Link } from "react-router-dom"; // Import Link
import '../../node_modules/react-modal-video/css/modal-video.css'
import ModalVideo from 'react-modal-video'

const Carousel = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <section id="hero" className="hero d-flex">
        <img className="shape" src={shapeImg} alt="#" />
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-7 col-md-12 col-12">
              <h2 data-aos="fade-up">
                Experience expert-led, interactive sessions shaped by professionals 
                with roots in IIT / NIT standards.
              </h2>
              <blockquote data-aos="fade-up" data-aos-delay="100">
                <p>
                  We are a leading global provider of innovative educational solutions, 
                  offering services across interactive learning, engaging entertainment, 
                  coding, and STEM programs for students.
                </p>
              </blockquote>
              <div className="d-flex align-items-center">
                <Link to="/Contact" className="btn-get-started">
                  Book Demo
                </Link>
                <ModalVideo channel='youtube' autoplay='true' isOpen={isOpen} videoId="yqWX86uT5jM" onClose={() => setOpen(false)} />
                {/* Change this button to link to StartClassPage */}
                <Link to="/start-class" className="btn-watch-video d-flex align-items-center pointer">
                  <i className="bi bi-play-circle-fill"></i>
                  <span>Start Class</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <div className="header-image ">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide-to="3"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={heroImg1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={heroImg2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={heroImg3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={heroImg4} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
