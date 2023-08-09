import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Trafficcongestion = () => {

  const { data: trafficcongestions } = useFetch('/trafficcongestions?populate=*');

  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');
  return (
    <>
    <Helmet>
        <title>Municipal buildings - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on municipal buildings in smart city projects across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.trafficcongestion_title}
        pagePara={headerparagraphs?.[0]?.attributes.trafficcongestion_paragraph}
        trafficcongestions={trafficcongestions}
      />
    </>
  )
}

export default Trafficcongestion