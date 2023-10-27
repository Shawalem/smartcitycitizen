import { Page } from "../../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../../hooks/useFetch";

const Parksandgreenspaces = () => {
  // batteriesrenewables
  const { data: batteriesrenewables } = useFetch(
    "/batteriesrenewables?populate=*"
  );
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
      <Helmet>
        <title>Batteries And Renewable - Smart City Citizen</title>
        <meta name="description" content="Batteries and renewable" />

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
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.batteriesrenewable_title}
        batteriesrenewables={batteriesrenewables}
      />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NDTMGD29"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
    </>
  );
};

export default Parksandgreenspaces;
