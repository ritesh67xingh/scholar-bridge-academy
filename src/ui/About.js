import React from 'react'
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css'
import about_img from '../img/about-image.jpg'
import manag_photo1 from '../img/team/Padmakumar.png';
import manag_photo2 from '../img/team/Sundaramoorthy.png';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import abtHeader from '../img/about-header.jpg'
import { useEffect } from 'react';

const About = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
  return (
    <>
   <InnerHeader />
   <InnerHeaderBanner name={"About Us"} img = {abtHeader}/>

     <main id="main">   
      <section id="about" className="about">
         <div className="container" data-aos="fade-up">
            <div className="section-header">
               <h2>Building a Bridge Between Dreams and Achievements</h2>
            </div>
            <div className="row gy-4 align-items-center" data-aos="fade-up">
               <div className="col-lg-6">
                  <img src={about_img} className="img-fluid" alt="Helping Clients achieve their Vision" title="Helping Clients achieve their Vision" />
               </div>
               <div className="col-lg-6">
                  <p> When we founded Scholar Bridge Academy, we envisioned a partnership with schools and students to elevate learning experiences and foster academic success.</p>
                  <p> We chose the name Scholar Bridge Academy because it represents the connection between learners and knowledge, fostering a relationship that benefits everyone involved. Our mission is to empower students and educational institutions by enhancing learning experiences and driving academic excellence.</p>
                  <p> Since our inception, Scholar Bridge Academy has experienced remarkable growth, establishing itself as a leading provider of innovative educational solutions in India. We have empowered thousands of students and partnered with numerous educational institutions, consistently enhancing learning outcomes and fostering a passion for knowledge.</p>
                  <p> Our commitment to empowering students is just one aspect of Scholar Bridge Academy. From the beginning, we aimed to build an institution that prioritizes not only academic excellence but also the well-being of our educators and the community we serve. That’s why a portion of every enrollment fee is dedicated to initiatives that promote education and social responsibility, making a positive impact in the lives of others.
                  </p>
               </div>
            </div>
         </div>
      </section>
    
      <div id="vision" className="vision aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="row gy-4">
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Vision</h4>
                              <p>To revolutionize education by making practical, future-ready learning accessible to all. We aim to empower students with the knowledge, skills, and confidence to excel in the digital age and beyond, fostering innovators and leaders who will shape the future.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Mission</h4>
                              <p>Our mission is to provide high-quality, hands-on learning experiences that bridge the gap between theoretical concepts and real-world application. We are committed to nurturing curiosity, creativity, and critical thinking in students of all ages, equipping them with the tools needed for academic, professional, and personal success.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title">Our Values</h4>
                              <p> At Scholar Bridge Academy, we are guided by a set of core values that shape everything we do. We believe in innovation, constantly embracing new technologies and teaching methods to ensure our students stay ahead in an ever-evolving world. Quality is at the heart of our approach.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
            </div>
         </div>
      </div>
  
      <section id="management" className="management light-bg aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="section-header">
               <h2>Our Team</h2>
               <p>Our team at Scholar Bridge Academy brings years of expertise in education and technology, committed to delivering innovative learning experiences. We are dedicated to empowering students with personalized education and exceptional support.</p>
            </div>
            <div className="row member d-flex align-items-center ">
               <div className="col-md-2">
                  <div className="pic"><img src={manag_photo1} className="img-fluid" alt=""/></div>
               </div>
               <div className="col-md-10">
                  <div className="member-info">
                     <h4>Er.Ritesh Kumar Singh</h4>
                     <span>Co-Founder & Director</span>
                     <p>Ritesh is a dedicated software engineer with over 5 years of experience ,in the Edtech industry. His expertise in Software development, Educational technology solutions, and curriculum design drives the innovative vision of Scholar Bridge Academy, ensuring high-quality learning experiences for students.</p>
                     <div className="social">
                     <Link to ="/"><i className="bi bi-twitter"></i></Link>                
                     <Link to ="/"> <i className="bi bi-linkedin"></i> </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row member d-flex align-items-center mt-4">
               <div className="col-md-2">
                  <div className="pic"><img src={manag_photo2} className="img-fluid" alt="" /></div>
               </div>
               <div className="col-md-10">
                  <div className="member-info">
                     <h4>Dr.Laxmi </h4>
                     <span>Co-Founder & Director</span>
                     <p>Laxmi is a passionate educator with 8 years of teaching experience in various subjects. As the co-founder of Scholar Bridge Academy, she is committed to fostering innovative learning solutions and empowering students through technology, ensuring that quality education is accessible to all. </p>
                     <div className="social">
                        <Link to ="/"><i className="bi bi-twitter"></i></Link>                
                        <Link to ="https://www.linkedin.com/in/"> <i className="bi bi-linkedin" target="_blank"></i> </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   
   </main>
   <Footer/>
    
    </>
  )
}

export default About