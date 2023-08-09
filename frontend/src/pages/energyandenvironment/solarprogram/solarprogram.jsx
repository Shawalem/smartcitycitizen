import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Solarprogram = () => {

  // batteriesrenewables
  const { data: solarprograms } = useFetch('/solarprograms?populate=*');
  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  return (
    <>
    <Helmet>
        <title>Batteries And Renewable - Smart City Citizen</title>
        <meta
          name="description"
          content="Batteries and renewable"
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.solarprogram_title}
        pagePara={headerparagraphs?.[0]?.attributes.solarprogram_paragraph}
        solarprograms={solarprograms}
      />
    </>
  )
}

export default Solarprogram