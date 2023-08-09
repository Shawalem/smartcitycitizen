import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import "./bar.scss";
import { Link } from "react-router-dom";
import NavImg from "../../assets/logo.png";

const SideBar = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const usedEmails = []; // You can populate this array with existing emails

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
      <div className="tab-4">
        <h4>BECAME A MEMBER</h4>
        <div>
          <BiUser />
          <p>
            Build your own Industry <br /> Resource Library
          </p>
        </div>
        <div>
          <BiUser />
          <p>
            Gain access to all <br /> SmartCitiesWorld content
          </p>
        </div>
        <div>
          <BiUser />
          <p>
            Make the most of Industry <br /> Webinar Events
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
      <div className="tab-5">
        <h4>SMARTCITIESWORLD NEWSLETTERS (DAILY/WEEKLY)</h4>
        <hr />
        <p>
          Our editorial newsletter pulls together our latest news items into one
          email, direct to your inbox. We also feature our latest city
          interviews, Special Reports and Guest Opinions.
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
