import { Page } from "../../components";
import { Helmet } from "react-helmet";
import useFetch from "../../hooks/useFetch";

const Citizenengagement = () => {
  // get special reports
  const { data: citizenengagements } = useFetch("/citizenengagements?populate=*");
  console.log(citizenengagements);

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
      <Helmet>
        <title>Connectivity - Smart City Citizen</title>
        <meta
          name="description"
          content="The lifeblood of a smart city, data and the connectivity power enables everything from digital twins, fibre networks and the Internet of Things. It relies on the likes of 4G and 5G, cloud and edge computing, analytics and AI and machine learning.  We cover it all here"
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.citizenengagement_title}
        pagePara={headerparagraphs?.[0]?.attributes.citizenengagement_paragraph}
        citizenengagements={citizenengagements}
      />
    </>
  );
};

export default Citizenengagement;
