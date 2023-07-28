import { Helmet } from "react-helmet";
import { SideBar, NewsCard } from "../../components";
import "./specialReport.scss";
// useFetch
import useFetch from "../../hooks/useFetch";

const SpecialReport = () => {
  // get special reports 
  const { data: specials } = useFetch("/specials?populate=*");
  console.log(specials);

  const { data: webinars } = useFetch("/webinars?populate=*");
  console.log(webinars)

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");
  

  return (
    <>
      <Helmet>
        <title>Special Report - Smart City Citizen</title>
        <meta
          name="description"
          content="Here at SmartCitiesWorld, we produce Special Reports on a weekly basis. If you would like to contribute to any special report or opinion pieces please contact our editor Luke Antoniou on lukea@smartcitiesworld.net"
        />
      </Helmet>
      <section>
        <div className="container">
          <div className="Special_report_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.specialreport_title}</h1>
                <p>
                {headerparagraphs?.[0]?.attributes.specialreport_paragraph}
                </p>
                <div className="newses">
                  {specials?.map((special) => (
                    <NewsCard key={special.id} allnews={special} collection="specials" />
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

export default SpecialReport;
