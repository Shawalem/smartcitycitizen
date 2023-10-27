import "./news.scss";
import { Loader, NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";


const News = () => {
  // get latest news 
  const { data: allnewses, isLoading } = useFetch("/allnewses?sort[0]=date:desc&populate=*");
  // get webinar 
  const { data: opinions } = useFetch("/opinions?populate=*");

  const { data: headerparagraphs } = useFetch("/headerparagraphs?sort[0]=date:desc&populate=*");

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Latest News - Smart City Citizen</title>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, smartcity, india, news"/>
        <meta name="description" content="Stay Informed: News on Advancing Smart Cities in India" />
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
          <div className="news_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.news_title}</h1>
                <div className="newses">
                  {allnewses?.map((allnewse) => (
                    <NewsCard key={allnewse.id} allnews={allnewse} collection="allnewses" />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            <div className="webinar">
              <h1>Opinions</h1>
              <div className="webinar_wrapper">
              {opinions?.slice(0, 4).map((opinion,_) => (
                    <NewsCard key={_} allnews={opinion} collection="opinions" />
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

export default News;
