import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Cleanenergy = () => {
  // get special reports
  const { data: cleanenergies, isLoading } = useFetch("/cleanenergies?sort[0]=date:desc&populate=*");
  
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
        pageHeading={headerparagraphs?.[0]?.attributes.cleanenergy_title}
        pagePara={headerparagraphs?.[0]?.attributes.cleanenergy_paragraph}
        cleanenergies={cleanenergies}
      />
      </section>
    </>
  )
}

export default Cleanenergy