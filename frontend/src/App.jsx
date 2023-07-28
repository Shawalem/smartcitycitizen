import { Header } from "./components";
import Navbar from "./components/navBar/Navbar";
import { Route, Routes } from "react-router-dom";
import {
  AboutUs,
  Advertise,
  Advisory,
  AiAndMachine,
  AirQuality,
  AirTravel,
  Analytics,
  BatteriesRenewable,
  CitizenEngagement,
  CitizenSecurity,
  CityLights,
  CityProfile,
  Commercial,
  Connectivity,
  ContactUs,
  Cultural,
  DataMarketplace,
  DataPrivacy,
  EditorsBlog,
  ElectricVehicles,
  EnergyEnvironment,
  Governance,
  Home,
  Login,
  Mobility,
  Municipal,
  News,
  NewsDetails,
  Opinions,
  Podcast,
  RailTravel,
  Register,
  Research,
  SolarPower,
  SpecialReport,
  Team,
  Trend,
  UrbanSpace,
  Webinars,
  WhitePaper,
  WindPower,
} from "./pages";
import Footer from "./components/footer/Footer";
import SearchPage from "./pages/search/SearchPage";

const App = () => {
  return (
    <>
      <header>
        <Header />
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
          <Route path="/the-team" element={<Team />} />
          <Route path="/advisory-panel" element={<Advisory />} />
          <Route path="/advertise-with-us" element={<Advertise />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/news" element={<News />} />

          {/* city */}
          <Route path="/city-profile" element={<CityProfile />} />
          <Route path="/city-lights" element={<CityLights />} />

          {/* opinion */}
          <Route path="/editors-blog" element={<EditorsBlog />} />
          <Route path="/opinions" element={<Opinions />} />

          <Route path="/special-reports" element={<SpecialReport />} />

          {/* research */}
          <Route path="/research" element={<Research />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/white-papers" element={<WhitePaper />} />
          <Route path="/trend-reports" element={<Trend />} />
          <Route path="/podcasts" element={<Podcast />} />

          <>
            {/* Connectivity */}
            <Route path="/connectivity-and-data" element={<Connectivity />} />
            <Route path="/ai-and-machine-learning" element={<AiAndMachine />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/data-marketplace" element={<DataMarketplace />} />
            <Route path="/data-privacy" element={<DataPrivacy />} />
          </>

          {/* governance  */}
          <Route path="/governance-and-citizen" element={<Governance />} />
          <Route path="/citizen-security" element={<CitizenSecurity />} />
          <Route path="/citizen-engagement" element={<CitizenEngagement />} />

          {/* energy and environment */}
          <Route path="/energy-environment" element={<EnergyEnvironment />} />
          <Route path="/air-quality" element={<AirQuality />} />
          <Route path="/batteries-renewable" element={<BatteriesRenewable />} />
          <Route path="/solar-power" element={<SolarPower />} />
          <Route path="/wind-power" element={<WindPower />} />

          {/* mobility */}
          <Route path="/mobility" element={<Mobility />} />
          <Route path="/air-travel" element={<AirTravel />} />
          <Route path="/electric-vehicles" element={<ElectricVehicles />} />
          <Route path="/rail-travel" element={<RailTravel />} />

          {/* urban space */}
          <Route path="/urban-space" element={<UrbanSpace />} />
          <Route path="/commercial-buildings" element={<Commercial />} />
          <Route path="/cultural-space" element={<Cultural />} />
          <Route path="/municipal-buildings" element={<Municipal />} />

          {/* news details */}
          <Route path="/details/:collection/:id" element={<NewsDetails />} />
          {/* search  */}
          <Route path="/search" element={ <SearchPage /> }/>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
