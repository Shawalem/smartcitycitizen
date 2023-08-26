import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Mobilehealthcamps = () => {
  const {data: electricvehicles, isLoading} = useFetch('/electricvehicles?sort[0]=date:desc&populate=*');
  const {data: headerparagraphs} = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
    <Helmet>
        <title>Electric Vehicles - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on electric vehicles in smart city projects across the world."
        />
      </Helmet>
      <section className="city_en">
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.mobilehealthcampsclinics_title}
        pagePara={headerparagraphs?.[0]?.attributes.mobilehealthcampsclinics_paragraph}
        electricvehicles={electricvehicles}
      />
      </section>
    </>
  )
}

export default Mobilehealthcamps