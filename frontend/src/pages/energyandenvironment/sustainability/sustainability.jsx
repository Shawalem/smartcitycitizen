import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Sustainability = () => {
  const { data: sustainabilities } = useFetch('/sustainabilities?populate=*');

  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');
  return (
    <>
    <Helmet>
        <title>Wind Power - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news in wind power on smart city projects and initiatives across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.sustainability_title}
        pagePara={headerparagraphs?.[0]?.attributes.sustainability_paragraph}
        sustainabilities={sustainabilities}
      />
    </>
  )
}

export default Sustainability