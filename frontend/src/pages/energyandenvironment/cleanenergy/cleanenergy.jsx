import { Loader, Page } from "../../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../../hooks/useFetch";

const Cleanenergy = () => {
  // get special reports
  const { data: cleanenergies, isLoading } = useFetch(
    "/cleanenergies?sort[0]=date:desc&populate=*"
  );

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Clean Energy - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on air quality challenges and solutions for smart city projects across the world."
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
      <section className="city_en">
        <Page
          pageHeading={headerparagraphs?.[0]?.attributes.cleanenergy_title}
          pagePara={headerparagraphs?.[0]?.attributes.cleanenergy_paragraph}
          cleanenergies={cleanenergies}
        />

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

export default Cleanenergy;
