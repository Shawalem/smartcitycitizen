import React from "react";
import { Helmet } from "react-helmet";
import "./issue.scss";

const ReportIssue = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Report Issue - Smart City Citizen</title>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="news,smartcitycitizen, smartcity, india, news"
        />
        <meta name="description" content="" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <section>
        <div className="container">
          <div className="issue_wrapper">
            <form>
              <h1>Report an infrastructure issue:</h1>
              <div className="form_input">
                <p>Describe issue</p>
                <textarea placeholder="Enter details of the issue here..." />
              </div>
              <div className="form_input">
                <p>Select Issue Category:</p>
                <select id="issueCategory">
                  <option value="roads">Roads</option>
                  <option value="public_transport">
                    Public Transportation
                  </option>
                  <option value="utilities">Utilities</option>
                </select>
              </div>
              <div className="form_input">
                <p>Upload Image (optional):</p>
                <input type="file" id="imageUpload" accept="image/*" />
              </div>
              <div className="form_input">
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportIssue;
