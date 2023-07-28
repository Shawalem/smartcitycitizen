import { useParams } from "react-router-dom";
import { NewsCard, SideBar } from "../../components";
import "./details.scss";
import useFetch from "../../hooks/useFetch";

const NewsDetails = () => {
  const { id, collection } = useParams();
  console.log(id);

  // import from backend
  const { data: allnewses } = useFetch(
    `/${collection}?populate=*&filters[id][$eq]=${id}`
  );

  const { data: editors } = useFetch(
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

  // Extract the necessary details from the fetched data
  const title =
    latestwebsData?.title ||
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
    energyenvironmentsData?.title||
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
    energyenvironmentsData?.author||
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
    energyenvironmentsData?.date||
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
    energyenvironmentsData?.img?.data?.attributes?.url||
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

    // extrat data date from backend 
    const description =
    latestwebsData?.description ||
    specialsData?.description ||
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
    energyenvironmentsData?.description||
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
                    <div className="derailsImg">
                      <img src={`http://localhost:1337${img}`} alt="news" />
                    </div>
                    <div className="newsDescription">
                      <p>
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetails;
