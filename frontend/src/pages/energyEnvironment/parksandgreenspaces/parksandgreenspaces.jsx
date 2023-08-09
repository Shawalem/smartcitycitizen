import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Parksandgreenspaces = () => {

  // batteriesrenewables
  const { data: parksandgreenspaces } = useFetch('/parksandgreenspaces?populate=*');
  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  return (
    <>
    <Helmet>
        <title>Batteries And Renewable - Smart City Citizen</title>
        <meta
          name="description"
          content="Batteries and renewable"
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.parksgreenspaces_title}
        pagePara={headerparagraphs?.[0]?.attributes.parksgreenspaces_paragraph}
        parksandgreenspaces={parksandgreenspaces}
      />
    </>
  )
}

export default Parksandgreenspaces