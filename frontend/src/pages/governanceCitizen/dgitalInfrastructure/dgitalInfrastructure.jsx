import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch'
const DgitalInfrastructure = () => {
  
  const { data: digitalinfrastructures } = useFetch("/digitalinfrastructures?populate=*");

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");


  return (
    <>
    <Helmet>
        <title>Citizen Engagement - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on citizen engagement for smart city projects across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.digitalinfrastructure_title}
        pagePara={
          headerparagraphs?.[0]?.attributes.digitalinfrastructure_paragraph
        }
        digitalinfrastructures={digitalinfrastructures}
      />
    </>
  )
}

export default DgitalInfrastructure;