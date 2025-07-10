import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are imported

const FloatingContactButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/919753471195"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
      <a
        href="tel:+919753471195"
        className="call-float"
        aria-label="Call us"
      >
        <i className="bi bi-telephone-fill"></i>
      </a>
    </div>
  );
};

export default FloatingContactButtons;
