import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Retailrecreationalspaces = () => {

  // solarpowers
  const { data: solarpowers } = useFetch('/solarpowers?populate=*');

  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  return (
    <>
    <Helmet>
        <title>Solar Power - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news in solar power on smart city projects and initiatives across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.retailrecreationalspaces_title}
        pagePara={headerparagraphs?.[0]?.attributes.retailrecreationalspaces_paragraph}
        solarpowers={solarpowers}
      />
    </>
  )
}

export default Retailrecreationalspaces