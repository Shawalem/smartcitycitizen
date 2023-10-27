import React from "react";
import "./advertise.scss";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

const Advertise = () => {



  return (
    <>
    <Helmet>
      <title>Advertise With Us - Smart City Citizen</title>
      <meta name="description" content="Advertise with us"/>

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
          <div className="advertise_wrapper">
            <div className="heading">
              <h1>Put your brand in front of smart cities leaders</h1>
            </div>
            <div className="audience">
              <h4>AUDIENCE</h4>
              <h1>Smart Cities Citizen by numbers</h1>
              <div className="count">
                <div className="count_wrapper">
                  <div>
                    <img src="./images/Web.png" alt="web png" />
                    <p>1,1000,000</p>
                    <p>website visits</p>
                  </div>
                  <div>
                    <img src="./images/Global.png" alt="global" />
                    <p>39,000+</p>
                    <p>global members</p>
                  </div>
                  <div>
                    <img src="./images/Cities.png" alt="city" />
                    <p>2,000+</p>
                    <p>cities represented</p>
                  </div>
                  <div>
                    <img src="./images/Countries.png" alt="map" />
                    <p>209</p>
                    <p>countries & regions</p>
                  </div>
                </div>
                <div className="count_desc">
                  <div>
                    <p>
                      If you are looking for ways to connect with audiences such
                      as:
                    </p>
                    <li>City & Government leaders</li>
                    <li>Utility & energy providers</li>
                    <li>Transport authority professional’s</li>
                    <li>Telecommunications experts</li>
                    <li>Built Environment professionals</li>
                    <li>Education authorities</li>
                    <li>Health & finance experts</li>
                    <li>Manufacturing and logistics</li>
                  </div>
                  <div>
                    <p>
                      ... or interested in generating new business development
                      opportunities, market research, partnership opportunities,
                      pilot or commercial deployments then SCW can help you.
                    </p>
                    <p>
                      Please reach out to our team on johno@smartcitiesworld.net
                      and we can arrange a short consultation to identify how we
                      can best help you achieve your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="client">
              <h4>CLIENTS</h4>
              <h1>Meet some of our clients</h1>
              <div>
                <img src="./images/client.png" alt="" />
              </div>
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

export default Advertise;
