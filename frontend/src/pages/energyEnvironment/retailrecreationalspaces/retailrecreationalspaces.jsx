import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Retailrecreationalspaces = () => {

  // solarpowers
  const { data: solarpowers, isLoading } = useFetch('/solarpowers?populate=*');

  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
    <Helmet>
        <title>Solar Power - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news in solar power on smart city projects and initiatives across the world."
        />
      </Helmet>
      <section className="city_en">
        <Page
          pageHeading={headerparagraphs?.[0]?.attributes.retailrecreationalspaces_title}
          pagePara={headerparagraphs?.[0]?.attributes.retailrecreationalspaces_paragraph}
          solarpowers={solarpowers}
        />
      </section>
    </>
  )
}

export default Retailrecreationalspaces