import { Loader, Page } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";

const Citizenhealthwellbeing  = () => {
  const {data: mobilities, isLoading} = useFetch('/mobilities?populate=*');

  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
      <Helmet>
        <title>Mobility - Smart City Citizen</title>
        <meta
          name="description"
          content="Latest news on electric vehicles, micro mobility and connected and autonomous vehicles. Smart cities also need to focus on the likes of air, rail, road and sea travel to reduce congestion and enable efficient logistic network"
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.citizenhealthwellbeing_title}
        pagePara={headerparagraphs?.[0]?.attributes.citizenhealthwellbeing_paragraph}
        mobilities={mobilities}
      />
    </>
  );
};

export default Citizenhealthwellbeing;
