import {Page} from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";

const Smartbuildings = () => {

  const { data: smartbuildings } = useFetch('/smartbuildings?populate=*');

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");
  

  return (
    <>
      <Helmet>
        <title>Energy And Environment - Smart City Citizen</title>
        <meta
          name="description"
          content="Latest news on smart city projects tackling energy and climate change - one of the most pressing issue of our age. We cover air quality, smart grids, solar and wind & water power, renewable energy and working towards meeting sustainable development goals"
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.smartbuildings_title}
        pagePara={headerparagraphs?.[0]?.attributes.smartbuildings_paragraph}
        smartbuildings={smartbuildings}
      />
    </>
  );
};

export default Smartbuildings;
