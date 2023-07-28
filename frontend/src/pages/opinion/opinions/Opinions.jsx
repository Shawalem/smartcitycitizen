import "./opinions.scss";
import { SideBar, NewsCard } from "../../../components";
import { Helmet } from "react-helmet";
import useFetch from "../../../hooks/useFetch";

const Opinions = () => {

  // get opinions 
  const { data: opinions } = useFetch('/opinions?populate=*');
  console.log(opinions);

  // get city Webinar 
  const { data: webinars } = useFetch('/webinars?populate=*');
  console.log(webinars);

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

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
            <div className="heading">
              <h1>{headerparagraphs?.[0]?.attributes.opinions_title}</h1>
              <p>
                {headerparagraphs?.[0]?.attributes.opinions_paragraph}
              </p>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                  {opinions?.map((opinion) => (
                    <NewsCard key={opinion.id} allnews={opinion} collection="opinions" />
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

export default Opinions;
