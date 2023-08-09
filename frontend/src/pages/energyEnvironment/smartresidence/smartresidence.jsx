import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Smartresidence = () => {

  // batteriesrenewables
  const { data: batteriesrenewables } = useFetch('/batteriesrenewables?populate=*');
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
        pageHeading={headerparagraphs?.[0]?.attributes.smartresidence_title}
        pagePara={headerparagraphs?.[0]?.attributes.smartresidence_paragraph}
        batteriesrenewables={batteriesrenewables}
      />
    </>
  )
}

export default Smartresidence