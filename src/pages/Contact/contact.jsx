import React, { useState } from "react";
import "./styles.css";

const web3FromsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("subject", "NPTECH - New Contact Form Submission");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", web3FromsAccessKey); // Corrected access key usage

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setIsLoading(false);
        alert("Form Submitted Successfully!");
        event.target.reset(); // Reset form fields
      } else {
        setIsLoading(false);
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      setIsLoading(false);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Contact Form</h1>
          <p>
            Feel free to reach out to us with any questions, comments, or
            inquiries. We value your feedback and are here to assist you. Please
            provide your details and message below, and we will get back to you
            as soon as possible.
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
              placeholder="Write your message clearly and include all details to help us understand your query."
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
