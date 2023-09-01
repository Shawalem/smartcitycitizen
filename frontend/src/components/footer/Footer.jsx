import React, { useEffect } from "react";
import "./footer.scss";

const Footer = () => {
  useEffect(() => {
    const partnerLink = document.querySelector(
      '.footer_nav a[href="/partner-withus"]'
    );

    if (partnerLink) {
      partnerLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "/contact-us";
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
            <div>
              <a href="/about-us">About Us</a>
              <a href="/partner-withus">Advertise with us</a>
              <a href="/contact-us">Contact us</a>
              <a href="/careers">Jobs</a>
              <a href="/contact-us">Support</a>
              {/* <a href="/smart-city-projects">Smart City Project Reports</a> */}
            </div>
          </div>
          <div className="footer_nav">
            <div>
              <a href="/">Agartala Smart City</a>
              <a href="/">Agra Smart City</a>
              <a href="/">Ahmedabad Smart City</a>
              <a href="/">Aizawl Smart City</a>
              <a href="/">Ajmer Smart City</a>
              <a href="/">Aligarh Smart City</a>
              <a href="/">Amaravati Smart City</a>
              <a href="/">Amritsar Smart City</a>
              <a href="/">Atal Nagar Smart City</a>
              <a href="/">Aurangabad Smart City</a>
              <a href="/">Bareilly Smart City</a>
              <a href="/">Atal Nagar Smart City</a>
              <a href="/">Aurangabad Smart City</a>
              <a href="/">Bareilly Smart City</a>
              <a href="/">Belagavi Smart City</a>
              <a href="/">Bengaluru Smart City</a>
              <a href="/">Bhopal Smart City</a>
              <a href="/">Bhubaneswar Smart City</a>
              <a href="/">Bilaspur Smart City</a>
              <a href="/">Chandigarh Smart City</a>
              <a href="/">Chennai Smart City</a>
              <a href="/">Coimbatore Smart City</a>


              
              
              
              {/* <a href="/smart-city-projects">Smart City Project Reports</a> */}
            </div>
            <div>
              {/* <a href="/parners">Partners</a> */}
              <a href="/">Dahod Smart City</a>
              <a href="/">Davanagere Smart City</a>
              <a href="/">Dehradun Smart City</a>
              <a href="/">Dharamshala Smart City</a>
              <a href="/">Diu Smart City</a>
              <a href="/">Erode Smart City</a>
              <a href="/">Faridabad Smart City</a>
              <a href="/">Diu Smart City</a>
              <a href="/">Erode Smart City</a>
              <a href="/">Faridabad Smart City</a>
              <a href="/">Gandhinagar Smart City</a>
              <a href="/">Gangtok Smart City</a>
              <a href="/">Greater Warangal Smart City</a>
              <a href="/">Guwahati Smart City</a>
              <a href="/">Gwalior Smart City</a>
              <a href="/">Hubballi-dharwad Smart City</a>
              <a href="/">Imphal Smart City</a>
              <a href="/">Indore Smart City</a>
              <a href="/">Itanagar Smart City</a>
              <a href="/">Jabalpur Smart City</a>
              <a href="/">Jaipur Smart City</a>
              <a href="/">Jalandhar Smart City</a>
              <a href="/">Jammu Smart City</a>
              <a href="/">Jhansi Smart City</a>
              <a href="/">Kakinada Smart City</a>
              <a href="/">Kalyan-dombivali Smart City</a>
              <a href="/">Kanpur Smart City</a>
              
              
              
            </div>
            <div>
              {/* <a href="/city-profile">City Profile</a> */}
              {/* <a href="/city-lights">City lights</a> */}
              {/* <a href="/blogs">Blog</a> */}
              {/* <a href="/opinions">Opinions</a> */}
              <a href="/">Karimnagar Smart City</a>
              <a href="/">Karnal Smart City</a>
              <a href="/">Kavaratti Smart City</a>
              <a href="/">Kochi Smart City</a>
              <a href="/">Kohima Smart City</a>
              <a href="/">Kota Smart City</a>
              <a href="/">Lucknow Smart City</a>
              <a href="/">Ludhiana Smart City</a>
              <a href="/">Madurai Smart City</a>
              <a href="/">Mangaluru Smart City</a>
              <a href="/">Moradabad Smart City</a>
              <a href="/">Muzaffarpur Smart City</a>
              <a href="/">Nagpur Smart City</a>
              <a href="/">Namchi Smart City</a>
              <a href="/">Nashik Smart City</a>
              <a href="/">New Delhi Smart City</a>
              <a href="/">New Town Kolkata Smart City</a>
              <a href="/">Panaji Smart City</a>
              <a href="/">Pasighat Smart City</a>
              <a href="/">Port Blair Smart City</a>
              <a href="/">Prayagraj Smart City</a>
              <a href="/">Puducherry Smart City</a>
              <a href="/">Pune Smart City</a>
              <a href="/">Raipur Smart City</a>
              <a href="/">Rajkot Smart City</a>
              <a href="/">Ranchi Smart City</a>
              <a href="/">Rourkela Smart City</a>
              <a href="/">Sagar Smart City</a>
              
              
              
            </div>
            <div>
              <a href="/">Saharanpur Smart City</a>
              <a href="/">Satna Smart City</a>
              <a href="/">Shillong Smart City</a>
              <a href="/">Shimla Smart City</a>
              <a href="/">Shivamogga Smart City</a>
              <a href="/">Silvassa Smart City</a>
              <a href="/">Solapur Smart City</a>
              <a href="/">Srinagar Smart City</a>
              <a href="/">Surat Smart City</a>
              <a href="/">Thane Smart City</a>
              <a href="/">Thanjavur Smart City</a>
              <a href="/">Thoothukudi Smart City</a>
              <a href="/">Tiruchirappalli Smart City</a>
              <a href="/">Tirunelveli Smart City</a>
              <a href="/">Tirupati Smart City</a>
              <a href="/">Tiruppur Smart City</a>
              <a href="/">Tumakuru Smart City</a>
              <a href="/">Udaipur Smart City</a>
              <a href="/">Ujjain Smart City</a>
              <a href="/">Vadodara Smart City</a>
              <a href="/">Varanasi Smart City</a>
              <a href="/">Varanasi Smart City</a>
              <a href="/">Vellore Smart City</a>
              <a href="/">Visakhapatnam Smart City</a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
