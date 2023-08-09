import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Publictransport = () => {

  const { data: publictransports } = useFetch('/publictransports?populate=*');

  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');
  return (
    <>
    <Helmet>
        <title>Municipal buildings - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on municipal buildings in smart city projects across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.publictransport_title}
        pagePara={headerparagraphs?.[0]?.attributes.publictransport_paragraph}
        publictransports={publictransports}
      />
    </>
  )
}

export default Publictransport