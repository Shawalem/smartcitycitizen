import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';


const Publictransport = () => {

  const { data: publictransports, isLoading } = useFetch('/publictransports?sort[0]=date:desc&populate=*');

  const { data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }
  return (
    <>
    <Helmet>
        <title>Public Transport - Smart City Citizen</title>
        <meta charSet="utf-8"/>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, world news"/>
        <meta name="description" content="news about the world" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <section className="city_en">
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.publictransport_title}
        pagePara={headerparagraphs?.[0]?.attributes.publictransport_paragraph}
        publictransports={publictransports}
      />
      </section>
    </>
  )
}

export default Publictransport