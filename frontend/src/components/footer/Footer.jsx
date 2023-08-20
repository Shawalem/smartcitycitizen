import React, { useEffect } from 'react';
import "./footer.scss";

const Footer = () => {
  useEffect(() => {
    const partnerLink = document.querySelector('.footer_nav a[href="/partner-withus"]');
    
    if (partnerLink) {
      partnerLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '/contact-us';
      });
    }
  }, []);

  return (
    <>
      <div className="container Footer">
        <div className="footer_wrapper">
          <div className="footer_info">
            <img src="./images/logoW.png" alt="" />
            <p>© 2023 Smartcitycitizen </p>
            <p>
              Smart City Citizen, Bconz International Pvt. Ltd, Bangalore, India
            </p>
          </div>
          <div className="footer_nav">
            <div>
              <a href="/about-us">About Us</a>
              <a href="/partner-withus">Advertise with us</a>
              <a href="/contact-us">Contact us</a>
              <a href="/smart-city-projects">Smart City Project Reports</a>
            </div>
            <div>
              <a href="/careers">Jobs</a>
              <a href="/parners">Partners</a>
              <a href="/citizen-engagement">Citizen Engagement</a>
              <a href="/contact-us">Support</a>
            </div>
            <div>
              <a href="/city-profile">City Profile</a>
              <a href="/city-lights">City lights</a>
              <a href="/blogs">Blog</a>
              <a href="/opinions">Opinions</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
