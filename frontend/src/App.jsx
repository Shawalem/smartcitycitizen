import { Ad, Header } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navBar/Navbar";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";
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
  TokenReward,
  Trend,
  Webinars,
  WhitePaper,
} from "./pages";
import Xmlsitemap from "./pages/xmlsitemap/Xmlsitemap";
import Robot from "./pages/robots/Robot";
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
import PrivateRoute from "./hooks/PrivetRoute";
import ReportIssue from "./pages/reportIssue/ReportIssue";
import AdminForm from "./pages/admin/AdminForm";
import Support from "./pages/support/Support";

const App = () => {
  const TRACKING_ID = "G-77C21C31E4";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: "pageview", page: "/", title: "Smart City Citizen" });
  ReactGA.send({ hitType: "pageview", page: "/news", title: "News" });
  ReactGA.send({ hitType: "pageview", page: "/reports", title: "Reports" });
  ReactGA.send({ hitType: "pageview", page: "/opinions", title: "Opinions" });
  ReactGA.send({ hitType: "pageview", page: "/events", title: "Events" });
  ReactGA.send({ hitType: "pageview", page: "/blogs", title: "Blogs" });
  ReactGA.send({ hitType: "pageview", page: "/podcasts", title: "Podcasts" });
  ReactGA.send({
    hitType: "pageview",
    page: "/smart-city",
    title: "Smart Cities",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/city-profile",
    title: "City Profile",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/smart-city-projects",
    title: "Smart City Projects",
  });
  ReactGA.send({ hitType: "pageview", page: "/articles", title: "Articles" });
  ReactGA.send({ hitType: "pageview", page: "/companies", title: "Companies" });
  ReactGA.send({
    hitType: "pageview",
    page: "/inthenews",
    title: "In the News",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/citizen-engagement",
    title: "Citizen Engagement",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/get-involved",
    title: "Get Involved",
  });
  ReactGA.send({ hitType: "pageview", page: "/survey", title: "survey" });
  ReactGA.send({
    hitType: "pageview",
    page: "/suggestions",
    title: "Suggestions",
  });
  ReactGA.send({ hitType: "pageview", page: "/donate", title: "Donate" });
  ReactGA.send({ hitType: "pageview", page: "/volunteer", title: "Volunteer" });
  ReactGA.send({
    hitType: "pageview",
    page: "/safety-security",
    title: "Safety & Security",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/digital-Infrastructure",
    title: "Digital Infrastructure",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/emergency-system",
    title: "Emergency System",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/cybersecurity",
    title: "Cybersecurity",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/pedestrian",
    title: "Pedestrian",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/smart-buildings",
    title: "Smart Buildings",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/commercial-building",
    title: "Commercial Building",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/smart-residence",
    title: "Smart Residence",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/retail-recreational-spaces",
    title: "Retail & Recreational spaces",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/municipal-buildings",
    title: "Municipal Buildings",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/parks-greenspaces",
    title: "Parks and Greenspaces",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/smart-industries",
    title: "Smart Industries",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/citizen-health-wellbeing",
    title: "Citizen Health & Wellbeing",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/pure-water",
    title: "Pure Water",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/mobile-health-camps-clinics",
    title: "Mobile Health Camps & Clinics",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/senior-citizen-programs",
    title: "Senior Citizen Programs",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/noise-air-quality",
    title: "Noise & Air Quality",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/mobility-connectivity",
    title: "Mobility & Connectivity",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/electric-vehicle-charging",
    title: "Electric Vehicle and Charging",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/last-mile-connectivity",
    title: "Last mile Connectivity",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/public-transport",
    title: "Public Transport",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/traffic-congestion",
    title: "Traffic Congestion",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/energy-environment",
    title: "Energy & Environment",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/clean-energy",
    title: "Clean Energy",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/waste-management",
    title: "Waste Management",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/climate-weather",
    title: "Climate & Weather",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/sustainability",
    title: "Sustainability",
  });
  ReactGA.send({
    hitType: "pageview",
    page: "/solar-program",
    title: "Solar Program",
  });

  const domain = window.location.host;

  return (
    <>
      <header>
        <Header />
        <Ad />
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

          <Route
            path="/news"
            element={
              <PrivateRoute>
                <News />
              </PrivateRoute>
            }
          />

          {/* site  */}
          <Route path="/sitemap.xml" element={<Xmlsitemap />} />
          <Route path="/robots.txt" element={<Robot />} />

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

          {/* <Route path="/reports" element={<SpecialReport />} /> */}
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

          {/* health */}
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

          {/* mobility*/}
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

          {/* energy environment */}
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
          <Route path="/rewardtoken" element={<TokenReward />} />

          <Route
            path="/reports"
            element={
              <PrivateRoute>
                <ReportIssue />
              </PrivateRoute>
            }
          />
          <Route
            path="/support"
            element={
              <PrivateRoute>
                <Support />
              </PrivateRoute>
            }
          />
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
