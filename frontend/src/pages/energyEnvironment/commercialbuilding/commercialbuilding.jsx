import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Commercialbuilding = () => {
  // get special reports
  const { data: airqualities, isLoading } = useFetch("/airqualities?sort[0]=date:desc&populate=*");
  
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
    <Helmet>
        <title>Air Quality - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on air quality challenges and solutions for smart city projects across the world."
        />
      </Helmet>
      <section className="city_en">
        <Page
          pageHeading={headerparagraphs?.[0]?.attributes.commercialbuilding_title}
          pagePara={headerparagraphs?.[0]?.attributes.commercialbuilding_paragraph}
          airqualities={airqualities}
        />
      </section>
    </>
  )
}

export default Commercialbuilding