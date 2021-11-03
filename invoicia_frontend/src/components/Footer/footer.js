import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <div className="aboutus-section">
            <h1 className="footer-heading">About Us</h1>
            <p className="about-us-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="follow-section">
            <a href="#" target="_blank">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-github-square"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
        </div>
        <div className="footer-column">
          <div className="contact-section">
            <h1 className="footer-heading">Contact Us</h1>
            <div className="contact-us-item">
              <i className="fas fa-map-marker-alt"></i>
              <p className="contact-us-text">
                123, IIT Bhubaneswar, Khorda, Odisha
              </p>
            </div>
            <div className="contact-us-item">
              <i className="fas fa-phone-alt"></i>
              <p className="contact-us-text">+91 1234567890</p>
            </div>
            <div className="contact-us-item">
              <i className="fas fa-envelope"></i>
              <p className="contact-us-text">invoicia@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-section">&#169; Invoicia, IIT Bhubaneswar</div>
    </footer>
  );
};

export default Footer;
