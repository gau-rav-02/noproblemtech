import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com"; // Use EmailJS for sending emails
import './styles.css'

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interviewDate: "",
    interviewTime: "",
  });

  const [jobRole, setJobRole] = useState("");
  const [applicationType, setApplicationType] = useState("");

  useEffect(() => {
    // Extract job role from query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const role = queryParams.get("role");
    const applicationtype = queryParams.get("type");
    setApplicationType(applicationtype || "Not Specified")
    setJobRole(role || "Not Specified");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Log form data for debugging
    console.log(formData);
  
    // Admin/Recruiter Email
    const adminEmailPromise = emailjs.send(
      "service_hjr6bko", // Your Service ID
      "template_3f3a365", // Admin Template ID
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        interviewDate: formData.interviewDate,
        interviewTime: formData.interviewTime,
        jobRole: jobRole,
        type: applicationType,
      },
      "m4fOLovbnyInI1XwV" // Your Public Key
    );
  
    // User Confirmation Email
    const userEmailPromise = emailjs.send(
      "service_hjr6bko", // Your Service ID
      "template_id7qxb4", // User Confirmation Template ID
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        interviewDate: formData.interviewDate,
        interviewTime: formData.interviewTime,
        jobRole: jobRole,
        type: applicationType,
      },
      "m4fOLovbnyInI1XwV" // Your Public Key
    );
  
    // Handle both email promises
    Promise.all([adminEmailPromise, userEmailPromise])
      .then((response) => {
        console.log("SUCCESS!", response);
        alert("Application Submitted Successfully! A confirmation email has been sent.");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to Submit Application. Please try again.");
      });
  };

  return (
    <div className="apply-container">
      <h2>Apply for the {applicationType === "Job" ? "Job" : "Internship"}: {jobRole}</h2>
      <form onSubmit={handleSubmit} className="apply-form">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Interview Date:
          <input
            type="date"
            name="interviewDate"
            value={formData.interviewDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Interview Time:
          <select
            name="interviewTime"
            value={formData.interviewTime}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a time slot
            </option>
            <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
            <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
            <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
            <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
            <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
            <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
            <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
            <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
          </select>
        </label>
        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Apply;
