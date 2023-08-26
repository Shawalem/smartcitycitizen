import {Loader, Page} from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";

const Energyenvironment = () => {

  const { data: energyenvironments, isLoading } = useFetch('/energyenvironments?sort[0]=date:desc&populate=*');

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");
  
  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
      <Helmet>
        <title>Energy And Environment - Smart City Citizen</title>
        <meta
          name="description"
          content="Latest news on smart city projects tackling energy and climate change - one of the most pressing issue of our age. We cover air quality, smart grids, solar and wind & water power, renewable energy and working towards meeting sustainable development goals"
        />
      </Helmet>
      <section className="city_en">
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.energyenvironment_tilte}
        pagePara={headerparagraphs?.[0]?.attributes.energyenvironment_paragraph}
        energyenvironments={energyenvironments}
      />
      </section>
    </>
  );
};

export default Energyenvironment;
