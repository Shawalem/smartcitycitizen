import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
import useFetch from '../../../hooks/useFetch';

const Purewater = () => {
  const { data: airtravels } = useFetch('/airtravels?populate=*');
  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  return (
    <>
    <Helmet>
        <title>Air Travel - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on air travel challenges and solutions for smart city projects across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.purewater_title}
        pagePara={
          headerparagraphs?.[0]?.attributes.purewater_paragraph
        }
        airtravels={airtravels}
      />
    </>
  )
}

export default Purewater