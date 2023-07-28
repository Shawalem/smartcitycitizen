import "./cityLights.scss";
import { SideBar,NewsCard } from '../../components'
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";


const CityLights = () => {

  // get city lights 
  const { data: citylights } = useFetch('/citylights?populate=*');
  console.log(citylights);

  // get city Webinar 
  const { data: webinars } = useFetch('/webinars?populate=*');
  console.log(webinars);

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
      <Helmet>
        <title>City Lights - Smart City Citizen</title>
        <meta name="description" content="City Lights is a Q&A series where we ask city leaders and experts a series of questions across a range of topics.  If you would like to contribute and you work for a city authority then please contact our editor Luke Antoniou on lukea@smartcitiesworld.net" />
      </Helmet>
      <section>
        <div className="container">
          <div className="city_lights_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.citylight_title}</h1>
                <p>{headerparagraphs?.[0]?.attributes.citylight_paragraph}</p>
                <div className="newses">
                  {citylights?.map((citylight) => (
                    <NewsCard key={citylight} allnews={citylight} collection="citylights" />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            <div className="webinar">
              <h1>WEBINAR</h1>
              <div className="webinar_wrapper">
              {webinars?.map((webinar) => (
                    <NewsCard key={webinar.id} allnews={webinar} collection="webinars" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityLights;
