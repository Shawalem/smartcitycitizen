import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const CitizenSecurity = () => {
  
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
        pageHeading={headerparagraphs?.[0]?.attributes.citizensecurity_title}
        pagePara={
          headerparagraphs?.[0]?.attributes.citizensecurity_paragraph
        }
        citizensecurities={citizensecurities}
      />
    </>
  )
}

export default CitizenSecurity