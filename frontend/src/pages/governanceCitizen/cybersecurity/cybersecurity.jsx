import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Cybersecurity = () => {
  
  const { data: cybersecurities, isLoading } = useFetch("/cybersecurities?sort[0]=date:desc&populate=*");
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
    <Helmet>
        <title>Cyber Security - Smart City Citizen</title>
        <meta charSet="utf-8"/>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, world news"/>
        <meta name="description" content="news about the world" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.cybersecurity_title}
        pagePara={
          headerparagraphs?.[0]?.attributes.cybersecurity_paragraph
        }
        cybersecurities={cybersecurities}
      />
    </>
  )
}

export default Cybersecurity;