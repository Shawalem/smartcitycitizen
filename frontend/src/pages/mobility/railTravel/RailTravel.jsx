import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const RailTravel = () => {
  const { data: railtravels } = useFetch('/railtravels?populate=*');
  
  const {data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  return (
    <>
    <Helmet>
        <title>Rail Travel - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news in rail travel on smart city projects and initiatives across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.railtravel_title}
        pagePara={headerparagraphs?.[0]?.attributes.railtravel_paragraph}
        railtravels={railtravels}
      />
    </>
  )
}

export default RailTravel