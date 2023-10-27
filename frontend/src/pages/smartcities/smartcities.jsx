import "./smartcities.scss";
import { Loader, NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";

const Smartcities = () => {
  // get city resources
  const { data: cityresources, isLoading } = useFetch(
    "/cityresources?sort[0]=title:asc&populate=*"
  );

  // get browse smart citys
  const { data: articles } = useFetch("/articles?sort[0]=date:desc&populate=*");
  const { data: citylights } = useFetch(
    "/citylights?sort[0]=date:desc&populate=*"
  );
  const { data: companies } = useFetch(
    "/companies?sort[0]=date:desc&populate=*"
  );
  const { data: inthenewses } = useFetch(
    "/inthenewses?sort[0]=date:desc&populate=*"
  );

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Smart City Citizen - City Profile</title>
        <meta name="description" content="cities profile" />

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
              <h1>{headerparagraphs?.[0]?.attributes.smartcities_title}</h1>
              <ReactMarkdown>
                {headerparagraphs?.[0]?.attributes.smartcities_paragraph}
              </ReactMarkdown>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                  {cityresources?.slice(0, 6).map((cityresource) => (
                    <NewsCard
                      key={cityresource.id}
                      allnews={cityresource}
                      collection="cityresources"
                    />
                  ))}
                </div>
                <div className="moreBtn">
                  <Link to="/city-profile">
                    <button>Read More</button>
                  </Link>
                </div>
                <div className="browse_city">
                  <h1>Smart City Projects</h1>
                  <div className="all_city">
                    {citylights?.slice(0, 3).map((citylight) => (
                      <NewsCard
                        key={citylight.id}
                        allnews={citylight}
                        collection="citylights"
                      />
                    ))}
                  </div>
                </div>

                <div className="browse_city">
                  <h1>Articles</h1>
                  <div className="all_city">
                    {articles?.slice(0, 3).map((article) => (
                      <NewsCard
                        key={article.id}
                        allnews={article}
                        collection="articles"
                      />
                    ))}
                  </div>
                </div>

                <div className="browse_city">
                  <h1>Companies</h1>
                  <div className="all_city">
                    {companies?.slice(0, 3).map((companie) => (
                      <NewsCard
                        key={companie.id}
                        allnews={companie}
                        collection="companies"
                      />
                    ))}
                  </div>
                </div>

                <div className="browse_city">
                  <h1>In The News</h1>
                  <div className="all_city">
                    {inthenewses?.slice(0, 3).map((inthenews) => (
                      <NewsCard
                        key={inthenews.id}
                        allnews={inthenews}
                        collection="inthenewses"
                      />
                    ))}
                  </div>
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

export default Smartcities;
