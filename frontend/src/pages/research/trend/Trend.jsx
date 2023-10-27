import { SideBar, NewsCard } from "../../../components";
import "./trend.scss";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Trend = () => {
  const { data: trendreports } = useFetch(
    "/trendreports?sort[0]=date:desc&populate=*"
  );
  console.log(trendreports);

  const { data: webinars } = useFetch("/webinars?sort[0]=date:desc&populate=*");
  console.log(webinars);

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
      <Helmet>
        <title>Trend Reports - Smart City Citizen</title>
        <meta
          name="description "
          content="The latest Smart City Citizen Reports and Trending Reports"
        />

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
          <div className="trend_wrapper">
            <div className="heading">
              <h1>{headerparagraphs?.[0]?.attributes.trendreport_title}</h1>
              <ReactMarkdown>
                {headerparagraphs?.[0]?.attributes.trendreport_paragraph}
              </ReactMarkdown>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                  {trendreports?.map((trendreport) => (
                    <NewsCard
                      key={trendreport.id}
                      allnews={trendreport}
                      collection="trendreports"
                    />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            <div className="webinar">
              <h1>WEBINAR</h1>
              <div className="webinar_wrapper">
                {webinars?.map((webinar) => (
                  <NewsCard
                    key={webinar.id}
                    allnews={webinar}
                    collection="webinars"
                  />
                ))}
              </div>
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

export default Trend;
