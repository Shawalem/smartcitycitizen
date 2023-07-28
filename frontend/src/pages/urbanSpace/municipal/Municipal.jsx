import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Municipal = () => {

  const { data: municipalbuildings } = useFetch('/municipalbuildings?populate=*');

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
        pageHeading={headerparagraphs?.[0]?.attributes.municipalbuildings_title}
        pagePara={headerparagraphs?.[0]?.attributes.municipalbuildings_paragraph}
        municipalbuildings={municipalbuildings}
      />
    </>
  )
}

export default Municipal