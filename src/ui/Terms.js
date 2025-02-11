import React from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Terms and Conditions"} /> {/* Removed img prop */}

      <main id="main">
        <section id="terms" className="terms">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Terms, Conditions, and Policies</h2>
              <p>Last updated on Jul 3, 2024</p>
            </div>

            <div className="row gy-4 terms-details">
              <div className="col-lg-12">
                <h3>Introduction</h3>
                <p>
                  For the purpose of these Terms, Conditions, and Policies, the terms
                  “we,” “us,” and “our” used anywhere on this page shall mean SCHOLAR BRIDGE
                  ACADEMY, whose registered office is G-93, SNN Raj Grandeur, Begur Main Road,
                  Bengaluru, Karnataka 560068. “You,” “your,” “user,” and “visitor” shall mean
                  any natural or legal person who is visiting our website and/or agreed to purchase from us.
                </p>

                <h3>Terms and Conditions</h3>
                <ul>
                  <li>The content of the pages of this website is subject to change without notice.</li>
                  <li>
                    Neither we nor any third parties provide any warranty or guarantee as to the
                    accuracy, timeliness, performance, completeness, or suitability of the information
                    and materials found on this website. You acknowledge that such information may
                    contain inaccuracies, and we expressly exclude liability for errors to the fullest
                    extent permitted by law.
                  </li>
                  <li>
                    Your use of any information or materials on our website is entirely at your own risk.
                    It shall be your responsibility to ensure that any products, services, or information
                    available through our website meet your specific requirements.
                  </li>
                  <li>
                    Our website contains material owned by or licensed to us. This includes design, layout,
                    appearance, and graphics. Reproduction is prohibited other than in accordance with
                    the copyright notice.
                  </li>
                  <li>
                    Unauthorized use of information provided by us shall give rise to a claim for damages
                    and/or be a criminal offense.
                  </li>
                  <li>
                    From time to time, our website may include links to other websites. These links are
                    provided for your convenience to offer further information.
                  </li>
                  <li>
                    You may not create a link to our website from another website or document without
                    SCHOLAR BRIDGE ACADEMY’s prior written consent.
                  </li>
                  <li>
                    Any dispute arising out of the use of our website and/or purchase with us is subject
                    to the laws of India.
                  </li>
                  <li>
                    We shall not be liable for any loss or damage arising directly or indirectly out of the
                    decline of authorization for any transaction, on account of the cardholder exceeding
                    the preset limit.
                  </li>
                </ul>

                <h3>Cancellation and Refund Policy</h3>
                <p>SCHOLAR BRIDGE ACADEMY has a liberal cancellation policy. Under this policy:</p>
                <ul>
                  <li>
                    Cancellations will be considered only if the request is made within 2 days of placing the
                    order for a live class. The request may not be entertained if the class has already commenced
                    or access details have been shared.
                  </li>
                  <li>
                    No cancellation requests for live classes are accepted once they have started, but a
                    refund/replacement can be made if the quality of the class is not as described.
                  </li>
                  <li>
                    In case of issues with accessing live classes or defective course materials, please report
                    this to our Customer Service within 2 days of the class start date.
                  </li>
                  <li>
                    Refunds, if approved, will take 16-30 days to process.
                  </li>
                </ul>

                <h3>Shipping and Delivery Policy</h3>
                <p>
                  Since SCHOLAR BRIDGE ACADEMY provides online live classes, shipping is not applicable. All
                  course materials and access details will be provided digitally, either through email or
                  via access to our online platform.
                </p>

                <h3>Contact Information</h3>
                <p>
                  For any questions regarding our Terms, Conditions, and Policies, please contact us at:
                  <a href="mailto:support@scholarbridgeacademy.com"> support@scholarbridgeacademy.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
