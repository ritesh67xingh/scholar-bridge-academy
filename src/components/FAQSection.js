import React, { useState } from "react";

const FAQSection = () => {
  // Define state to handle the open/close state of each FAQ item
  const [isOpen, setIsOpen] = useState(null);

  // Function to toggle the open/close state
  const toggleFAQ = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };

  return (
    <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-header">
              <h2 className="text-black">FAQ</h2>
              <p>
                Here are some common questions about our process mining
                services.
              </p>
            </div>
            <div className="accordion">
              <div className="faq-item">
                <div className={`accordion-item ${isOpen === 1 ? "open" : ""}`}>
                  <div className="accordion-title" onClick={() => toggleFAQ(1)}>
                    <h3>What is process mining?</h3>
                    <span
                      className={`icon ${isOpen === 1 ? "open" : ""}`}
                    ></span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Process mining is a technique used to analyze business
                      processes based on event logs. It provides insights into
                      how processes are actually performed, identifies
                      bottlenecks, and helps optimize process efficiency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-item">
                <div className={`accordion-item ${isOpen === 2 ? "open" : ""}`}>
                  <div className="accordion-title" onClick={() => toggleFAQ(2)}>
                    <h3>How can process mining benefit my business?</h3>
                    <span
                      className={`icon ${isOpen === 2 ? "open" : ""}`}
                    ></span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Process mining can benefit your business in several ways,
                      including:
                    </p>
                    <ul>
                      <li>
                        Identifying inefficiencies and bottlenecks in processes
                      </li>
                      <li>Improving process transparency and compliance</li>
                      <li>
                        Enhancing operational performance and resource
                        utilization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="faq-item">
                <div className={`accordion-item ${isOpen === 3 ? "open" : ""}`}>
                  <div className="accordion-title" onClick={() => toggleFAQ(3)}>
                    <h3>What tools are commonly used for process mining?</h3>
                    <span
                      className={`icon ${isOpen === 3 ? "open" : ""}`}
                    ></span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      There are several popular tools for process mining,
                      including:
                    </p>
                    <ul>
                      <li>ProM Framework</li>
                      <li>Celonis</li>
                      <li>Disco</li>
                      <li>RapidMiner</li>
                    </ul>
                    <p>
                      These tools offer various features for analyzing and
                      visualizing process data.
                    </p>
                  </div>
                </div>
              </div>
              {/* Add more FAQ items as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
