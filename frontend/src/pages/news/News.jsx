import "./news.scss";
import { Loader, NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";


const News = () => {
  // get latest news 
  const { data: allnewses, isLoading } = useFetch("/allnewses?sort[0]=date:desc&populate=*");
  // get webinar 
  const { data: opinions } = useFetch("/opinions?populate=*");

  const { data: headerparagraphs } = useFetch("/headerparagraphs?sort[0]=date:desc&populate=*");

  if (isLoading) {
    return <Loader />
  }

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
              <h1>Opinions</h1>
              <div className="webinar_wrapper">
              {opinions?.slice(0, 4).map((opinion,_) => (
                    <NewsCard key={_} allnews={opinion} collection="opinions" />
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
