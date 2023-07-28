import { SideBar, NewsCard } from "../../../components";
import { Helmet } from 'react-helmet';
import './podcast.scss'
// useFetch
import useFetch from "../../../hooks/useFetch";

const Podcast = () => {
  const { data: prodcasts } = useFetch("/prodcasts?populate=*");
  console.log(prodcasts);

  const { data: webinars } = useFetch('/webinars?populate=*');
  console.log(webinars);
  
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
              <h1>{headerparagraphs?.[0]?.attributes.podcast_title}</h1>
              <p>
              {headerparagraphs?.[0]?.attributes.podcast_paragraph}
              </p>
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
  )
}

export default Podcast