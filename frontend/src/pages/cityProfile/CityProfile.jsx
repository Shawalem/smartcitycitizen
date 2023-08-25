import "./cityProfile.scss";
import { Loader, NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'


const CityProfile = () => {
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate");
  const {count:profileCount } = useFetch("/cityresources?populate");
  
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [cityresources, setCityresources] = useState([]);
  const size = 9;
  const pages = Math.ceil(count / size);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN,
      },
    };
    const get = async () => {
      try {
        const res = await axios.get(
          `https://backend-app-lft6m.ondigitalocean.app/api/cityresources?pagination[start]=${size * page}&pagination[limit]=${size}&populate=*`,
          config
        );

        // Log the response and count
        setCityresources(res.data.data);
        setCount(profileCount)
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    get();
  }, [page,profileCount]);

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
                  {cityresources?.map((cityresource) => (
                    <NewsCard
                      key={cityresource.id}
                      allnews={cityresource}
                      collection="cityresources"
                    />
                  ))}
                </div>
                {/* Pagination */}
                <div className="pagination">
                    <Stack spacing={2}>
                      <Pagination count={pages}
                      onChange={(_,value) => setPage(value - 1)}
                       />
                    </Stack>
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
