import "./partners.scss";
import { NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";

const Partners = () => {
  // get city resources
  const { data: partners } = useFetch("/partners?populate=*");

  // get browse smart citys 
  const { data: opinions } = useFetch("/opinions?populate=*");

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
              <h1>{headerparagraphs?.[0]?.attributes.partners_title}</h1>
              <p>
                {headerparagraphs?.[0]?.attributes.partners_paragraph}
              </p>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                  {
                    partners?.map((partner)=>(
                      <NewsCard key={partner.id} allnews={partner} collection="partners" />
                    ))
                  }
                </div>
              <div className="browse_city">
                <h1>Opinions</h1>
                <div className="all_city">
                {
                    opinions?.slice(0, 3).map((opinion)=>(
                      <NewsCard key={opinion.id} allnews={opinion} collection="opinions" />
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

export default Partners;
