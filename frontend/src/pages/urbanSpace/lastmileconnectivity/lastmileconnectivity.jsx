import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Lastmileconnectivity = () => {
  const { data: culturalspaces, isLoading } = useFetch('/culturalspaces?sort[0]=date:desc&populate=*');
  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
    <Helmet>
        <title>Cultural space - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on cultural space in smart city projects across the world."
        />
      </Helmet>
      <section className="city_en">
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.lastmileconnectivity_title}
        pagePara={headerparagraphs?.[0]?.attributes.lastmileconnectivity_paragraph}
        culturalspaces={culturalspaces}
      />
      </section>
    </>
  )
}

export default Lastmileconnectivity