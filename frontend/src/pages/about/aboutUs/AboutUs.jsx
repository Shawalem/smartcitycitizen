import React from "react";
import "./aboutUs.scss";
import { Link } from "react-router-dom";
import { SideBar } from "../../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../../hooks/useFetch";

const AboutUs = () => {
  const { data: aboutpages } = useFetch("/aboutpages?populate=*");
  console.log(aboutpages);

  return (
    <>
      <Helmet>
        <title>Our Mission - Smart City Citizen</title>
        <meta name="description" content="about us" />
      </Helmet>
      <section>
        <div className="container">
          <div className="aboutUs_wrapper">
            <div className="about">
              <div className="about_heading">
                <h1>Our Mission</h1>
                <p>{aboutpages?.[0].attributes?.ourmission}</p>
              </div>
              <div className="about_desc">
                <div className="value">
                  <h5>Our Values</h5>
                  <p>{aboutpages?.[0].attributes?.our_values}</p>
                  <div>
                    <h5>COLLABORATIVE</h5>
                    <hr />
                    <p>{aboutpages?.[0].attributes?.collaborative}</p>
                  </div>
                  <div>
                    <h5>SUSTAINABLE</h5>
                    <hr />
                    <p>{aboutpages?.[0].attributes?.sustainable}</p>
                  </div>
                  <div>
                    <h5>TRANSPARENT </h5>
                    <hr />
                    <p>{aboutpages?.[0].attributes?.transparent}</p>
                  </div>
                  <div>
                    <h5>INCLUSIVE</h5>
                    <hr />
                    <p>
                      {aboutpages?.[0].attributes?.inclusive}
                    </p>
                  </div>
                  <div>
                    <h5>INNOVATIVE</h5>
                    <hr />
                    <p>
                      {aboutpages?.[0].attributes?.innovative}
                    </p>
                  </div>
                  <div>
                    <h5>SHARING</h5>
                    <hr />
                    <p>
                    {aboutpages?.[0].attributes?.sharing}

                    </p>
                  </div>
                  <div>
                    <h5>PASSIONATE</h5>
                    <hr />
                    <p>
                    {aboutpages?.[0].attributes?.passionate}

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <SideBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
