import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaRegEnvelope, FaUser } from "react-icons/fa";
import './styles.css';
import { FaEnvelopesBulk } from 'react-icons/fa6';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">
        

        <div className="footer-section">
          <h4>Policy</h4>
          <ul>
          <li><NavLink to="/privacy-policy" className="footer-navlink">Privacy Policy</NavLink></li>
            <li><NavLink to="/security-policy" className="footer-navlink">Application Security</NavLink></li>
            <li><NavLink to="/software-principles" className="footer-navlink">Software Principles</NavLink></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Address</h4>
          <p>Shop No. 1 New Manas Arcade,</p>
          <p>SBH Colony,</p>
          <p>Aurangabad - 431001</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul className="contact-icons">
              <li>
                  <a href="tel:+919552602626" className="phone-link">
                      <FaPhoneAlt size={15} color="#68a66e" /> +91 9552602626
                  </a>
              </li>
              <li>
                  <a href="mailto:nptech26@gmail.com" className="email-link">
                      <FaRegEnvelope size={15} color="#fc6a6a" /> nptech26@gmail.com
                  </a>
              </li>
              <li>
                  <a
                      href="https://wa.me/918830428998"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-link"
                  >
                      <FaWhatsapp size={15} color="#25D366" /> Click to chat
                  </a>
              </li>
              <li>
                  <a
                      href="https://www.instagram.com/noproblem.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="instagram-link"
                  >
                      <FaInstagram size={15} color="#E1306C" /> Follow us on Instagram
                  </a>
              </li>
          </ul>
      </div>


        <div className="footer-section">
          <h4>Founder</h4>
          <p><FaUser size={15} color="#000000" /> Satish Pawar</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-brand"> &copy; {currentYear} nptech.site - All rights reserved </div>     
        <div className="footer-icons">
          {/* <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a> */}
          <a href="#"><i className="fab fa-linkedin"></i></a>
          {/* <div className="founder"> Founder: Satish Pawar</div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
