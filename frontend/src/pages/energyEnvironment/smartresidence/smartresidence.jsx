import { Loader, NewsCard, Page } from "../../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";

const Smartresidence = () => {
  // batteriesrenewables
  const { data: batteriesrenewables, isLoading } = useFetch(
    "/batteriesrenewables?sort[0]=date:desc&populate=*"
  );

  const { data: smartbuildings } = useFetch(
    "/smartbuildings?sort[0]=date:desc&populate=*"
  );
  const { data: airqualities } = useFetch(
    "/airqualities?sort[0]=date:desc&populate=*"
  );
  const { data: solarpowers } = useFetch(
    "/solarpowers?sort[0]=date:desc&populate=*"
  );
  const { data: windpowers } = useFetch(
    "/windpowers?sort[0]=date:desc&populate=*"
  );
  const { data: parksandgreenspaces } = useFetch(
    "/parksandgreenspaces?sort[0]=date:desc&populate=*"
  );
  const { data: smartindustries } = useFetch(
    "/smartindustries?sort[0]=date:desc&populate=*"
  );
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Smart Residence - Smart City Citizen</title>
        <meta charSet="utf-8"/>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, world news"/>
        <meta name="description" content="news about the world" />
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
      <section className="smart_residence">
        <Page
          pageHeading={headerparagraphs?.[0]?.attributes.smartresidence_title}
          pagePara={headerparagraphs?.[0]?.attributes.smartresidence_paragraph}
          batteriesrenewables={batteriesrenewables}
        />

        <div className="container">
          <div className="wrapper2">
            <div className="commercial_building">
              <h1>Smart buildings</h1>
              <div className="newses">
                <div className="news">
                  {smartbuildings?.map((smartbuilding) => (
                    <NewsCard
                      key={smartbuilding.id}
                      allnews={smartbuilding}
                      collection="smartbuildings"
                    />
                  ))}
                </div>
              </div>
              <div className="BTN">
                <Link to="/smart-buildings">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="smart_residence">
              <h1>Commercial building</h1>
              <div className="newses">
                <div className="news">
                  {airqualities?.map((airqualitie) => (
                    <NewsCard
                      key={airqualitie.id}
                      allnews={airqualitie}
                      collection="airqualities"
                    />
                  ))}
                </div>
              </div>
              <div className="BTN">
                <Link to="/smart-residence">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="retail">
              <h1>Retail & recreational spaces</h1>
              <div className="newses">
                <div className="news">
                  {solarpowers?.map((solarpower) => (
                    <NewsCard
                      key={solarpower.id}
                      allnews={solarpower}
                      collection="solarpowers"
                    />
                  ))}
                </div>
              </div>
              <div className="BTN">
                <Link to="/retail-recreational-spaces">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="municipals">
              <h1>Municipal buildings</h1>
              <div className="newses">
                <div className="news">
                  {windpowers?.map((windpower) => (
                    <NewsCard
                      key={windpower.id}
                      allnews={windpower}
                      collection="windpowers"
                    />
                  ))}
                </div>
              </div>
              <div className="BTN">
                <Link to="/municipal-buildings">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="park">
              <h1>Parks and greenspaces</h1>
              <div className="newses">
                <div className="news">
                  {parksandgreenspaces?.map((parksandgreenspace) => (
                    <NewsCard
                      key={parksandgreenspace.id}
                      allnews={parksandgreenspace}
                      collection="parksandgreenspaces"
                    />
                  ))}
                </div>
              </div>
              <div className="BTN">
                <Link to="/parks-greenspaces">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="industries">
              <h1>Smart industries</h1>
              <div className="newses">
                <div className="news">
                  {smartindustries?.map((smartindustrie) => (
                    <NewsCard
                      key={smartindustrie.id}
                      allnews={smartindustrie}
                      collection="smartindustries"
                    />
                  ))}
                </div>
              </div>
              <div className="BTN">
                <Link to="/smart-industries">
                  <button>Read More</button>
                </Link>
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

export default Smartresidence;
