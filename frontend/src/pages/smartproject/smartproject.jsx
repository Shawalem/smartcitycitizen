import { SideBar,NewsCard, Loader } from '../../components'
import { Helmet } from "react-helmet";
import "./smartproject.scss";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';



const Smartproject = () => {

  // get city lights 
  const { data: citylights, isLoading } = useFetch('/citylights?sort[0]=date:desc&populate=*');
  console.log(citylights);

  // get city Webinar 
  const { data: cityresources } = useFetch("/cityresources?sort[0]=date:desc&populate=*");
  const { data: articles } = useFetch('/articles?sort[0]=date:desc&populate=*');
  const { data: companies } = useFetch('/companies?sort[0]=date:desc&populate=*');
  const { data: inthenewses } = useFetch('/inthenewses?sort[0]=date:desc&populate=*');

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Helmet>
        <title>Smart City Projects - Smart City Citizen</title>
        <meta charSet="utf-8"/>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, world news"/>
        <meta name="description" content="smart city project" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <section>
        <div className="container">
          <div className="City_lights_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.smartcityprojects_title}</h1>
                <div className="news_paragraph">
                  <ReactMarkdown>{headerparagraphs?.[0]?.attributes.smartcityprojects_paragraph}</ReactMarkdown>
                </div>
                <div className="newses">
                  {citylights?.map((citylight) => (
                    <NewsCard key={citylight} allnews={citylight} collection="citylights" />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            
            <div className="webinar">
              <h1>City Profile</h1>
              <div className="webinar_wrapper">
              {cityresources?.slice(0, 4).map((cityresource) => (
                    <NewsCard key={cityresource.id} allnews={cityresource} collection="cityresources" />
                  ))}
              </div>
            </div>

            <div className="webinar">
              <h1>Articles</h1>
              <div className="webinar_wrapper">
              {articles?.slice(0, 4).map((article) => (
                    <NewsCard key={article.id} allnews={article} collection="articles" />
                  ))}
              </div>
            </div>

            <div className="webinar">
              <h1>Companies</h1>
              <div className="webinar_wrapper">
              {companies?.slice(0, 4).map((companie) => (
                    <NewsCard key={companie.id} allnews={companie} collection="companies" />
                  ))}
              </div>
            </div>

            <div className="webinar">
              <h1>In The News</h1>
              <div className="webinar_wrapper">
              {inthenewses?.slice(0, 4).map((inthenews) => (
                    <NewsCard key={inthenews.id} allnews={inthenews} collection="inthenewses" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Smartproject;
