import { Ad, Header } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navBar/Navbar";
import { Route, Routes } from "react-router-dom";
import {
  AboutUs,
  Advertise,
  Advisory,
  CityProfile,
  ContactUs,
  EditorsBlog,
  Home,
  Login,
  News,
  NewsDetails,
  Opinions,
  Register,
  Research,
  SpecialReport,
  Team,
  Trend,
  Webinars,
  WhitePaper,
} from "./pages";
import Footer from "./components/footer/Footer";
import SearchPage from "./pages/search/SearchPage";
import Events from "./pages/events/events";
import Blogs from "./pages/blogs/blogs";
import Smartproject from "./pages/smartproject/smartproject";
import Articles from "./pages/articles/articles";
import Companies from "./pages/companies/companies";
import Inthenews from "./pages/inthenews/inthenews";
import Getinvolved from "./pages/connectivityAndData/getinvolved/getinvolved";
import Survey from "./pages/connectivityAndData/survey/survey";
import Suggestions from "./pages/connectivityAndData/suggestions/suggestions";
import Donate from "./pages/connectivityAndData/donate/donate";
import Volunteer from "./pages/connectivityAndData/volunteer/volunteer";
import Safetysecurity from "./pages/governanceCitizen/safetysecurity";
import DgitalInfrastructure from "./pages/governanceCitizen/dgitalInfrastructure/dgitalInfrastructure";
import Emergencysystem from "./pages/governanceCitizen/emergencysystem/emergencysystem";
import Cybersecurity from "./pages/governanceCitizen/cybersecurity/cybersecurity";
import Pedestrian from "./pages/governanceCitizen/pedestrian/pedestrian";
import Smartbuildings from "./pages/energyEnvironment/smartbuildings";
import Commercialbuilding from "./pages/energyEnvironment/commercialbuilding/commercialbuilding";
import Smartresidence from "./pages/energyEnvironment/smartresidence/smartresidence";
import Retailrecreationalspaces from "./pages/energyEnvironment/retailrecreationalspaces/retailrecreationalspaces";
import Municipalbuildings from "./pages/energyEnvironment/municipalbuildings/municipalbuildings";
import Parksandgreenspaces from "./pages/energyEnvironment/parksandgreenspaces/parksandgreenspaces";
import Smartindustries from "./pages/energyEnvironment/smartindustries/smartindustries";
import Citizenhealthwellbeing from "./pages/mobility/citizenhealth";
import Purewater from "./pages/mobility/purewater/purewater";
import Mobilehealthcamps from "./pages/mobility/mobilehealthcamps/mobilehealthcamps";
import Seniorcitizenprograms from "./pages/mobility/seniorcitizenprograms/seniorcitizenprograms";
import Noiseairquality from "./pages/mobility/noiseairquality/noiseairquality";
import Mobilityconnectivity from "./pages/urbanSpace/mobilityconnectivity";
import Electricvehiclecharging from "./pages/urbanSpace/electricvehiclecharging/electricvehiclecharging";
import Lastmileconnectivity from "./pages/urbanSpace/lastmileconnectivity/lastmileconnectivity";
import Publictransport from "./pages/urbanSpace/publictransport/publictransport";
import Trafficcongestion from "./pages/urbanSpace/trafficcongestion/trafficcongestion";
import Energyenvironment from "./pages/energyandenvironment/energyenvironment";
import Cleanenergy from "./pages/energyandenvironment/cleanenergy/cleanenergy";
import Wastemanagement from "./pages/energyandenvironment/wastemanagement/wastemanagement";
import Climateweather from "./pages/energyandenvironment/climateweather/climateweather";
import Sustainability from "./pages/energyandenvironment/sustainability/sustainability";
import Solarprogram from "./pages/energyandenvironment/solarprogram/solarprogram";
import Podcast from "./pages/podcast/Podcast";
import Citizenengagement from "./pages/connectivityAndData/citizenengagement";
import Jobs from "./pages/jobs/jobs";

import Partners from "./pages/partners/partners";
import Footercitylights from "./pages/footercitylights/footercitylights";
import Smartcities from "./pages/smartcities/smartcities";
// import Citylights from "./pages/citylights/citylights";


const App = () => {
  return (
    <>
      <header>
        <Header />
        <Ad/>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* login register ------ */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* About us pages ------ */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Team />} />
          <Route path="/advisory-panel" element={<Advisory />} />
          <Route path="/advertise-with-us" element={<Advertise />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/news" element={<News />} />

          {/* city */}
          <Route path="/city-profile" element={<CityProfile />} />
          <Route path="/smart-city" element={<Smartcities />} />
          <Route path="/smart-city-projects" element={<Smartproject />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/inthenews" element={<Inthenews />} />

          {/* opinion */}
          <Route path="/editors-blog" element={<EditorsBlog />} />
          <Route path="/opinions" element={<Opinions />} />

          <Route path="/reports" element={<SpecialReport />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* research */}
          <Route path="/research" element={<Research />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/white-papers" element={<WhitePaper />} />
          <Route path="/trend-reports" element={<Trend />} />
          <Route path="/podcasts" element={<Podcast />} />

          <>
            {/* Connectivity */}
            <Route path="/citizen-engagement" element={<Citizenengagement />} />
            <Route path="/get-involved" element={<Getinvolved />} />
            <Route path="/events" element={<Events />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/suggestions" element={<Suggestions />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </>

          {/* Safetysecurity  */}
          <Route path="/safety-security" element={<Safetysecurity />} />
          <Route path="/emergency-system" element={<Emergencysystem />} />
          <Route
            path="/digital-Infrastructure"
            element={<DgitalInfrastructure />}
          />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/pedestrian" element={<Pedestrian />} />

          {/* Smart Buildings */}
          <Route path="/smart-buildings" element={<Smartbuildings />} />
          <Route path="/commercial-building" element={<Commercialbuilding />} />
          <Route path="/smart-residence" element={<Smartresidence />} />
          <Route
            path="/retail-recreational-spaces"
            element={<Retailrecreationalspaces />}
          />
          <Route path="/municipal-buildings" element={<Municipalbuildings />} />
          <Route path="/parks-greenspaces" element={<Parksandgreenspaces />} />
          <Route path="/smart-industries" element={<Smartindustries />} />

          {/* mobility */}
          <Route
            path="/citizen-health-wellbeing"
            element={<Citizenhealthwellbeing />}
          />
          <Route path="/pure-water" element={<Purewater />} />
          <Route
            path="/mobile-health-camps-clinics"
            element={<Mobilehealthcamps />}
          />
          <Route
            path="/senior-citizen-programs"
            element={<Seniorcitizenprograms />}
          />
          <Route path="/noise-air-quality" element={<Noiseairquality />} />

          {/* urban space */}
          <Route
            path="/mobility-connectivity"
            element={<Mobilityconnectivity />}
          />
          <Route
            path="/electric-vehicle-charging"
            element={<Electricvehiclecharging />}
          />
          <Route
            path="/last-mile-connectivity"
            element={<Lastmileconnectivity />}
          />
          <Route path="/public-transport" element={<Publictransport />} />
          <Route path="/traffic-congestion" element={<Trafficcongestion />} />

          <Route path="/energy-environment" element={<Energyenvironment />} />
          <Route path="/clean-energy" element={<Cleanenergy />} />
          <Route path="/waste-management" element={<Wastemanagement />} />
          <Route path="/climate-weather" element={<Climateweather />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/solar-program" element={<Solarprogram />} />

          <Route path="/city-lights" element={<Footercitylights />} />
          {/* news details */}
          <Route path="/details/:collection/:id" element={<NewsDetails />} />
          {/* search  */}
          <Route path="/search" element={<SearchPage />} />

          <Route path="/jobs" element={<Jobs />} />
          <Route path="/parners" element={<Partners />} />
        </Routes>
        <ToastContainer />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
