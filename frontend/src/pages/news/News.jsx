import "./news.scss";
import { NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";


const News = () => {
  // get latest news 
  const { data: allnewses } = useFetch("/allnewses?populate=*");

  // get webinar 
  const { data: webinars } = useFetch("/webinars?populate=*");

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
      <Helmet>
        <title>Latest News And Case Studies - Smart City Citizen</title>
        <meta name="description" content="latest new and case studies" />
      </Helmet>
      <section>
        <div className="container">
          <div className="news_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.news_title}</h1>
                <div className="newses">
                  {allnewses?.map((allnewse) => (
                    <NewsCard key={allnewse.id} allnews={allnewse} collection="allnewses" />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            <div className="webinar">
              <h1>WEBINAR</h1>
              <div className="webinar_wrapper">
              {webinars?.map((webinar) => (
                    <NewsCard key={webinar} allnews={webinar} collection="webinars" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
