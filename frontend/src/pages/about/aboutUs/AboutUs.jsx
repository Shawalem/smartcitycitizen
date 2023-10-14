import React from "react";
import "./aboutUs.scss";
import { Link } from "react-router-dom";
import { SideBar } from "../../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../../hooks/useFetch";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const AboutUs = () => {
  const { data: aboutpages } = useFetch("/aboutpages?populate=*");
  console.log(aboutpages);

  return (
    <>
      <Helmet>
        <title>Our Mission - Smart City Citizen</title>
        <meta charSet="utf-8"/>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, world news, mission"/>
        <meta name="description" content="smartcitizen mission" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <section>
        <div className="container">
          <div className="aboutUs_wrapper">
            <div className="about">
              <div className="about_heading">
                <h1>Our Mission</h1>
                <ReactMarkdown>{aboutpages?.[0].attributes?.ourmission}</ReactMarkdown>
              </div>
              <div className="about_desc">
                <div className="value">
                  <h5>Our Values</h5>
                  <ReactMarkdown>{aboutpages?.[0].attributes?.our_values}</ReactMarkdown>
                  <div>
                    <h5>COLLABORATIVE</h5>
                    <hr />
                    <ReactMarkdown>{aboutpages?.[0].attributes?.collaborative}</ReactMarkdown>
                  </div>
                  <div>
                    <h5>SUSTAINABLE</h5>
                    <hr />
                    <ReactMarkdown>{aboutpages?.[0].attributes?.sustainable}</ReactMarkdown>
                  </div>
                  <div>
                    <h5>TRANSPARENT </h5>
                    <hr />
                    <ReactMarkdown>{aboutpages?.[0].attributes?.transparent}</ReactMarkdown>
                  </div>
                  <div>
                    <h5>INCLUSIVE</h5>
                    <hr />
                    <ReactMarkdown>
                      {aboutpages?.[0].attributes?.inclusive}
                    </ReactMarkdown>
                  </div>
                  <div>
                    <h5>INNOVATIVE</h5>
                    <hr />
                    <ReactMarkdown>
                      {aboutpages?.[0].attributes?.innovative}
                    </ReactMarkdown>
                  </div>
                  <div>
                    <h5>SHARING</h5>
                    <hr />
                    <ReactMarkdown>
                    {aboutpages?.[0].attributes?.sharing}

                    </ReactMarkdown>
                  </div>
                  <div>
                    <h5>PASSIONATE</h5>
                    <hr />
                    <ReactMarkdown>
                    {aboutpages?.[0].attributes?.passionate}

                    </ReactMarkdown>
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
