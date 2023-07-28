import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Commercial = () => {

  const { data: commercialbuildings } = useFetch('/commercialbuildings?populate=*');

  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');
  return (
    <>
    <Helmet>
        <title>Commercial buildings - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on air travel challenges and solutions for smart city projects across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.commercialbuildings_title}
        pagePara={headerparagraphs?.[0]?.attributes.commercialbuildings_paragraph}
        commercialbuildings={commercialbuildings}
      />
    </>
  )
}

export default Commercial