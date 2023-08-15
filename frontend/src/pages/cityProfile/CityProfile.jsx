import "./cityProfile.scss";
import { NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


const CityProfile = () => {
  // get city resources
  const { data: cityresources } = useFetch("/cityresources?populate=*");

  // get browse smart citys 
  const { data: citylights } = useFetch('/citylights?populate=*');
  const { data: articles } = useFetch('/articles?populate=*');

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate")

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
              <h1>{headerparagraphs?.[0]?.attributes.cityprofile_title}</h1>
              <ReactMarkdown>
                {headerparagraphs?.[0]?.attributes.cityprofile_paragraph}
              </ReactMarkdown>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                  {
                    cityresources?.map((cityresource)=>(
                      <NewsCard key={cityresource.id} allnews={cityresource} collection="cityresources" />
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
              </div>
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityProfile;
