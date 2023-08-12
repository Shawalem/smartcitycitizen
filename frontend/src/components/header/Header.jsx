import { useState } from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import SubLink from "../subLink/SubLink";

const Header = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`)
      document.querySelector('input').value = '';
      setSearchTerm('');
    } else {
      console.log("none");
    }
  }

  const subLinks = [
    {
      name:"About Us",
      ref:'/about-us'
    },
    {
      name:"Careers",
      ref:'/careers'
    },
    {
      name:"Contact us",
      ref:'/contact-us'
    }
  ]
  return (
    <div className="container">
      <div className="header_wrapper">
        <div className="social">
          <a href="https://twitter.com/Smartcityctizen">
            <div>
              <FaTwitter />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/smartcitycitizen/">
            <div>
              <FaLinkedinIn />
            </div>
          </a>
        </div>
        <form onClick={handleSubmit}>
          <div className="search">
            <input onChange={handleSearchInput} type="text" className="input" placeholder="Enter a search term" />
            <div>
              <BsSearch />
            </div>
          </div>
        </form>
        <div className="header_nav">
          <SubLink mainLink='About' mainLinkRef='/about-us' subLinks={subLinks} />
          <div className="link">
            <Link to="/login">Login</Link>
          </div>
          <div className="link">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
