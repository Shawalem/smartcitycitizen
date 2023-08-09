import { SideBar, NewsCard } from "../../components";
import { Helmet } from 'react-helmet';
import './podcast.scss'
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Podcast = () => {
  const { data: prodcasts } = useFetch("/prodcasts?populate=*");
  console.log(prodcasts);

  const { data: opinions } = useFetch('/opinions?populate=*');
  
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");
  

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
              <h1>{headerparagraphs?.[0]?.attributes.podcasts_title}</h1>
              <ReactMarkdown>
              {headerparagraphs?.[0]?.attributes.podcasts_paragraph}
              </ReactMarkdown>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                {prodcasts?.map((prodcast) => (
                    <NewsCard key={prodcast.id} allnews={prodcast} collection="prodcasts" />
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

export default Podcast