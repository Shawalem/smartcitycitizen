import "./partners.scss";
import { Loader, NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";

const Partners = () => {
  // get city resources
  const { data: partners, isLoading } = useFetch("/partners?populate=*");

  // get browse smart citys 
  const { data: opinions } = useFetch("/opinions?populate=*");

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate")

  if (isLoading) {
    return <Loader/>
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
              <h1>{headerparagraphs?.[0]?.attributes.partners_title}</h1>
              <p>
                {headerparagraphs?.[0]?.attributes.partners_paragraph}
              </p>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                  {
                    partners?.map((partner)=>(
                      <NewsCard key={partner.id} allnews={partner} collection="partners" />
                    ))
                  }
                </div>
              <div className="browse_city">
                <h1>Opinions</h1>
                <div className="all_city">
                {
                    opinions?.slice(0, 3).map((opinion)=>(
                      <NewsCard key={opinion.id} allnews={opinion} collection="opinions" />
                    ))
                  }
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

export default Partners;
