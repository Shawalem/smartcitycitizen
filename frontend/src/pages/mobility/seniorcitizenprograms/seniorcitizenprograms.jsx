import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Seniorcitizenprograms = () => {
  const { data: railtravels, isLoading } = useFetch('/railtravels?sort[0]=date:desc&populate=*');
  
  const {data: headerparagraphs } = useFetch('/headerparagraphs?populate=*');

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
    <Helmet>
        <title>Senior Citizen Programs - Smart City Citizen</title>
        <meta charSet="utf-8"/>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, world news"/>
        <meta name="description" content="news about the world" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <section className="city_en">
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.seniourcitizenprograms_title}
        pagePara={headerparagraphs?.[0]?.attributes.seniourcitizenprograms_paragraph}
        railtravels={railtravels}
      />
      </section>
    </>
  )
}

export default Seniorcitizenprograms;