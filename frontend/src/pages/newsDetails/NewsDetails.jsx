import { useParams } from "react-router-dom";
import { SideBar } from "../../components";
import "./details.scss";
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Helmet } from "react-helmet";
// import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

const NewsDetails = () => {
  const { id, collection } = useParams();
  const mainLink = window.location.host + "/details/opinions";
  const link = window.location.href;

  const { data: allnewses } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: parksandgreenspaces } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: wastemanagements } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: volunteers } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: trafficcongestions } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: sustainabilities } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: solarprograms } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: smartindustries } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: smartbuildings } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: publictransports } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: pedestrians } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: partners } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: inthenewses } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: noiseairqualities } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: jobses } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: editors } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: footercitylights } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: electricvehicleandchargings } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: events } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: donates } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: digitalinfrastructures } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: cybersecurities } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: companies } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: citylights } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: climateandweathers } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: cleanenergies } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: citizensecurities } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: blogs } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: articles } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: cityprofiles } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: researches } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: webinars } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: opinions } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: editorblogs } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: cityresources } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: smartcities } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: whitepapers } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: prodcasts } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: aiandmachines } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: analytics } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: marketmonets } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  {
    /* WORK ON TOMOROW */
  }

  const { data: trendreports } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: privacysecurities } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: governancecitizens } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: citizenengagements } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: energyenvironments } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: airqualities } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: batteriesrenewables } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: solarpowers } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: windpowers } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: mobilities } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: airtravels } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: electricvehicles } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: railtravels } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: urbanspaces } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: commercialbuildings } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: culturalspaces } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: municipalbuildings } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: latestwebs } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );
  const { data: specials } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  // all data variable from backend
  const latestwebsData = latestwebs?.[0]?.attributes;
  const articlesData = articles?.[0]?.attributes;
  const wastemanagementsData = wastemanagements?.[0]?.attributes;
  const volunteersData = volunteers?.[0]?.attributes;
  const trafficcongestionsData = trafficcongestions?.[0]?.attributes;
  const sustainabilitiesData = sustainabilities?.[0]?.attributes;
  const solarprogramsData = solarprograms?.[0]?.attributes;
  const smartindustriesData = smartindustries?.[0]?.attributes;
  const smartbuildingsData = smartbuildings?.[0]?.attributes;
  const publictransportsData = publictransports?.[0]?.attributes;
  const pedestriansData = pedestrians?.[0]?.attributes;
  const partnersData = partners?.[0]?.attributes;
  const parksandgreenspacesData = parksandgreenspaces?.[0]?.attributes;
  const noiseairqualitiesData = noiseairqualities?.[0]?.attributes;
  const jobsesData = jobses?.[0]?.attributes;
  const inthenewsesData = inthenewses?.[0]?.attributes;
  const footercitylightsData = footercitylights?.[0]?.attributes;
  const eventsData = events?.[0]?.attributes;
  const electricvehicleandchargingsData =
    electricvehicleandchargings?.[0]?.attributes;
  const donatesData = donates?.[0]?.attributes;
  const digitalinfrastructuresData = digitalinfrastructures?.[0]?.attributes;
  const cybersecuritiesData = cybersecurities?.[0]?.attributes;
  const companiesData = companies?.[0]?.attributes;
  const climateandweathersData = climateandweathers?.[0]?.attributes;
  const cleanenergiesData = cleanenergies?.[0]?.attributes;
  const citylightsData = citylights?.[0]?.attributes;
  const citizensecuritiesData = citizensecurities?.[0]?.attributes;
  const blogsData = blogs?.[0]?.attributes;
  const specialsData = specials?.[0]?.attributes;
  const editorsData = editors?.[0]?.attributes;
  const cityprofilesData = cityprofiles?.[0]?.attributes;
  const researchesData = researches?.[0]?.attributes;
  const webinarsData = webinars?.[0]?.attributes;
  const opinionsData = opinions?.[0]?.attributes;
  const editorblogsData = editorblogs?.[0]?.attributes;
  const cityresourcesData = cityresources?.[0]?.attributes;
  const smartcitiesData = smartcities?.[0]?.attributes;
  const whitepapersData = whitepapers?.[0]?.attributes;
  const prodcastsData = prodcasts?.[0]?.attributes;
  const aiandmachinesData = aiandmachines?.[0]?.attributes;
  const analyticsData = analytics?.[0]?.attributes;
  const marketmonetsData = marketmonets?.[0]?.attributes;
  const trendreportsData = trendreports?.[0]?.attributes;
  const privacysecuritiesData = privacysecurities?.[0]?.attributes;
  const governancecitizensData = governancecitizens?.[0]?.attributes;
  const citizenengagementsData = citizenengagements?.[0]?.attributes;
  const energyenvironmentsData = energyenvironments?.[0]?.attributes;
  const airqualitiesData = airqualities?.[0]?.attributes;
  const batteriesrenewablesData = batteriesrenewables?.[0]?.attributes;
  const solarpowersData = solarpowers?.[0]?.attributes;
  const windpowersData = windpowers?.[0]?.attributes;
  const mobilitiesData = mobilities?.[0]?.attributes;
  const airtravelsData = airtravels?.[0]?.attributes;
  const electricvehiclesData = electricvehicles?.[0]?.attributes;
  const railtravelsData = railtravels?.[0]?.attributes;
  const urbanspacesData = urbanspaces?.[0]?.attributes;
  const commercialbuildingsData = commercialbuildings?.[0]?.attributes;
  const culturalspacesData = culturalspaces?.[0]?.attributes;
  const municipalbuildingsData = municipalbuildings?.[0]?.attributes;

  // Extract the detail page for sical media sharing

  // Extract the necessary details from the fetched data
  const title =
    latestwebsData?.title ||
    articlesData?.title ||
    wastemanagementsData?.title ||
    volunteersData?.title ||
    trafficcongestionsData?.title ||
    sustainabilitiesData?.title ||
    solarprogramsData?.title ||
    smartindustriesData?.title ||
    smartbuildingsData?.title ||
    publictransportsData?.title ||
    pedestriansData?.title ||
    partnersData?.title ||
    parksandgreenspacesData?.title ||
    noiseairqualitiesData?.title ||
    jobsesData?.title ||
    inthenewsesData?.title ||
    eventsData?.title ||
    footercitylightsData?.title ||
    electricvehicleandchargingsData?.title ||
    donatesData?.title ||
    digitalinfrastructuresData?.title ||
    companiesData?.title ||
    cybersecuritiesData?.title ||
    climateandweathersData?.title ||
    cleanenergiesData?.title ||
    citylightsData?.title ||
    citizensecuritiesData?.title ||
    blogsData?.title ||
    specialsData?.title ||
    editorsData?.title ||
    cityprofilesData?.title ||
    researchesData?.title ||
    webinarsData?.title ||
    opinionsData?.title ||
    editorblogsData?.title ||
    cityresourcesData?.title ||
    smartcitiesData?.title ||
    whitepapersData?.title ||
    prodcastsData?.title ||
    aiandmachinesData?.title ||
    analyticsData?.title ||
    marketmonetsData?.title ||
    trendreportsData?.title ||
    privacysecuritiesData?.title ||
    governancecitizensData?.title ||
    citizenengagementsData?.title ||
    energyenvironmentsData?.title ||
    airqualitiesData?.title ||
    batteriesrenewablesData?.title ||
    solarpowersData?.title ||
    windpowersData?.title ||
    mobilitiesData?.title ||
    airtravelsData?.title ||
    electricvehiclesData?.title ||
    railtravelsData?.title ||
    urbanspacesData?.title ||
    commercialbuildingsData?.title ||
    culturalspacesData?.title ||
    municipalbuildingsData?.title;

  // extrat data author from backend
  const author =
    latestwebsData?.author ||
    articlesData?.author ||
    wastemanagementsData?.author ||
    volunteersData?.author ||
    trafficcongestionsData?.author ||
    sustainabilitiesData?.author ||
    solarprogramsData?.author ||
    smartindustriesData?.author ||
    smartbuildingsData?.author ||
    publictransportsData?.author ||
    pedestriansData?.author ||
    partnersData?.author ||
    parksandgreenspacesData?.author ||
    noiseairqualitiesData?.author ||
    jobsesData?.author ||
    inthenewsesData?.author ||
    footercitylightsData?.author ||
    eventsData?.author ||
    electricvehicleandchargingsData?.author ||
    donatesData?.author ||
    digitalinfrastructuresData?.author ||
    cybersecuritiesData?.author ||
    companiesData?.author ||
    climateandweathersData?.author ||
    cleanenergiesData?.author ||
    citylightsData?.author ||
    citizensecuritiesData?.author ||
    blogsData?.author ||
    specialsData?.author ||
    editorsData?.author ||
    cityprofilesData?.author ||
    researchesData?.author ||
    webinarsData?.author ||
    opinionsData?.author ||
    editorblogsData?.author ||
    cityresourcesData?.author ||
    smartcitiesData?.author ||
    whitepapersData?.author ||
    prodcastsData?.author ||
    aiandmachinesData?.author ||
    analyticsData?.author ||
    marketmonetsData?.author ||
    trendreportsData?.author ||
    privacysecuritiesData?.author ||
    governancecitizensData?.author ||
    citizenengagementsData?.author ||
    energyenvironmentsData?.author ||
    airqualitiesData?.author ||
    batteriesrenewablesData?.author ||
    solarpowersData?.author ||
    windpowersData?.author ||
    mobilitiesData?.author ||
    airtravelsData?.author ||
    electricvehiclesData?.author ||
    railtravelsData?.author ||
    urbanspacesData?.author ||
    commercialbuildingsData?.author ||
    culturalspacesData?.author ||
    municipalbuildingsData?.author;

  // extrat data date from backend
  const date =
    latestwebsData?.date ||
    specialsData?.date ||
    wastemanagementsData?.date ||
    volunteersData?.date ||
    trafficcongestionsData?.date ||
    sustainabilitiesData?.date ||
    solarprogramsData?.date ||
    smartindustriesData?.date ||
    smartbuildingsData?.date ||
    publictransportsData?.date ||
    pedestriansData?.date ||
    partnersData?.date ||
    parksandgreenspacesData?.date ||
    noiseairqualitiesData?.date ||
    jobsesData?.date ||
    inthenewsesData?.date ||
    footercitylightsData?.date ||
    eventsData?.date ||
    electricvehicleandchargingsData?.date ||
    donatesData?.date ||
    digitalinfrastructuresData?.date ||
    cybersecuritiesData?.date ||
    companiesData?.date ||
    climateandweathersData?.date ||
    citylightsData?.date ||
    cleanenergiesData?.date ||
    citizensecuritiesData?.date ||
    blogsData?.date ||
    articlesData?.date ||
    editorsData?.date ||
    cityprofilesData?.date ||
    researchesData?.date ||
    webinarsData?.date ||
    opinionsData?.date ||
    editorblogsData?.date ||
    cityresourcesData?.date ||
    smartcitiesData?.date ||
    whitepapersData?.date ||
    prodcastsData?.date ||
    aiandmachinesData?.date ||
    analyticsData?.date ||
    marketmonetsData?.date ||
    trendreportsData?.date ||
    privacysecuritiesData?.date ||
    governancecitizensData?.date ||
    citizenengagementsData?.date ||
    energyenvironmentsData?.date ||
    airqualitiesData?.date ||
    batteriesrenewablesData?.date ||
    solarpowersData?.date ||
    windpowersData?.date ||
    mobilitiesData?.date ||
    airtravelsData?.date ||
    electricvehiclesData?.date ||
    railtravelsData?.date ||
    urbanspacesData?.date ||
    commercialbuildingsData?.date ||
    culturalspacesData?.date ||
    municipalbuildingsData?.date;

  // extrat data image from backend
  const img =
    latestwebsData?.img?.data?.attributes?.url ||
    specialsData?.img?.data?.attributes?.url ||
    wastemanagementsData?.img?.data?.attributes?.url ||
    volunteersData?.img?.data?.attributes?.url ||
    trafficcongestionsData?.img?.data?.attributes?.url ||
    sustainabilitiesData?.img?.data?.attributes?.url ||
    solarprogramsData?.img?.data?.attributes?.url ||
    smartindustriesData?.img?.data?.attributes?.url ||
    smartbuildingsData?.img?.data?.attributes?.url ||
    publictransportsData?.img?.data?.attributes?.url ||
    pedestriansData?.img?.data?.attributes?.url ||
    partnersData?.img?.data?.attributes?.url ||
    parksandgreenspacesData?.img?.data?.attributes?.url ||
    noiseairqualitiesData?.img?.data?.attributes?.url ||
    jobsesData?.img?.data?.attributes?.url ||
    inthenewsesData?.img?.data?.attributes?.url ||
    footercitylightsData?.img?.data?.attributes?.url ||
    eventsData?.img?.data?.attributes?.url ||
    electricvehicleandchargingsData?.img?.data?.attributes?.url ||
    donatesData?.img?.data?.attributes?.url ||
    digitalinfrastructuresData?.img?.data?.attributes?.url ||
    cybersecuritiesData?.img?.data?.attributes?.url ||
    companiesData?.img?.data?.attributes?.url ||
    climateandweathersData?.img?.data?.attributes?.url ||
    cleanenergiesData?.img?.data?.attributes?.url ||
    citylightsData?.img?.data?.attributes?.url ||
    citizensecuritiesData?.img?.data?.attributes?.url ||
    blogsData?.img?.data?.attributes?.url ||
    articlesData?.img?.data?.attributes?.url ||
    editorsData?.img?.data?.attributes?.url ||
    cityprofilesData?.img?.data?.attributes?.url ||
    researchesData?.img?.data?.attributes?.url ||
    webinarsData?.img?.data?.attributes?.url ||
    opinionsData?.img?.data?.attributes?.url ||
    editorblogsData?.img?.data?.attributes?.url ||
    cityresourcesData?.img?.data?.attributes?.url ||
    smartcitiesData?.img?.data?.attributes?.url ||
    whitepapersData?.img?.data?.attributes?.url ||
    prodcastsData?.img?.data?.attributes?.url ||
    aiandmachinesData?.img?.data?.attributes?.url ||
    analyticsData?.img?.data?.attributes?.url ||
    marketmonetsData?.img?.data?.attributes?.url ||
    trendreportsData?.img?.data?.attributes?.url ||
    privacysecuritiesData?.img?.data?.attributes?.url ||
    governancecitizensData?.img?.data?.attributes?.url ||
    citizenengagementsData?.img?.data?.attributes?.url ||
    energyenvironmentsData?.img?.data?.attributes?.url ||
    airqualitiesData?.img?.data?.attributes?.url ||
    batteriesrenewablesData?.img?.data?.attributes?.url ||
    solarpowersData?.img?.data?.attributes?.url ||
    windpowersData?.img?.data?.attributes?.url ||
    mobilitiesData?.img?.data?.attributes?.url ||
    airtravelsData?.img?.data?.attributes?.url ||
    electricvehiclesData?.img?.data?.attributes?.url ||
    railtravelsData?.img?.data?.attributes?.url ||
    urbanspacesData?.img?.data?.attributes?.url ||
    commercialbuildingsData?.img?.data?.attributes?.url ||
    culturalspacesData?.img?.data?.attributes?.url ||
    municipalbuildingsData?.img?.data?.attributes?.url;

  const upload_pdf = specialsData?.upload_pdf?.data?.attributes?.url;
  latestwebsData?.upload_pdf?.data?.attributes?.url ||
    wastemanagementsData?.upload_pdf?.data?.attributes?.url ||
    volunteersData?.upload_pdf?.data?.attributes?.url ||
    trafficcongestionsData?.upload_pdf?.data?.attributes?.url ||
    sustainabilitiesData?.upload_pdf?.data?.attributes?.url ||
    solarprogramsData?.upload_pdf?.data?.attributes?.url ||
    smartindustriesData?.upload_pdf?.data?.attributes?.url ||
    smartbuildingsData?.upload_pdf?.data?.attributes?.url ||
    publictransportsData?.upload_pdf?.data?.attributes?.url ||
    pedestriansData?.upload_pdf?.data?.attributes?.url ||
    partnersData?.upload_pdf?.data?.attributes?.url ||
    parksandgreenspacesData?.upload_pdf?.data?.attributes?.url ||
    noiseairqualitiesData?.upload_pdf?.data?.attributes?.url ||
    jobsesData?.upload_pdf?.data?.attributes?.url ||
    inthenewsesData?.upload_pdf?.data?.attributes?.url ||
    footercitylightsData?.upload_pdf?.data?.attributes?.url ||
    eventsData?.upload_pdf?.data?.attributes?.url ||
    electricvehicleandchargingsData?.upload_pdf?.data?.attributes?.url ||
    donatesData?.upload_pdf?.data?.attributes?.url ||
    digitalinfrastructuresData?.upload_pdf?.data?.attributes?.url ||
    cybersecuritiesData?.upload_pdf?.data?.attributes?.url ||
    companiesData?.upload_pdf?.data?.attributes?.url ||
    climateandweathersData?.upload_pdf?.data?.attributes?.url ||
    cleanenergiesData?.upload_pdf?.data?.attributes?.url ||
    citylightsData?.upload_pdf?.data?.attributes?.url ||
    citizensecuritiesData?.upload_pdf?.data?.attributes?.url ||
    blogsData?.upload_pdf?.data?.attributes?.url ||
    articlesData?.upload_pdf?.data?.attributes?.url ||
    editorsData?.upload_pdf?.data?.attributes?.url ||
    cityprofilesData?.upload_pdf?.data?.attributes?.url ||
    researchesData?.upload_pdf?.data?.attributes?.url ||
    webinarsData?.upload_pdf?.data?.attributes?.url ||
    opinionsData?.upload_pdf?.data?.attributes?.url ||
    editorblogsData?.upload_pdf?.data?.attributes?.url ||
    cityresourcesData?.upload_pdf?.data?.attributes?.url ||
    smartcitiesData?.upload_pdf?.data?.attributes?.url ||
    whitepapersData?.upload_pdf?.data?.attributes?.url ||
    prodcastsData?.upload_pdf?.data?.attributes?.url ||
    aiandmachinesData?.upload_pdf?.data?.attributes?.url ||
    analyticsData?.upload_pdf?.data?.attributes?.url ||
    marketmonetsData?.upload_pdf?.data?.attributes?.url ||
    trendreportsData?.upload_pdf?.data?.attributes?.url ||
    privacysecuritiesData?.upload_pdf?.data?.attributes?.url ||
    governancecitizensData?.upload_pdf?.data?.attributes?.url ||
    citizenengagementsData?.upload_pdf?.data?.attributes?.url ||
    energyenvironmentsData?.upload_pdf?.data?.attributes?.url ||
    airqualitiesData?.upload_pdf?.data?.attributes?.url ||
    batteriesrenewablesData?.upload_pdf?.data?.attributes?.url ||
    solarpowersData?.upload_pdf?.data?.attributes?.url ||
    windpowersData?.upload_pdf?.data?.attributes?.url ||
    mobilitiesData?.upload_pdf?.data?.attributes?.url ||
    airtravelsData?.upload_pdf?.data?.attributes?.url ||
    electricvehiclesData?.upload_pdf?.data?.attributes?.url ||
    railtravelsData?.upload_pdf?.data?.attributes?.url ||
    urbanspacesData?.upload_pdf?.data?.attributes?.url ||
    commercialbuildingsData?.upload_pdf?.data?.attributes?.url ||
    culturalspacesData?.upload_pdf?.data?.attributes?.url ||
    municipalbuildingsData?.upload_pdf?.data?.attributes?.url;

  // extrat data date from backend
  const description =
    latestwebsData?.description ||
    citylightsData?.description ||
    wastemanagementsData?.description ||
    volunteersData?.description ||
    trafficcongestionsData?.description ||
    sustainabilitiesData?.description ||
    solarprogramsData?.description ||
    smartindustriesData?.description ||
    smartbuildingsData?.description ||
    publictransportsData?.description ||
    pedestriansData?.description ||
    partnersData?.description ||
    parksandgreenspacesData?.description ||
    noiseairqualitiesData?.description ||
    jobsesData?.description ||
    inthenewsesData?.description ||
    eventsData?.description ||
    footercitylightsData?.description ||
    electricvehicleandchargingsData?.description ||
    donatesData?.description ||
    digitalinfrastructuresData?.description ||
    cybersecuritiesData?.description ||
    companiesData?.description ||
    climateandweathersData?.description ||
    specialsData?.description ||
    cleanenergiesData?.description ||
    citizensecuritiesData?.description ||
    blogsData?.description ||
    articlesData?.description ||
    editorsData?.description ||
    cityprofilesData?.description ||
    researchesData?.description ||
    webinarsData?.description ||
    opinionsData?.description ||
    editorblogsData?.description ||
    cityresourcesData?.description ||
    smartcitiesData?.description ||
    whitepapersData?.description ||
    prodcastsData?.description ||
    aiandmachinesData?.description ||
    analyticsData?.description ||
    marketmonetsData?.description ||
    trendreportsData?.description ||
    privacysecuritiesData?.description ||
    governancecitizensData?.description ||
    citizenengagementsData?.description ||
    energyenvironmentsData?.description ||
    airqualitiesData?.description ||
    batteriesrenewablesData?.description ||
    solarpowersData?.description ||
    windpowersData?.description ||
    mobilitiesData?.description ||
    airtravelsData?.description ||
    electricvehiclesData?.description ||
    railtravelsData?.description ||
    urbanspacesData?.description ||
    commercialbuildingsData?.description ||
    culturalspacesData?.description ||
    municipalbuildingsData?.description;
  return (
    <>
    <Helmet>
      <title> {`${title}`}  - Smart City Citizen</title>
    <meta charSet="utf-8"/>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, world news"/>
        <meta name="description" content="news about the world" />
        <link rel="canonical" href={window.location.href} />

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
          <div className="news_details_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <div className="intro">
                  <h1>{title}</h1>
                  <span>{author}</span>
                  <span>{date}</span>
                </div>
                <div className="newses">
                  <div className="newsDetails">
                    <div className="derailsImg" style={(link.includes(mainLink)) ? {width:"40%",borderRadius:"100%",overflow:"hidden"} : {}}>
                      <img src={`${img}`} alt="news" />
                    </div>
                    <div className="newsDescription">
                      <ReactMarkdown>{description}</ReactMarkdown>
                    </div>
                  </div>
                </div>

                <div className="pdf_button">
                  <a
                    href={upload_pdf}
                    download={upload_pdf}
                    rel="noopener noreferrer"
                  >
                    DOWNLOAD PDF
                  </a>
                </div>
              </div>
                <SideBar />
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

export default NewsDetails;
