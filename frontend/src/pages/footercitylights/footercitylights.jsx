import { SideBar, NewsCard, Loader } from "../../components";
import { Helmet } from 'react-helmet';
import './footercitylights.scss'
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Footercitylights = () => {
  const { data: footercitylights, isLoading } = useFetch("/footercitylights?populate=*");

  const { data: opinions } = useFetch('/opinions?populate=*');
  
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader/>
  }
  

  return (
    <>
    <Helmet>
        <title>Podcasts - Smart City Citizen</title>
        <meta name="description " content="The latest podcasts on smart city projects and initiatives across the world." /> 
    </Helmet>
      <section>
        <div className="container">
          <div className="podcast_wrapper">
            <div className="heading">
              <h1>{headerparagraphs?.[0]?.attributes.citylight_title}</h1>
              <ReactMarkdown>
              {headerparagraphs?.[0]?.attributes.citylight_paragraph}
              </ReactMarkdown>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                {footercitylights?.map((footercitylight) => (
                    <NewsCard key={footercitylight.id} allnews={footercitylight} collection="footercitylights" />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            <div className="webinar">
              <h1>Opinions</h1>
              <div className="webinar_wrapper">
              {opinions?.slice(0, 4).map((opinion) => (
                    <NewsCard key={opinion.id} allnews={opinion} collection="opinions" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footercitylights