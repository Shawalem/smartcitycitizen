import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Municipalbuildings = () => {
  const { data: windpowers } = useFetch('/windpowers?populate=*');

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
        pageHeading={headerparagraphs?.[0]?.attributes.municipalbuildings_title}
        pagePara={headerparagraphs?.[0]?.attributes.municipalbuildings_paragraph}
        windpowers={windpowers}
      />
    </>
  )
}

export default Municipalbuildings