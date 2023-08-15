import "./inthenews.scss";
import { SideBar,NewsCard } from '../../components'
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';



const Inthenews = () => {

  // get city lights 
  const { data: inthenewses } = useFetch('/inthenewses?populate=*');

  // get city Webinar 
  const { data: companies } = useFetch('/companies?populate=*');
  const { data: articles } = useFetch('/articles?populate=*');
  const { data: cityresources } = useFetch("/cityresources?populate=*");
  const { data: citylights } = useFetch('/citylights?populate=*');


  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
      <Helmet>
        <title>City Lights - Smart City Citizen</title>
        <meta name="description" content="City Lights is a Q&A series where we ask city leaders and experts a series of questions across a range of topics.  If you would like to contribute and you work for a city authority then please contact our editor Luke Antoniou on lukea@smartcitiesworld.net" />
      </Helmet>
      <section>
        <div className="container">
          <div className="city_lights_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.inthenews_title}</h1>
                <ReactMarkdown>{headerparagraphs?.[0]?.attributes.inthenews_paragraph}</ReactMarkdown>
                <div className="newses">
                  {inthenewses?.map((inthenews) => (
                    <NewsCard key={inthenews} allnews={inthenews} collection="inthenewses" />
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
              <h1>Smart City Projects</h1>
              <div className="webinar_wrapper">
              {citylights?.slice(0, 4).map((citylight) => (
                    <NewsCard key={citylight.id} allnews={citylight} collection="citylights" />
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Inthenews;
