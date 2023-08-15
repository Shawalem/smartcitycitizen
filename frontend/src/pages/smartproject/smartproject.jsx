import "./smartproject.scss";
import { SideBar,NewsCard } from '../../components'
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';



const Smartproject = () => {

  // get city lights 
  const { data: citylights } = useFetch('/citylights?populate=*');
  console.log(citylights);

  // get city Webinar 
  const { data: cityresources } = useFetch("/cityresources?populate=*");
  const { data: articles } = useFetch('/articles?populate=*');
  const { data: companies } = useFetch('/companies?populate=*');
  const { data: inthenewses } = useFetch('/inthenewses?populate=*');

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
      <Helmet>
        <title>Smart City Projects - Smart City Citizen</title>
        <meta name="description" content="City Lights is a Q&A series where we ask city leaders and experts a series of questions across a range of topics.  If you would like to contribute and you work for a city authority then please contact our editor Luke Antoniou on lukea@smartcitiesworld.net" />
      </Helmet>
      <section>
        <div className="container">
          <div className="city_lights_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.smartcityprojects_title}</h1>
                <ReactMarkdown>{headerparagraphs?.[0]?.attributes.smartcityprojects_paragraph}</ReactMarkdown>
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
