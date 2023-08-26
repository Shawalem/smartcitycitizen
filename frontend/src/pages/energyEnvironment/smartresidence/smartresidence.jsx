import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Smartresidence = () => {

  // batteriesrenewables
  const { data: batteriesrenewables, isLoading } = useFetch('/batteriesrenewables?sort[0]=date:desc&populate=*');
  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
    <Helmet>
        <title>Batteries And Renewable - Smart City Citizen</title>
        <meta
          name="description"
          content="Batteries and renewable"
        />
      </Helmet>
      <section className="city_en">
        <Page
          pageHeading={headerparagraphs?.[0]?.attributes.smartresidence_title}
          pagePara={headerparagraphs?.[0]?.attributes.smartresidence_paragraph}
          batteriesrenewables={batteriesrenewables}
        />
      </section>
    </>
  )
}

export default Smartresidence