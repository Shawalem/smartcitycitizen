import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Pedestrian = () => {
  
  const { data: pedestrians } = useFetch("/pedestrians?populate=*");
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");


  return (
    <>
    <Helmet>
        <title>Citizen Security - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on citizen security for smart city projects across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.pedestrian_title}
        pagePara={
          headerparagraphs?.[0]?.attributes.pedestrian_paragraph
        }
        pedestrians={pedestrians}
      />
    </>
  )
}

export default Pedestrian;