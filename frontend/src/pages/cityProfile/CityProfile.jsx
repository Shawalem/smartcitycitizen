import "./cityProfile.scss";
import { NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";

const CityProfile = () => {
  // get city resources
  const { data: cityresources } = useFetch("/cityresources?populate=*");
  console.log(cityresources);

  // get browse smart citys 
  const { data: smartcities } = useFetch("/smartcities?populate=*");
  console.log(smartcities)

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
              <p>
                {headerparagraphs?.[0]?.attributes.cityprofile_paragraph}
              </p>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <h1>CITY RESOURCES</h1>
                <div className="newses">
                  {
                    cityresources?.map((cityresource)=>(
                      <NewsCard key={cityresource.id} allnews={cityresource} collection="cityresources" />
                    ))
                  }
                </div>
              <div className="browse_city">
                <h1>BROWSE SMART CITIES</h1>
                <div className="all_city">
                {
                    smartcities?.map((smartcity)=>(
                      <NewsCard key={smartcity.id} allnews={smartcity} collection="smartcities" />
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
