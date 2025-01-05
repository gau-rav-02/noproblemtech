import React, { useState } from "react";
import "./styles.css";

const Multiservice = () => {
  return (
    <section className="accordion-section">
      <div className="container">
        <div className="header">
          <h1>Other Services</h1>
          <p>We offer a variety of services to support your personal and professional growth:</p>
        </div>

        <div className="accordion-wrapper">
          <AccordionItem
            header="Loan Services"
            text={
              <>
                <ul>
                  <li>Loan Against Property - LAP</li>
                  <li>Home Loan - Builder Purchase, Resale, and All</li>
                  <li>Residential Plot Loan</li>
                  <li>Home Construction Loan</li>
                  <li>Home Improvement and Extension Loan</li>
                  <li>NRI Home Loan</li>
                  <li>Commercial Property Loan</li>
                  <li>Government and Private Loan</li>
                </ul>
              </>
            }
          />
          <AccordionItem
            header="Business Growth Guidance"
            text={
                <>
                  <ul>
                    <li>Market Research & Analysis</li>
                    <li>Strategic Planning</li>
                    <li>Financial Management & Funding</li>
                    <li>Brand Development & Marketing</li>
                    <li>Sales & Customer Acquisition</li>
                    <li>Leadership & Team Development</li>
                    <li>Operational Efficiency</li>
                    <li>Networking & Partnerships</li>
                    <li>International Expansion</li>
                  </ul>
                </>
              }
          />
          <AccordionItem
            header="Startup Mentorship"
            text={
                <>
                  <ul>
                    <li>Market Research & Analysis</li>
                    <li>Strategic Planning</li>
                    <li>Financial Management & Funding</li>
                    <li>Brand Development & Marketing</li>
                    <li>Sales & Customer Acquisition</li>
                    <li>Leadership & Team Development</li>
                    <li>Operational Efficiency</li>
                    <li>Networking & Partnerships</li>
                    <li>International Expansion</li>
                  </ul>
                </>
              }
          />
          <AccordionItem
            header="Health Insurance"
            text="Comprehensive health insurance plans for individuals and families."
          />
        </div>

        <p className="contact-note">
          Contact us for detailed information and to avail of our services.
        </p>
      </div>
    </section>
  );
};

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className={`accordion-item ${active ? "active" : ""}`}>
      <button className="accordion-header" onClick={handleToggle}>
        <span className="accordion-icon">{active ? "-" : "+"}</span>
        {header}
      </button>
      {active && <div className="accordion-content">{text}</div>}
    </div>
  );
};

export default Multiservice;
