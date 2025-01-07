import React, { useState } from "react";
import "./styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "9e78d801-155d-48ed-9583-e7140ff6f587"); // Replace with your Web3Forms access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); // Clear the form
    } else {
      console.log("Error", data);
      setResult(data.message); // Show error message if submission fails
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Contact Form</h1>
          <p>
            Feel free to reach out to us with any questions, comments, or inquiries. We value your feedback and are here to assist you. Please provide your details and message below, and we will get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
