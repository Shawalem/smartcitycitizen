import { Page } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";

const UrbanSpace = () => {

  const {data: urbanspaces} = useFetch('/urbanspaces?populate=*');
  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  return (
    <>
      <Helmet>
        <title>Urban Space - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on urban space - whether cultural or office space, residential or municipal buildings, parks and green space or recreational areas. It's the topography of each city that makes it unique and a challenge to handle through planning and redevelopment."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.urbanspace_title}
        pagePara={headerparagraphs?.[0]?.attributes.urbanspace_paragraph}
        urbanspaces={urbanspaces}
      />
    </>
  );
};

export default UrbanSpace;
