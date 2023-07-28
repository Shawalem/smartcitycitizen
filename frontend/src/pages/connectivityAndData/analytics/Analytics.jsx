import {Page} from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Analytics = () => {

  const { data: analytics } = useFetch("/analytics?populate=*");
  console.log(analytics);

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
    <Helmet>
        <title>Analytics - Smart City Citizen</title>
        <meta
          name="description"
          content="analytics"
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.analytics_title}
        analytics={analytics}
      />
    </>
  )
}

export default Analytics