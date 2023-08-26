import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Publictransport = () => {

  const { data: publictransports, isLoading } = useFetch('/publictransports?sort[0]=date:desc&populate=*');

  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }
  return (
    <>
    <Helmet>
        <title>Municipal buildings - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on municipal buildings in smart city projects across the world."
        />
      </Helmet>
      <section className="city_en">
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.publictransport_title}
        pagePara={headerparagraphs?.[0]?.attributes.publictransport_paragraph}
        publictransports={publictransports}
      />
      </section>
    </>
  )
}

export default Publictransport