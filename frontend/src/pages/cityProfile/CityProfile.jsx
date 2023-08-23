import "./cityProfile.scss";
import { Loader, NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect, useState } from "react";
import axios from "axios";

const CityProfile = () => {
  
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate");

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [profile, setProfile] = useState([]);
  const size = 9;
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN,
      },
    };
    const get = async () => {
      try {
        const res = await axios.get(
          `https://backend-app-lft6m.ondigitalocean.app/api/cityresources?_start=${
            size * page
          }&_limit=${size}&populate=*`,
          config
        );

        // Log the response and count
        console.log("Response data:", res.data);
        console.log("Count:", res.data.data.length);

        setProfile(res.data.data);
        setCount(res.data.data.length);
        setPages(Math.ceil(res.data.count / size)); // Calculate pages here
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    get();
  }, [page]);

  if (loading) {
    return <Loader />;
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
              <h1>{headerparagraphs?.[0]?.attributes.cityprofile_title}</h1>
              <ReactMarkdown>
                {headerparagraphs?.[0]?.attributes.cityprofile_paragraph}
              </ReactMarkdown>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                  {profile?.map((cityresource) => (
                    <NewsCard
                      key={cityresource.id}
                      allnews={cityresource}
                      collection="cityresources"
                    />
                  ))}
                </div>
                {/* Pagination */}
                <div className="pagination">
                  {[...Array(pages).keys()].map((number) => (
                      <button
                        key={number}
                        onClick={() => setPage(number)}
                        className={number === page ? 'page_active' : ""}
                      >
                        {number + 1}
                      </button>
                    ))}
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
