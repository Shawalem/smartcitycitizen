import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Smartindustries = () => {

  // batteriesrenewables
  const { data: smartindustries, isLoading } = useFetch('/smartindustries?populate=*');
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
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.smartindustries_title}
        pagePara={headerparagraphs?.[0]?.attributes.smartindustries_paragraph}
        smartindustries={smartindustries}
      />
    </>
  )
}

export default Smartindustries;