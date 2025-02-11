import React, { useEffect, useState } from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import contactHeader from "../img/contact-header.jpg";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { username, email, subject, message } = formValues;

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Form submitted successfully!", formValues);
    }
  }, [formErrors, isSubmit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username.trim()) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format!";
    }

    if (!values.subject.trim()) {
      errors.subject = "Subject is required!";
    }

    if (!values.message.trim()) {
      errors.message = "Message is required!";
    }

    return errors;
  };

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Contact Us"} img={contactHeader} />
      <main id="main">
        <section id="contact" className="contact">
          <div className="container position-relative" data-aos="fade-up">
            <div className="section-header">
              <h2>Connect with Us to Start Your Learning Journey</h2>
            </div>

            <div className="row gy-4 d-flex justify-content-end">
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>Location:</h4>
                    <p>G-93 SNN Raj Grandeur Begur Main Road, Bangalore, India</p>
                  </div>
                </div>
                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>
                      <a href="mailto:info@scholarbridgeacademy.com">
                        info@scholarbridgeacademy.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>+91 99166 34178</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <form className="php-email-form needs-validation" onSubmit={handleSubmit}>
                  {Object.keys(formErrors).length === 0 && isSubmit && <p className="text-success">Form submitted successfully!</p>}
                  {Object.keys(formErrors).length > 0 && isSubmit && <p className="text-danger">Please fix the errors below.</p>}
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        onChange={handleChange}
                        value={username}
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Your Name"
                      />
                      <p className="text-danger">{formErrors.username}</p>
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        onChange={handleChange}
                        value={email}
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      <p className="text-danger">{formErrors.email}</p>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      onChange={handleChange}
                      value={subject}
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                    <p className="text-danger">{formErrors.subject}</p>
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      onChange={handleChange}
                      value={message}
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                    <p className="text-danger">{formErrors.message}</p>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
