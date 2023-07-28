import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const BatteriesRenewable = () => {

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
        pageHeading={headerparagraphs?.[0]?.attributes.batteriesrenewable_title}
        batteriesrenewables={batteriesrenewables}
      />
    </>
  )
}

export default BatteriesRenewable