import { useContext, useRef, useState } from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import SubLink from "../subLink/SubLink";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user: userInfo, setUser } = useContext(AuthContext);
  const verifyBox = useRef(HTMLDivElement);
  const dActive = useRef(HTMLDivElement);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector("input").value = "";
      setSearchTerm("");
    } else {
      console.log("none");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("smartCityCitizen");
    setUser({});
  };
  const subLinks = [
    {
      name: "About Us",
      ref: "/about-us",
    },
    {
      name: "Careers",
      ref: "/careers",
    },
    {
      name: "Contact us",
      ref: "/contact-us",
    },
  ];
  const handleBox = () => {
    verifyBox.current.classList.add("active_box");
    dActive.current.style.display = "block";
  };
  const handleActiveBox = () => {
    verifyBox.current.classList.remove("active_box");
    dActive.current.style.display = "none";
  };
  return (
    <div className="container">
      {userInfo?.verify_code ? (
        <div className="notify">
          <p>
            Verify your email <u onClick={handleBox}>click here</u>
          </p>
          <div className="code_box" ref={verifyBox}>
            <p>Put your code here!</p>
            <form>
              <input type="text" />
              <button>verify</button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="dActive" ref={dActive} onClick={handleActiveBox}></div>

      <div className="header_wrapper">
        <div className="social">
          <a href="https://twitter.com/Smartcityctizen">
            <div>
              <FaTwitter />
            </div>
          </a>
          <a href="https://www.linkedin.com/company/smartcitycitizen/">
            <div>
              <FaLinkedinIn />
            </div>
          </a>
        </div>
        <form onClick={handleSubmit}>
          <div className="search">
            <input
              onChange={handleSearchInput}
              type="text"
              className="input"
              placeholder="Enter a search term"
            />
            <div>
              <BsSearch />
            </div>
          </div>
        </form>
        <div className="header_nav">
          <SubLink
            mainLink="About"
            mainLinkRef="/about-us"
            subLinks={subLinks}
          />
          {userInfo?.email ? (
            <button onClick={handleLogout}>log out</button>
          ) : (
            <>
              <div className="link">
                <Link to="/login">Login</Link>
              </div>
              <div className="link">
                <Link to="/register">Register</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
