import { Helmet } from "react-helmet";
import { SideBar, NewsCard, Loader } from "../../components";
import "./events.scss";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Events = () => {
  // get special reports 
  const { data: events, isLoading } = useFetch("/events?sort[0]=date:desc&populate=*");
  console.log(events);

  const { data: opinions } = useFetch('/opinions?sort[0]=date:desc&populate=*');
  console.log(opinions);

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Events - Smart City Citizen</title>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, events, world news"/>
        <meta
          name="description"
          content="Event page of SmartCityCitizen.com, your gateway to discovering the vibrant world of smart city development, citizen engagement projects, surveys, talk shows, "
        />
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
          <div className="Special_report_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.events_title}</h1>
                <div className="news_paragraph">
                  <ReactMarkdown>
                    {headerparagraphs?.[0]?.attributes.events_paragraph}
                  </ReactMarkdown>
                </div>
                <div className="newses">
                  {events?.map((event) => (
                    <NewsCard key={event.id} allnews={event} collection="events" />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            <div className="webinar">
              <h1>Opinions</h1>
              <div className="webinar_wrapper">
                {opinions?.map((opinion) => (
                  <NewsCard key={opinion.id} allnews={opinion} collection="opinions" />
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

export default Events;
