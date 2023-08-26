import "./smartcities.scss";
import { Loader, NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


const Smartcities = () => {
  // get city resources
  const { data: smartcities, isLoading } = useFetch("/smartcities?sort[0]=date:desc&populate=*");

  // get browse smart citys 
  const { data: articles } = useFetch('/articles?sort[0]=date:desc&populate=*');
  const { data: citylights } = useFetch('/citylights?sort[0]=date:desc&populate=*');
  const { data: companies } = useFetch('/companies?sort[0]=date:desc&populate=*');
  const { data: inthenewses } = useFetch('/inthenewses?sort[0]=date:desc&populate=*');

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate")

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
    <Helmet>
      <title>Smart City Citizen - City Profile</title>
      <meta name="description" content="cities profile" />
    </Helmet>
      <section>
        <div className="container">
          <div className="city_profile_wrapper">
            <div className="heading">
              <h1>{headerparagraphs?.[0]?.attributes.smartcities_title}</h1>
              <ReactMarkdown>
                {headerparagraphs?.[0]?.attributes.smartcities_paragraph}
              </ReactMarkdown>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                  {
                    smartcities?.map((smartcity)=>(
                      <NewsCard key={smartcity.id} allnews={smartcity} collection="smartcities" />
                    ))
                  }
                </div>
              <div className="browse_city">
                <h1>Smart City Projects</h1>
                <div className="all_city">
                {
                    citylights?.slice(0, 3).map((citylight)=>(
                      <NewsCard key={citylight.id} allnews={citylight} collection="citylights" />
                    ))
                }
                </div>
              </div>

              <div className="browse_city">
                <h1>Articles</h1>
                <div className="all_city">
                {
                    articles?.slice(0, 3).map((article)=>(
                      <NewsCard key={article.id} allnews={article} collection="articles" />
                    ))
                }
                </div>
              </div>

              <div className="browse_city">
                <h1>Companies</h1>
                <div className="all_city">
                {
                    companies?.slice(0, 3).map((companie)=>(
                      <NewsCard key={companie.id} allnews={companie} collection="companies" />
                    ))
                }
                </div>
              </div>

              <div className="browse_city">
                <h1>In The News</h1>
                <div className="all_city">
                {
                    inthenewses?.slice(0, 3).map((inthenews)=>(
                      <NewsCard key={inthenews.id} allnews={inthenews} collection="inthenewses" />
                    ))
                }
                </div>
              </div>
              
              </div>
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Smartcities;
