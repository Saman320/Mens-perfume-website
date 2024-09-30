"use client";
import '../styles/contact.css'; 
import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className="contact-section">
      <section className="container">
        {/* Heading */}
        <div className="text-center heading">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-description">
            We love to hear from you! Whether you have a question about our fragrances or want to share feedback, feel free to contact us.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="contact-content">
          {/* Contact Form */}
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" className="form-input" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-input" placeholder="Your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-textarea" placeholder="Your message" required></textarea>
            </div>

            <div className="button-container">
              <button type="submit" className="submit-button">Send Message</button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="info-title">Contact Information</h2>
            <p><strong>Email:</strong> info@perfumepalace.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Location:</strong> 123 Fragrance St., Dubai, UAE</p>
            <p className="availability">
              We are available Monday to Friday from 9 AM to 6 PM. Feel free to visit our store or reach out via email!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
