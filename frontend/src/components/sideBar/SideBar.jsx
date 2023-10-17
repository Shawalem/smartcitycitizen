import { useState } from "react";
import { BiUser } from "react-icons/bi";
import "./bar.scss";
import { Link } from "react-router-dom";
import NavImg from "../../assets/logo.png";
import useFetch from "../../hooks/useFetch";

const SideBar = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const usedEmails = []; // You can populate this array with existing emails

  const {data: sideadpanels} = useFetch("/sideadpanels?populate=*")
  if(!sideadpanels) {
    return null
  }

  const sideAdImg = sideadpanels?.[0]?.attributes?.img?.data?.attributes?.url;
  const sideAdLinks = sideadpanels?.[0]?.attributes?.adlink;

  const handleSignUp = () => {
    if (firstName && lastName && city && email) {
      if (usedEmails.includes(email)) {
        setErrorMessage("Email is already in use.");
        setSuccessMessage("");
      } else {
        setSuccessMessage("You have successfully signed up!");
        setErrorMessage("");
        usedEmails.push(email);
        setFirstName("");
        setLastName("");
        setCity("");
        setEmail("");
      }
    } else {
      setSuccessMessage("");
      setErrorMessage("Please fill in all fields.");
    }
  };

  return (
    <div className="sideBar">
      <div className="tab-1">
        <img src={NavImg} alt="poster" />
      </div>
      
      <div className="tab-3">
        <h4>BECAME A MEMBER</h4>
        <div>
          <BiUser />
          <p>
            Engage Citizens <br /> Ask for opinions / Conduct Surveys
          </p>
        </div>
        <div>
          <BiUser />
          <p>
            Manage all your <br /> Citizen Engagement Projects
          </p>
        </div>
        <div>
          <BiUser />
          <p>
            Access & Analyse Results <br /> of Citizens Engagement
          </p>
        </div>
        <div className="btn">
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      </div>
      <div className="tab-2">
        <a href={`${sideAdLinks}`} target="_blank">
        <img src={`${sideAdImg}`} alt="ad" />
        </a>
      </div>
      <div className="tab-4">
        <h4> TAKE PART IN CITIZEN ENGAGEMENT PROJECTS </h4>
        <hr />
        <p>
          Our Citizen Engagment Team invites Citizens Opinion / Particiaption in Surveys through
          email, direct to your inbox. We also email about Smart City Projects. Special Events / Gatherings in your city.
        </p>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSignUp}>SIGN ME UP</button>
        </div>
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
