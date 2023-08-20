import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Solarprogram = () => {

  // batteriesrenewables
  const { data: solarprograms, isLoading } = useFetch('/solarprograms?populate=*');
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
        pageHeading={headerparagraphs?.[0]?.attributes.solarprogram_title}
        pagePara={headerparagraphs?.[0]?.attributes.solarprogram_paragraph}
        solarprograms={solarprograms}
      />
      </section>
    </>
  )
}

export default Solarprogram