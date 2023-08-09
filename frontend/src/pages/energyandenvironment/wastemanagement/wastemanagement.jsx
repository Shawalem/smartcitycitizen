import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Wastemanagement = () => {

  // batteriesrenewables
  const { data: wastemanagements } = useFetch('/wastemanagements?populate=*');
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
        pageHeading={headerparagraphs?.[0]?.attributes.wastemanagement_title}
        pagePara={headerparagraphs?.[0]?.attributes.wastemanagement_paragraph}
        wastemanagements={wastemanagements}
      />
    </>
  )
}

export default Wastemanagement