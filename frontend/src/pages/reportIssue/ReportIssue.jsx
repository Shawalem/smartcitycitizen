import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import "./issue.scss";
import { AuthContext } from "../../contexts/UserContext";
import axios from "axios";
import { toast } from "react-toastify";

const ReportIssue = () => {
  const { user,setSupport } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const description = form.description.value;
    const category = form.category.value;
    const file = form.file.value;
    const info = {
      description,
      category,
      image: file,
      name: user.name,
      email: user.email,
    };
    const userinfo = {
      name: user.name,
      email: user.email,
    };
    axios
      .get(
        `${import.meta.env.VITE_REACT_APP_URL_EXPRESS}/users?name=${
          user.name
        }&email=${user.email}`
      )
      .then((userRes) => {
        const isExist = userRes.data[0];
        if (isExist) {
          info.userId = userRes.data[0]._id;
          axios
            .post(`${import.meta.env.VITE_REACT_APP_URL_EXPRESS}/issues`, info)
            .then((res) => {
              toast.success("Issue Submitted");
            })
            .catch((er) => console.log(er.message));
        } else {
          axios
            .post(
              `${import.meta.env.VITE_REACT_APP_URL_EXPRESS}/users`,
              userinfo
            )
            .then((userRes) => {
              info.userId = userRes.data._id;
              axios
                .post(
                  `${import.meta.env.VITE_REACT_APP_URL_EXPRESS}/issues`,
                  info
                )
                .then((res) => {
                  toast.success("Issue Submitted");
                })
                .catch((er) => console.log(er.message));
            })
            .catch((er) => {
              console.log(er.message);
            });
        }
      })
      .catch((er) => {
        console.log(er.message);
      });
  };
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
            <form onSubmit={handleSubmit}>
              <h1>Report an infrastructure issue:</h1>
              <div className="form_input">
                <p>Describe issue</p>
                <textarea
                  placeholder="Enter details of the issue here..."
                  name="description"
                />
              </div>
              <div className="form_input">
                <p>Select Issue Category:</p>
                <select id="issueCategory" name="category">
                  <option value="roads">Roads</option>
                  <option value="public_transport">
                    Public Transportation
                  </option>
                  <option value="utilities">Utilities</option>
                </select>
              </div>
              <div className="form_input">
                <p>Upload Image (optional):</p>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  name="file"
                />
              </div>
              <div className="form_input"></div>
              <button>submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportIssue;
