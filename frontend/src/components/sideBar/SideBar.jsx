import React from 'react'
import { BiUser } from "react-icons/bi";
import './bar.scss'
import { Link } from 'react-router-dom';
import NavImg from '../../assets/logo.png';

const SideBar = () => {
  return (
    <div className="sideBar">
              <div className="tab-1">
                <img src={NavImg} alt="poster" />
              </div>
              <div className="tab-4">
                <h4>BECAME A MEMBER</h4>
                <div>
                  <BiUser />
                  <p>Build your own Industry <br /> Resource Library</p>
                </div>
                <div>
                  <BiUser />
                  <p>Gain access to all <br /> SmartCitiesWorld content</p>
                </div>
                <div>
                  <BiUser />
                  <p>Make the most of Industry <br /> Webinar Events</p>
                </div>
                <div className="btn">
                    <Link to={'/register'}><button>Register</button></Link>
                    <Link to={'/login'}><button>Login</button></Link>
                </div>
              </div>
              <div className="tab-5">
                <h4>SMARTCITIESWORLD NEWSLETTERS (DAILY/WEEKLY)</h4>
                <hr />
                <p>Our editorial newsletter pulls together our latest news items into one email, direct to your inbox. We also feature our latest city interviews, Special Reports and Guest Opinions.</p>
                <div>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                    <input type="text" placeholder='Email' />
                    <button>SIGN ME UP</button>
                </div>
              </div>
            </div>
  )
}

export default SideBar