import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Climateweather = () => {

  // batteriesrenewables
  const { data: climateandweathers, isLoading } = useFetch('/climateandweathers?populate=*');
  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
    <Helmet>
        <title>Batteries And Renewable - Smart City Citizen</title>
        <meta
          name="description"
          content="Batteries and renewable"
        />
      </Helmet>
      <section className="city_en">
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.climateweather_title}
        pagePara={headerparagraphs?.[0]?.attributes.climateweather_paragraph}
        climateandweathers={climateandweathers}
      />
      </section>
    </>
  )
}

export default Climateweather;