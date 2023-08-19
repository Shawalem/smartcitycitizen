import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Electricvehiclecharging = () => {

  const { data: electricvehicleandchargings, isLoading } = useFetch('/electricvehicleandchargings?populate=*');

  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }
  return (
    <>
    <Helmet>
        <title>Commercial buildings - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on air travel challenges and solutions for smart city projects across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.electricvehiclecharging_title}
        pagePara={headerparagraphs?.[0]?.attributes.electricvehiclecharging_paragraph}
        electricvehicleandchargings={electricvehicleandchargings}
      />
    </>
  )
}

export default Electricvehiclecharging