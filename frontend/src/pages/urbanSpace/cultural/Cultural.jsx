import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Cultural = () => {
  const { data: culturalspaces } = useFetch('/culturalspaces?populate=*');
  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  return (
    <>
    <Helmet>
        <title>Cultural space - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on cultural space in smart city projects across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.culturalspace_title}
        pagePara={headerparagraphs?.[0]?.attributes.culturalspace_paragraph}
        culturalspaces={culturalspaces}
      />
    </>
  )
}

export default Cultural