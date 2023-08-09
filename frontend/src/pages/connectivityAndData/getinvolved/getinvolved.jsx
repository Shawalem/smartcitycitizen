import { Helmet } from "react-helmet";
import { Page } from "../../../components";
import useFetch from "../../../hooks/useFetch";


const Getinvolved = () => {
  const { data: aiandmachines } = useFetch('/aiandmachines?populate=*');
  
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");
  return (
    <>
      <Helmet>
        <title>Ai And Machine Learning - Smart City Citizen</title>
        <meta
          name="description"
          content="The lifeblood of a smart city, data and the connectivity power enables everything from digital twins"
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.getinvolved_title}
        pagePara={headerparagraphs?.[0]?.attributes.getinvolved_paragraph}
        aiandmachines={aiandmachines}
      />
    </>
  );
};

export default Getinvolved;
