import { Helmet } from "react-helmet";
import { Loader, SideBar, NewsCard } from "../../components";
import "./specialReport.scss";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";

const SpecialReport = () => {
  // get special reports
  const { data: specials, isLoading } = useFetch(
    "/specials?sort[0]=date:desc&populate=*"
  );
  console.log(specials);

  const { data: opinions } = useFetch("/opinions?sort[0]=date:desc&populate=*");

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Special Report - Smart City Citizen</title>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="news,smartcitycitizen, report news ,news, report"
        />
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content="SmartCityCitizen.com, your gateway to the latest updates and insights on the transformative world of smart cities in India. In an era of rapid urbanization and technological evolution,"
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
          <div className="Special_report_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.reports_title}</h1>
                <div className="news_paragraph">
                  <ReactMarkdown>
                    {headerparagraphs?.[0]?.attributes.reports_paragraph}
                  </ReactMarkdown>
                </div>

                <div className="newses">
                  {specials?.map((special) => (
                    <NewsCard
                      key={special.id}
                      allnews={special}
                      collection="specials"
                    />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            <div className="webinar">
              <h1>Opinions</h1>
              <div className="webinar_wrapper">
                {opinions?.map((opinion) => (
                  <NewsCard
                    key={opinion.id}
                    allnews={opinion}
                    collection="opinions"
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

export default SpecialReport;
