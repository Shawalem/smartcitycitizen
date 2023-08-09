import React from "react";
import "./advisory.scss";
import { Helmet } from "react-helmet";
import { MemberCard } from '../../../components'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Advisory = () => {
  return (
    <>
      <Helmet>
        <title>Advisory Panel - Smart City Citizen</title>
        <meta name="description" content="Advisory panel" />
      </Helmet>
      <section>
        <div className="container">
          <div className="advisory_wrapper">
            <div className="heading">
              <h1>Advisory Panel</h1>
              <p>
                SmartCitiesWorld has appointed experts from the global smart
                cities community to its new Editorial Advisory Board to reflect
                the changing needs of cities and the physical and digital
                solutions available. The 14 strong board will meet twice a year
                to discuss the key issues affecting smart city development and
                provide expertise as to the direction of SmartCitiesWorld’s
                editorial agenda. The Board will help to ensure that
                SmartCitiesWorld’s news and analysis of current and emerging
                topics continues to be market leading.
              </p>
            </div>
            <div className="advisory_member">
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advisory;
