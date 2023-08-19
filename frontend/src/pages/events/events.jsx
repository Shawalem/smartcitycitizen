import { Helmet } from "react-helmet";
import { SideBar, NewsCard, Loader } from "../../components";
import "./events.scss";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Events = () => {
  // get special reports 
  const { data: events, isLoading } = useFetch("/events?populate=*");
  console.log(events);

  const { data: opinions } = useFetch('/opinions?populate=*');
  console.log(opinions);

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader />
  }

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
                <h1>{headerparagraphs?.[0]?.attributes.events_title}</h1>
                <ReactMarkdown>
                {headerparagraphs?.[0]?.attributes.events_paragraph}
                </ReactMarkdown>
                <div className="newses">
                  {events?.map((event) => (
                    <NewsCard key={event.id} allnews={event} collection="events" />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            <div className="webinar">
              <h1>Opinions</h1>
              <div className="webinar_wrapper">
                {opinions?.map((opinion) => (
                  <NewsCard key={opinion.id} allnews={opinion} collection="opinions" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
