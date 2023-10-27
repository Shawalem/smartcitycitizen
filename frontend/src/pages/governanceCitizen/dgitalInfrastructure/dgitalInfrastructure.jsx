import { Loader, Page } from "../../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../../hooks/useFetch";
const DgitalInfrastructure = () => {
  const { data: digitalinfrastructures, isLoading } = useFetch(
    "/digitalinfrastructures?sort[0]=date:desc&populate=*"
  );

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Digital Infrastructure - Smart City Citizen</title>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="news,smartcitycitizen, world news" />
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
      <Page
        pageHeading={
          headerparagraphs?.[0]?.attributes.digitalinfrastructure_title
        }
        pagePara={
          headerparagraphs?.[0]?.attributes.digitalinfrastructure_paragraph
        }
        digitalinfrastructures={digitalinfrastructures}
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

export default DgitalInfrastructure;
