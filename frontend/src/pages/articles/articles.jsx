import "./articles.scss";
import { SideBar,NewsCard } from '../../components'
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';



const Articles = () => {

  // get city lights 
  const { data: articles } = useFetch('/articles?populate=*');
  console.log(articles);

  // get city Webinar 
  const { data: opinions } = useFetch('/opinions?populate=*');

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
      <Helmet>
        <title>Articles - Smart City Citizen</title>
        <meta name="description" content="City Lights is a Q&A series where we ask city leaders and experts a series of questions across a range of topics.  If you would like to contribute and you work for a city authority then please contact our editor Luke Antoniou on lukea@smartcitiesworld.net" />
      </Helmet>
      <section>
        <div className="container">
          <div className="city_lights_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.articles_title}</h1>
                <ReactMarkdown>{headerparagraphs?.[0]?.attributes.articles_paragraph}</ReactMarkdown>
                <div className="newses">
                  {articles?.map((article) => (
                    <NewsCard key={article} allnews={article} collection="articles" />
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
  );
};

export default Articles;
