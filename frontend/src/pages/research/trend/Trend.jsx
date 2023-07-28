import { SideBar, NewsCard } from "../../../components";
import "./trend.scss";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../../hooks/useFetch";


const Trend = () => {

  const { data: trendreports } = useFetch('/trendreports?populate=*');
  console.log(trendreports);

  const { data: webinars } = useFetch('/webinars?populate=*');
  console.log(webinars);

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
      <Helmet>
        <title>Trend Reports - Smart City Citizen</title>
        <meta
          name="description "
          content="The latest Smart City Citizen Reports and Trending Reports"
        />
      </Helmet>
      <section>
        <div className="container">
          <div className="trend_wrapper">
            <div className="heading">
              <h1>{headerparagraphs?.[0]?.attributes.trendreport_title}</h1>
              <p>{headerparagraphs?.[0]?.attributes.trendreport_paragraph}</p>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                  {trendreports?.map((trendreport) => (
                    <NewsCard key={trendreport.id} allnews={trendreport} collection="trendreports" />
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

export default Trend;
