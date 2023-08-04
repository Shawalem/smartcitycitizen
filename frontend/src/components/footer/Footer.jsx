import "./footer.scss";

const Footer = () => {
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
              <a href="/partner-withus">Partner with us</a>
              <a href="/contact-us">Contact us</a>
              <a href="/smartcity-projectreports">Smart City Project Reports</a>
            </div>
            <div>
              <a href="/jobs">Jobs</a>
              <a href="/parners">Partners</a>
              <a href="/citizen-engagement">Citizen Engagement</a>
              <a href="/support">Support</a>
            </div>
            <div>
              <a href="/city-profile">City Profile</a>
              <a href="/city-lights">City lights</a>
              <a href="/editors-blog">Blog</a>
              <a href="/opinions">Opinions</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
