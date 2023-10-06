import "./companies.scss";
import { SideBar,NewsCard, Loader } from '../../components'
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';



const Companies = () => {

  // get city lights 
  const { data: companies, isLoading } = useFetch('/companies?sort[0]=date:desc&populate=*');

  // get city Webinar 
  const { data: articles } = useFetch('/articles?sort[0]=date:desc&populate=*');
  const { data: inthenewses } = useFetch('/inthenewses?sort[0]=date:desc&populate=*');
  const { data: cityresources } = useFetch("/cityresources?sort[0]=date:desc&populate=*");
  const { data: citylights } = useFetch('/citylights?sort[0]=date:desc&populate=*');

  const { data: headerparagraphs } = useFetch("/headerparagraphs?sort[0]=date:desc&populate=*");

  if (isLoading) {
    return <Loader/>
  }

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
                <h1>{headerparagraphs?.[0]?.attributes.companies_title}</h1>
                <div className="news_paragraph">
                  <ReactMarkdown>{headerparagraphs?.[0]?.attributes.companies_paragraph}</ReactMarkdown>
                </div>
                <div className="newses">
                  {companies?.map((companie) => (
                    <NewsCard key={companie} allnews={companie} collection="companies" />
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
              <h1>In The News</h1>
              <div className="webinar_wrapper">
              {inthenewses?.slice(0, 4).map((inthenews) => (
                    <NewsCard key={inthenews.id} allnews={inthenews} collection="inthenewses" />
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

          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
