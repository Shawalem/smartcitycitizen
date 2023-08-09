import { SideBar, NewsCard } from "../../components";
import { Helmet } from 'react-helmet';
import './jobs.scss'
// useFetch
import useFetch from "../../hooks/useFetch";

const Jobs = () => {
  const { data: jobses } = useFetch("/jobses?populate=*");

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
              <h1>{headerparagraphs?.[0]?.attributes.jobs_title}</h1>
              <p>
              {headerparagraphs?.[0]?.attributes.jobs_paragraph}
              </p>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                {jobses?.map((jobs) => (
                    <NewsCard key={jobs.id} allnews={jobs} collection="jobses" />
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

export default Jobs