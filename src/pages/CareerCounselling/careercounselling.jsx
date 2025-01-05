import React, { useState } from "react";
import "./styles.css";

const CareerCounselling = () => {
  return (
    <section className="accordion-section">
      <div className="container">
        <div className="header">
          <h1>Career Counselling</h1>
          <p>Discover strategies for the best career advice tailored to every stream of education:</p>
        </div>

        <div className="accordion-wrapper">
          <AccordionItem
            header="Science Stream"
            text="Explore options in engineering, medical, research, and technology."
          />
          <AccordionItem
            header="Commerce Stream"
            text="Guidance for careers in finance, accounting, business management, and entrepreneurship."
          />
          <AccordionItem
            header="Arts Stream"
            text="Uncover opportunities in design, media, writing, and teaching."
          />
          <AccordionItem
            header="Vocational Courses"
            text="Learn about skill-based training and certifications for immediate career opportunities."
          />
          <AccordionItem
            header="UG Courses"
            text={
              <ul>
                <li>Bachelor of Science (B.Sc.)</li>
                <li>Bachelor of Arts (B.A.)</li>
                <li>Bachelor of Commerce (B.Com.)</li>
                <li>Bachelor of Business Administration (BBA)</li>
                <li>Bachelor of Engineering (B.Tech.)</li>
                <li>Bachelor of Computer Applications (BCA)</li>
              </ul>
            }
          />
          <AccordionItem
            header="PG Courses"
            text={
              <ul>
                <li>Master of Science (M.Sc.)</li>
                <li>Master of Business Administration (MBA)</li>
                <li>Master of Arts (M.A.)</li>
                <li>Master of Technology (M.Tech.)</li>
                <li>Master of Computer Applications (MCA)</li>
                <li>Master of Commerce (M.Com.)</li>
              </ul>
            }
          />

        </div>

        <p className="career-note">
          Contact us for personalized guidance and to explore our career counselling services.
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

export default CareerCounselling;
