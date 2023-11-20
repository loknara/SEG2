/*
Contact.jsx
Created by Suraj Namburi
*/
import React, { useState } from "react";
import LogoLeft from "./Logo.png";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add code here to send the form data to your backend or store it in a database
    console.log("Form data submitted:", formData);

    // You may also want to clear the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${LogoLeft})` }}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name..."
            type="text"
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email..."
            type="email"
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
