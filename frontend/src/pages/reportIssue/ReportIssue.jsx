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
                <p>Location</p>
                <input className="input_location" type="text" />
              </div>
              <div className="form_input">
                <p>Select Issue Category:</p>
                <select id="issueCategory" name="category">
                  <option value="roads">Roads</option>
                  <option value="potholes">
                  Potholes
                  </option>
                  <option value="utilities">Utilities</option>
                  <option value="cracks_eroded_surfaces">Cracks/Eroded Surfaces</option>
                  <option value="inadequate_signage">Inadequate Signage</option>
                  <option value="street_vendors_obstructing">Street Vendors Obstructing</option>
                  <option value="public_transportation">Public Transportation</option>
                  <option value="bus_shelters">Bus Shelters (damaged, inadequate seating)</option>
                  <option value="metro_shelters">Metro Stations (cleanliness, security issues)</option>
                  <option value="traffic_signals">Traffic Signals (malfunctioning, not synchronized)</option>
                  <option value="beggars_signals">Beggars at Signals</option>
                  <option value="traffic_violators">Traffic Violators</option>
                  <option value="utilities">Utilities</option>
                  <option value="water_leaks">Water Leaks</option>
                  <option value="electricity_outages">Electricity Outages</option>
                  <option value="broken_streetlights">Broken Streetlights</option>
                  <option value="gas_leaks">Gas Leaks</option>
                  <option value="cable_disruptions">Cable/Telecom Disruptions</option>
                  <option value="street_dogs">Street Dogs</option>
                  <option value="stay_dog_menace">Stray Dog Menace</option>
                  <option value="dog_bites">Dog bites</option>
                  <option value="abandoned_pets">Abandoned Pets</option>
                  <option value="waste_accumulation">Waste Accumulation</option>
                  <option value="overflowing_trash_bins">Overflowing Trash Bins</option>
                  <option value="illegal_dumping_sites">Illegal Dumping Sites</option>
                  <option value="hazardous_waste">Hazardous Waste</option>
                  <option value="medical_waste">Medical Waste</option>
                  <option value="traffic_congestion">Traffic Congestion</option>
                  <option value="regular_traffic_jams">Regular Traffic Jams</option>
                  <option value="illegal_parking">Illegal Parking</option>
                  <option value="no_functional_traffic_lights">Non-functional Traffic Lights</option>
                  <option value="lack_of_traffic_police">Lack of Traffic Police</option>
                  <option value="women_safety">Women Safety</option>
                  <option value="poorly_lit_areas">Poorly Lit Areas</option>
                  <option value="harassment_reports">Harassment Reports</option>
                  <option value="unsafe_public_transportation">Unsafe Public Transportation</option>
                  <option value="lack_of_security_patrol">Lack of Security Patrol</option>
                  <option value="pedestrian_pathways">Pedestrian Pathways</option>
                  <option value="obstructions">Obstructions</option>
                  <option value="uneven_footpaths">Uneven Footpaths</option>
                  <option value="lack_ramps_abled">Lack of Ramps for Differently-abled</option>
                  <option value="encroachments">Encroachments</option>
                  <option value="Other">Other</option>
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
              
              <button>submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportIssue;
