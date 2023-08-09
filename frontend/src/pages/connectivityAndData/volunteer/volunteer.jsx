import { Page} from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Volunteer = () => {

  const { data: volunteers } = useFetch("/volunteers?populate=*");
    console.log(volunteers);

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");
  
  return (
    <>
    <Helmet>
        <title>Data marketplace and monetization - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on data market places and data monetization in smart city projects across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.volunteer_title}
        pagePara={headerparagraphs?.[0]?.attributes.volunteer_paragraph}
        volunteers={volunteers}
      />
    </>
  )
}

export default Volunteer