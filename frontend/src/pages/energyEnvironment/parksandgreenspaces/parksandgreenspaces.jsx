import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Parksandgreenspaces = () => {

  // batteriesrenewables
  const { data: parksandgreenspaces, isLoading } = useFetch('/parksandgreenspaces?sort[0]=date:desc&populate=*');
  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
    <Helmet>
        <title>Batteries And Renewable - Smart City Citizen</title>
        <meta
          name="description"
          content="Batteries and renewable"
        />
      </Helmet>
      <section className="city_en">
        <Page
          pageHeading={headerparagraphs?.[0]?.attributes.parksgreenspaces_title}
          pagePara={headerparagraphs?.[0]?.attributes.parksgreenspaces_paragraph}
          parksandgreenspaces={parksandgreenspaces}
        />
      </section>
    </>
  )
}

export default Parksandgreenspaces