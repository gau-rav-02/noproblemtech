import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon
import './styles.css';

function FloatingWhatsApp() {
  const phoneNumber = "+918830428998"; // Replace with your WhatsApp number
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return (
    <div className="floating-whatsapp">
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
}

export default FloatingWhatsApp;
