import { useContext, useRef, useState } from "react";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import "./header.scss";
import { Link, json, useNavigate } from "react-router-dom";
import SubLink from "../subLink/SubLink";
import { AuthContext } from "../../contexts/UserContext";
import { toast } from "react-toastify";
import axios from "axios";

const Header = () => {
  const { user: userInfo, setUser, vUser, support } = useContext(AuthContext);
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

  const handleVerifySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const codeNumber = form.code.value;
    console.log(userInfo);

    if (
      userInfo?.email === vUser?.email &&
      vUser?.verify_code === +codeNumber
    ) {
      axios
        .post(
          "https://backend-app-lft6m.ondigitalocean.app/api/vusers",
          {
            data: {
              email: userInfo?.email || vUser.email,
            },
          },
          {
            headers: {
              Authorization:
                "Bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN,
            },
          }
        )
        .then((res) => {
          const localData = JSON.parse(
            localStorage.getItem("smartCityCitizen")
          );
          localData.iv = true;
          localStorage.setItem("smartCityCitizen", JSON.stringify(localData));
          setUser({
            name: userInfo?.name,
            email: userInfo?.email,
            jwt: userInfo?.jwt,
            isVerified: true,
          });
          localStorage.removeItem("vSmartCityCitizen");
          toast.success("Registration Successful!🎉");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      toast.error("Email or verify code didn't match!");
    }
    form.reset();
    handleActiveBox();
  };
  return (
    <div className="container">
      {userInfo.isVerified === false ? (
        <div className="notify">
          <p className="notify_p">
            Verify your email <u onClick={handleBox}>Click Here!</u>
          </p>
          <div className="code_box" ref={verifyBox}>
            <p>Put your code here!</p>
            <form onSubmit={handleVerifySubmit}>
              <input type="text" name="code" required maxLength={6} />
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
              <FaXTwitter />
            </div>
          </a>
          <a href="https://www.linkedin.com/company/smartcitycitizen/">
            <div>
              <FaLinkedinIn />
            </div>
          </a>
          <a href="https://www.youtube.com/@Smartcitycitizen">
            <div>
              <FaYoutube />
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
            <>
              <button className="logout_btn" onClick={handleLogout}>
                log out
              </button>
              <Link to='/support' className="support_btn">Support</Link>
            </>
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
