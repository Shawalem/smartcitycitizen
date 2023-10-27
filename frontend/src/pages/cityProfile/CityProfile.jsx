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
          `https://backend-app-lft6m.ondigitalocean.app/api/cityresources?pagination[start]=${size * page}&pagination[limit]=${size}&sort[0]=title:asc&populate=*`,
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
        <meta charSet="utf-8"/>
        <title>City Profile - Smart City Citizen</title>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, worldnews, cityprofile"/>
        <meta name="description" content="news about the cities" />
        <link rel="canonical" href={window.location.href} />

        <script>
          {(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-NDTMGD29")}
        </script>

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

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDTMGD29"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
      </section>
    </>
  );
};

export default CityProfile;
