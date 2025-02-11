import React, { useState, useRef } from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import contactHeader from "../img/contact-header.jpg";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const [inputFields, setInputFields] = useState({
    username: "",
    email: "",
    number: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const { username, email, number, message } = inputFields;

  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.username.trim().length < 3) {
      errors.username = "Username should be at least 3 characters long.";
    }
    if (!/\S+@\S+\.\S+/.test(inputValues.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!/^\d{10}$/.test(inputValues.number)) {
      errors.number = "Enter a valid 10-digit mobile number.";
    }
    if (inputValues.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters long.";
    }
    return errors;
  };

  const handleChange = (event) => {
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateValues(inputFields);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      try {
        await emailjs.sendForm(
          "service_pb9on3v",
          "template_b6j13zn",
          form.current,
          "MiMCltfiNdOXdPSGR"
        );
        setFormStatus("Message sent successfully!");
        setInputFields({
          username: "",
          email: "",
          number: "",
          message: "",
        });
      } catch (error) {
        setFormStatus("Failed to send the message. Please try again later.");
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    }
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
                    <p>
                      G-93 SNN Raj Grandeur Begur Main Road, HONGASANDRA LAYOUT, 
                      Bangalore, India - 560068
                    </p>
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

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                <form ref={form} className="php-email-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        onChange={handleChange}
                        value={username}
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Your Name"
                        style={{ border: errors.username ? "1px solid red" : null }}
                      />
                      {errors.username && (
                        <small className="error text-danger">{errors.username}</small>
                      )}
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        onChange={handleChange}
                        value={email}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="E-mail"
                        style={{ border: errors.email ? "1px solid red" : null }}
                      />
                      {errors.email && (
                        <small className="error text-danger">{errors.email}</small>
                      )}
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      onChange={handleChange}
                      value={number}
                      type="text"
                      className="form-control"
                      name="number"
                      placeholder="Number"
                      style={{ border: errors.number ? "1px solid red" : null }}
                    />
                    {errors.number && (
                      <small className="error text-danger">{errors.number}</small>
                    )}
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      onChange={handleChange}
                      value={message}
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      style={{ border: errors.message ? "1px solid red" : null }}
                    ></textarea>
                    {errors.message && (
                      <small className="error text-danger">{errors.message}</small>
                    )}
                  </div>
                  <div className="text-center mt-4">
                    <button className="btn btn-primary" type="submit" disabled={submitting}>
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                  {formStatus && (
                    <div className={`alert mt-3 ${submitting ? "alert-warning" : "alert-success"}`}>
                      {formStatus}
                    </div>
                  )}
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
