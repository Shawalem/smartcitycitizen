import { Loader, Page } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";

const Mobilityconnectivity = () => {

  const {data: urbanspaces, isLoading} = useFetch('/urbanspaces?sort[0]=date:desc&populate=*');
  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
      <Helmet>
        <title>Urban Space - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on urban space - whether cultural or office space, residential or municipal buildings, parks and green space or recreational areas. It's the topography of each city that makes it unique and a challenge to handle through planning and redevelopment."
        />
      </Helmet>
      <section className="city_en">
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.mobilityconnectivity_title}
        pagePara={headerparagraphs?.[0]?.attributes.mobilityconnectivity_paragraph}
        urbanspaces={urbanspaces}
      />
      </section>
    </>
  );
};

export default Mobilityconnectivity;
