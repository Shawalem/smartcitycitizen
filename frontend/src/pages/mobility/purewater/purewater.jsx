import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
import useFetch from '../../../hooks/useFetch';

const Purewater = () => {
  const { data: airtravels, isLoading } = useFetch('/airtravels?sort[0]=date:desc&populate=*');
  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
    <Helmet>
        <title>Air Travel - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on air travel challenges and solutions for smart city projects across the world."
        />
      </Helmet>
      <section className="city_en">
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.purewater_title}
        pagePara={
          headerparagraphs?.[0]?.attributes.purewater_paragraph
        }
        airtravels={airtravels}
      />
      </section>
    </>
  )
}

export default Purewater