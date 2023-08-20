import { Loader, Page } from "../../components";
import { Helmet } from "react-helmet";
import useFetch from "../../hooks/useFetch";

const Safetysecurity = () => {

  
  const { data: governancecitizens, isLoading } = useFetch("/governancecitizens?populate=*");
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
      <Helmet>
        <title>Governance And Citizen - Smart City Citizen</title>
        <meta
          name="description"
          content="Citizens are at the heart of every city and leaders need to focus on the likes of security"
        />
      </Helmet>

      <section className="city_en">
        <Page
          pageHeading={headerparagraphs?.[0]?.attributes.safetysecurity_title}
          pagePara={
            headerparagraphs?.[0]?.attributes.safetysecurity_paragraph
          }
          governancecitizens={governancecitizens}
        />
      </section>
    </>
  );
};

export default Safetysecurity;
