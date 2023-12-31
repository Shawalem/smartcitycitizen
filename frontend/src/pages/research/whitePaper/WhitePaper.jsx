import { SideBar,NewsCard } from '../../../components'
import { Helmet } from "react-helmet";
import './whitePaper.scss'
// useFetch
import useFetch from '../../../hooks/useFetch';

const WhitePaper = () => {

  const { data: whitepapers } = useFetch('/whitepapers?sort[0]=date:desc&populate=*');
  console.log(whitepapers)

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
    <Helmet>
        <title>White Paper - Smart City Citizen</title>
        <meta name="description " content="webinars" /> 

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
          <div className="white_paper_wrapper">
            <div className="heading">
              <h1>{headerparagraphs?.[0]?.attributes.whitepaper_title}</h1>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                {whitepapers?.map((whitepaper) => (
                  <NewsCard key={whitepaper.id} allnews={whitepaper} collection="whitepapers" />
                ))}
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
  )
}

export default WhitePaper