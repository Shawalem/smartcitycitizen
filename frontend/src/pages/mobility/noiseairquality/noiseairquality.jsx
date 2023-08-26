import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Noiseairquality = () => {
  const { data: noiseairqualities, isLoading } = useFetch('/noiseairqualities?sort[0]=date:desc&populate=*');
  
  const {data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
    <Helmet>
        <title>Rail Travel - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news in rail travel on smart city projects and initiatives across the world."
        />
      </Helmet>
      <section className="city_en">
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.noiseairquality_title}
        pagePara={headerparagraphs?.[0]?.attributes.noiseairquality_paragraph}
        noiseairqualities={noiseairqualities}
      />
      </section>
    </>
  )
}

export default Noiseairquality;