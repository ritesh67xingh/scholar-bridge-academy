import React from 'react'
import { Link } from 'react-router-dom'

import dashboard from '../img/revenue-dashboard.png'

const Revenue = () => {
  return (
    <>
        <section id="features" className="features">
        <div className="details">
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-md-7">
                <h1>Uplift Your Child's Educational Experience</h1>
                <p>At Scholar Bridge Academy, we are dedicated to providing a transformative learning environment that nurtures curiosity and fosters academic excellence. </p>
                <p> Our innovative curriculum, led by experienced educators, integrates technology and hands-on activities to make learning engaging and relevant.</p>
                <p> With personalized support and a focus on individual growth, we empower each student to reach their full potential and develop a lifelong love for learning. Join us in shaping a brighter future for your child! </p>
                <Link to="/about" className="btn-get-started">Read More</Link>
              </div>
              <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
                <div className="phone-wrap">
                  <img src={dashboard} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Revenue