import "./navbar.scss";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import {RxCross2} from 'react-icons/rx'
import { useRef, useState, useEffect } from "react";
import NavImg from '../../assets/logo.png'

const Navbar = () => {
  const targetLink = useRef()
  const Nav = useRef()

  const handleLink = (e) => {
    const parentElem = e.target.parentNode;
    const subLink = parentElem.childNodes[1];
    subLink.classList.toggle('subLinkActive')
    console.log(subLink);
  };
  const handleBar = ()=>{
    Nav.current.classList.add('navActive')
  }
  const handleCross = ()=>{
    Nav.current.classList.remove('navActive')
  }

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
              <div className="realLink" onClick={handleLink}>
                <Link to="/city-profile">City</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink" ref={targetLink}>
                <Link to="/city-profile">City Profile</Link>
                <Link to="/city-lights">City Lights</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/opinions">Opinions</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink">
                <Link to="/editors-blog">Editor&apos;s Blog</Link>
                <Link to="/opinions">Opinions</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink">
                <Link to="/special-reports">Special Reports</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/research">Research</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink">
                <Link to="/webinars">Webinars</Link>
                <Link to="/white-papers">White Papers</Link>
                <Link to="/trend-reports">Trend Reports</Link>
                <Link to="/podcasts">Podcasts</Link>
              </div>
            </div>
          </div>
          <div className="nav2">
            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/connectivity-and-data">Connectivity & Data</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink">
                <Link to="/ai-and-machine-learning">AI and Machine Learning</Link>
                <Link to="/analytics">Analytics</Link>
                <Link to="/data-marketplace">Data marketplace & monetization</Link>
                <Link to="/data-privacy">Data privacy & security</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/governance-and-citizen">Governance and Citizen</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink">
                <Link to="/citizen-engagement">Citizen engagement</Link>
                <Link to="/citizen-security">Citizen security</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/energy-environment">Energy & Environment</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink">
                <Link to="/air-quality">Air quality</Link>
                <Link to="/batteries-renewable">Batteries and renewable</Link>
                <Link to="/solar-power">Solar power</Link>
                <Link to="/wind-power">Wind power</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/mobility">Mobility</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink">
                <Link to="/air-travel">Air Travel</Link>
                <Link to="/electric-vehicles">Electric vehicles</Link>
                <Link to="/rail-travel">Rail Travel</Link>
              </div>
            </div>
            <div className="link">
              <div className="realLink" onClick={handleLink}>
                <Link to="/urban-space">Urban Space</Link>
                <RiArrowDownSLine />
              </div>
              <div className="subLink">
                <Link to="/commercial-buildings">Commercial buildings</Link>
                <Link to="/cultural-space">Cultural space</Link>
                <Link to="/municipal-buildings">Municipal buildings</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="search_wrap">
          <div className="membership">
            <Link to="/register">MEMBERSHIP</Link>
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
