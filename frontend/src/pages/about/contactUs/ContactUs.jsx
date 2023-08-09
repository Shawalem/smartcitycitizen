import React from "react";
import "./contact.scss";
import { Helmet } from "react-helmet";
import useFetch from "../../../hooks/useFetch";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


const ContactUs = () => {

  const { data: contactuses } = useFetch("/contactuses?populate=*");
  console.log(contactuses);

  return (
    <>
      <Helmet>
        <title>Contact Us - Smart City Citizen</title>
        <meta name="description" content="contact us" />
      </Helmet>
      <section>
        <div className="container">
          <div className="contact_wrapper">
            <h1>Contact Us</h1>
            <h2>{contactuses?.[0]?.attributes.heading_one}</h2>
            <hr />
            <li>
              {contactuses?.[0]?.attributes.company_address}
            </li>
            <li>{contactuses?.[0]?.attributes.email}</li>
            <li>{contactuses?.[0]?.attributes.number}</li>
            <li>{contactuses?.[0]?.attributes.simple_para_one}</li>
            <h2>{contactuses?.[0]?.attributes.heading_two}</h2>
            <hr />
            <p>
              {contactuses?.[0]?.attributes.simple_para_two}
            </p>
            <h2>{contactuses?.[0]?.attributes.heading_three}</h2>
            <p>
              {contactuses?.[0]?.attributes.simple_para_three}
            </p>
            <p>view our team</p>
            <h2>FIND US</h2>
            <hr />
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074421903857!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sbd!4v1689248712869!5m2!1sen!2sbd"
                width="100%"
                height="500"
                style={{border:"none"}}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
