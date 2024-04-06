import React, { useEffect, useState } from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import contactHeader from "../img/contact-header.jpg";

const Contact = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const { username, email, subject, message } = formValues;

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
    }
  }, [formErrors, isSubmit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\\$@]+@[^\\$@]+\\.[^\\$@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.subject) {
      errors.subject = "Subject is required!";
    }

    if (!values.message) {
      errors.message = "Message is required!";
    } else if (values.message.length > 100) {
      errors.message = "Message cannot exceed 100 characters!";
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
              <h2>We value your feedback and inquiries.</h2>
            </div>

            <div className="row gy-4 d-flex justify-content-end">
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>Location:</h4>
                    <p>
                      102,Pioneer Lake District, <br /> Reliable Dollar Colony
                      Phase 1,
                      <br />
                      Gattahalli, Sarjapur, <br />
                      Bengaluru - 560 099
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>
                      <a href="mailto:info@procrumbs.com">info@procrumbs.com</a>
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>+91- 91484 44499</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <form
                  className="php-email-form needs-validation"
                  onSubmit={handleSubmit}
                >
                  {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <p>successful</p>
                  ) : (
                    <p>unsuccessful</p>
                  )}
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        onChange={handleChange}
                        value={username}
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Your Name"
                        required
                        maxLength="3"
                      />
                      <p>{formErrors.username}</p>
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        onChange={handleChange}
                        value={email}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                      <p>{formErrors.email}</p>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      onChange={handleChange}
                      value={subject}
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                      maxLength="4"
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      onChange={handleChange}
                      value={message}
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                      maxLength="100"
                    ></textarea>
                    <div className="valid-feedback">Max 100 characters</div>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">Send Message</button>
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
