import { Page} from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Donate = () => {

  const { data: donates } = useFetch("/donates?populate=*");
    console.log(donates);

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
        pageHeading={headerparagraphs?.[0]?.attributes.donate_title}
        pagePara={headerparagraphs?.[0]?.attributes.donate_paragraph}
        donates={donates}
      />
    </>
  )
}

export default Donate