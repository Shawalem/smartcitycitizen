import "./navbar.scss";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";
import NavImg from "../../assets/logo.png";

const Navbar = () => {
  const targetLink = useRef();
  const Nav = useRef();

  const handleLink = (e) => {
    const parentElem = e.target.parentNode;
    const subLink = parentElem.childNodes[1];
    subLink.classList.toggle("subLinkActive");
    console.log(subLink);
  };
  const handleBar = () => {
    Nav.current.classList.add("navActive");
  };
  const handleCross = () => {
    Nav.current.classList.remove("navActive");
  };

  return (
    <div className="container Nav" id="Navbar">
      <div className="navbar_wrapper">
        <div className="logo">
          <Link to="/">
            <img src={NavImg} alt="logo" />
          </Link>
        </div>  
        <nav ref={Nav}>
          <div className="cross" onClick={handleCross}>
            <RxCross2 />
          </div>
          <div className="nav1">
            <div className="link">
              <div className="realLink">
                <Link to="/news">News</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink">
                <Link to="/reports">Reports</Link>
              </div>
            </div>
            
            <div className="link">
              <div className="realLink">
                <Link to="/opinions">Opinions</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink">
                <Link to="/events">Events</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink">
                <Link to="/blogs">Blogs</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink">
                <Link to="/podcasts">Podcasts</Link>
              </div>
            </div>
          </div>

          <div className="nav2">
            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/smart-city">Smart Cities</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink" ref={targetLink}>
                <Link to="/city-profile">City Profile</Link>
                <Link to="/smart-city-projects">Smart City Projects</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/companies">Companies</Link>
                <Link to="/inthenews">In the News</Link>
              </div>
            </div>

            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/citizen-engagement">Citizen Engagement</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink">
                <Link to="/get-involved">
                	Get Involved
                </Link>
                <Link to="/events">Event</Link>
                <Link to="/survey">
                  survey
                </Link>
                <Link to="/suggestions">Suggestions</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/volunteer">Volunteer</Link>
              </div>
            </div>

            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/safety-security">Safety & Security</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink">
                <Link to="/digital-Infrastructure">Digital Infrastructure</Link>
                <Link to="/emergency-system">Emergency System</Link>
                <Link to="/cybersecurity">Cybersecurity</Link>
                <Link to="/pedestrian">Pedestrian</Link> 
              </div>
            </div>
            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/smart-buildings">Smart Buildings</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink">
                <Link to="/commercial-building">Commercial Building</Link>
                <Link to="/smart-residence">Smart Residence</Link>
                <Link to="/retail-recreational-spaces">Retail & Recreational spaces</Link>
                <Link to="/municipal-buildings">Municipal Buildings</Link>
                <Link to="/parks-greenspaces">Parks and Greenspaces</Link>
                <Link to="/smart-industries">Smart Industries</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/citizen-health-wellbeing">Health & Wellbeing </Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink">
                <Link to="/pure-water">Pure Water</Link>
                <Link to="/mobile-health-camps-clinics">Mobile Health Camps & Clinics</Link>
                <Link to="/senior-citizen-programs">Senior Citizen Programs</Link>
                <Link to="/noise-air-quality">Noise & Air Quality</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/mobility-connectivity">Mobility & Connectivity</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink">
                <Link to="/electric-vehicle-charging">Electric Vehicle and Charging</Link>
                <Link to="/last-mile-connectivity">Last mile Connectivity</Link>
                <Link to="/public-transport">Public Transport</Link>
                <Link to="/traffic-congestion">Traffic Congestion</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/energy-environment">Energy & Environment</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink">
                <Link to="/clean-energy">Clean Energy</Link>
                <Link to="/waste-management">Waste Management</Link>
                <Link to="/climate-weather">Climate & Weather</Link>
                <Link to="/sustainability">Sustainability</Link>
                <Link to="/solar-program">Solar Program</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="search_wrap">
          <div className="membership">
            <Link to="/rewardtoken"><button>EARN SMART CITY CITIZEN TOKENS</button></Link>
          </div>
          <div className="bar" onClick={handleBar}>
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
