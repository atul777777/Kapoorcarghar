import React from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>We're here to help! Feel free to reach out to us.</p>
        <div className="contact-details">
          <p><strong>📞 Phone:</strong> <a href="tel:+919876543210">+91-9876543210</a></p>
          <p><strong>📧 Email:</strong> <a href="mailto:info@kapoorcarghar.com">info@kapoorcarghar.com</a></p>
          <p><strong>📍 Address:</strong> Kapoor Car Ghar, Main Road, Punjab, India</p>
        </div>
        <button className="contact-button">Send Message</button>
      </div>
    </div>
  );
};

export default ContactUs;
