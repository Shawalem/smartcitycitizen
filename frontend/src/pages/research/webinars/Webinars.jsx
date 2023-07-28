import { SideBar,NewsCard } from '../../../components'
import { Helmet } from "react-helmet";
import './webinars.scss'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Webinars = () => {

  const { data: webinars } = useFetch("/webinars?populate=*");
  console.log(webinars);

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
    <Helmet>
        <title>Webinars - Smart City Citizen</title>
        <meta name="description " content="webinars" /> 
    </Helmet>
      <section>
        <div className="container">
          <div className="webinars_wrapper">
            <div className="heading">
              <h1>{headerparagraphs?.[0]?.attributes.webinars_title}</h1>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                {webinars?.map((webinar) => (
                  <NewsCard key={webinar.id} allnews={webinar} collection="webinars" />
                ))}
                </div>
              </div>
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Webinars