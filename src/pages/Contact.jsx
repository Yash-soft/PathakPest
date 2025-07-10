import React, { useState } from "react";
import contactImg from "../assest/images/service1.jpg";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Contact Form Submission", 
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone))
      errors.phone = "Phone must be 10 digits";
    if (!formData.message) errors.message = "Message is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .send(
          "service_ozsh6hf", 
          "template_mnb0rf6", 
          formData,
          "FYXhlmSG0n_oSCIYk"   
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Your message has been sent successfully!");
            setFormData({
              name: "",
              phone: "",
              subject: "Contact Form Submission",
              message: "",
            });
          },
          (err) => {
            console.error("FAILED...", err);
            alert("Oops! Something went wrong. Please try again.");
          }
        );
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p className="contact-tagline">Get a Pest-Free Environment Today</p>
        <div className="section-underline">
          <div className="underline-static"></div>
          <div className="underline-animation"></div>
        </div>
      </div>

      <div className="contact-content">
        {/* Left Form Card */}
        <div className="contact-form-card" data-aos="fade-right">
          <h3 className="contact-form-title">Send Us a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="contact-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <small style={{ color: "red" }}>{errors.name}</small>
            )}

            <input
              type="tel"
              placeholder="Mobile No."
              className="contact-input"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && (
              <small style={{ color: "red" }}>{errors.phone}</small>
            )}

            <textarea
              placeholder="Send Message"
              className="contact-input textarea-input"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && (
              <small style={{ color: "red" }}>{errors.message}</small>
            )}

            <button type="submit" className="contact-submit-btn">
              Submit
            </button>
          </form>
        </div>

        {/* Right Image with Text */}
        <div className="contact-image-section" data-aos="fade-left">
          <div className="contact-img-container">
            <img
              src={contactImg}
              alt="Contact Pathak Pest Control"
              className="contact-img"
            />
            <div className="contact-img-overlay"></div>
          </div>
          <div className="contact-image-content">
            <h3>Pathak Pest Control</h3>
            <p>
              Get safe, eco-friendly pest control for your home or business
              today.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ContactUs;
