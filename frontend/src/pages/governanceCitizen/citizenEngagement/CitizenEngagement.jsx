import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch'
const CitizenEngagement = () => {
  
  const { data: citizenengagements } = useFetch("/citizenengagements?populate=*");

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
        pageHeading={headerparagraphs?.[0]?.attributes.citizenengagement_title}
        pagePara={
          headerparagraphs?.[0]?.attributes.citizenengagement_paragraph
        }
        citizenengagements={citizenengagements}
      />
    </>
  )
}

export default CitizenEngagement