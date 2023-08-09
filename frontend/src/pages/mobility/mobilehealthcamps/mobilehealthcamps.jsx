import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Mobilehealthcamps = () => {
  const {data: electricvehicles} = useFetch('/electricvehicles?populate=*');
  const {data: headerparagraphs} = useFetch('/headerparagraphs?populate=*');
  return (
    <>
    <Helmet>
        <title>Electric Vehicles - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on electric vehicles in smart city projects across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.mobilehealthcampsclinics_title}
        pagePara={headerparagraphs?.[0]?.attributes.mobilehealthcampsclinics_paragraph}
        electricvehicles={electricvehicles}
      />
    </>
  )
}

export default Mobilehealthcamps