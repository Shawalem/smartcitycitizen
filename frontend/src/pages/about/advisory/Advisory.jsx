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
        

        <script>
          {(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-NDTMGD29")}
        </script>

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

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDTMGD29"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        
      </section>
    </>
  );
};

export default Advisory;
