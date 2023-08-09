import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Emergencysystem = () => {
  
  const { data: citizensecurities } = useFetch("/citizensecurities?populate=*");
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");


  return (
    <>
    <Helmet>
        <title>Citizen Security - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on citizen security for smart city projects across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.emergencysystem_title}
        pagePara={
          headerparagraphs?.[0]?.attributes.emergencysystem_paragraph
        }
        citizensecurities={citizensecurities}
      />
    </>
  )
}

export default Emergencysystem;