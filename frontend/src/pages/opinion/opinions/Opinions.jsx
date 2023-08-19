import "./opinions.scss";
import { SideBar, NewsCard, Loader } from "../../../components";
import { Helmet } from "react-helmet";
import useFetch from "../../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Opinions = () => {

  // get opinions 
  const { data: opinions, isLoading } = useFetch('/opinions?populate=*');
  console.log(opinions);

  // get city Webinar 
  const { data: events } = useFetch("/events?populate=*");
  console.log(events);

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Helmet>
        <title>Opinions - Smart City Citizen</title>
        <meta
          name="description "
          content="We ask cities and industry experts from around the world to give us their opinion on smart city technology and challenges."
        />
      </Helmet>
      <section>
        <div className="container">
          <div className="Opinions_wrapper">
            
            <div className="latest_news">
              <div className="news_sec">
              <h1>{headerparagraphs?.[0]?.attributes.opinions_title}</h1>
              <ReactMarkdown>
                {headerparagraphs?.[0]?.attributes.opinions_paragraph}
              </ReactMarkdown>
                <div className="newses">
                  {opinions?.map((opinion) => (
                    <NewsCard key={opinion.id} allnews={opinion} collection="opinions" />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            <div className="webinar">
              <h1>Events</h1>
              <div className="webinar_wrapper">
              {events?.slice(0, 4).map((event) => (
                    <NewsCard key={event.id} allnews={event} collection="events" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Opinions;
