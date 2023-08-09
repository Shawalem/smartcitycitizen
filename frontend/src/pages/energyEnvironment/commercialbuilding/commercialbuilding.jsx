import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Commercialbuilding = () => {
  // get special reports
  const { data: airqualities } = useFetch("/airqualities?populate=*");
  
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
    <Helmet>
        <title>Air Quality - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on air quality challenges and solutions for smart city projects across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.commercialbuilding_title}
        pagePara={headerparagraphs?.[0]?.attributes.commercialbuilding_paragraph}
        airqualities={airqualities}
      />
    </>
  )
}

export default Commercialbuilding