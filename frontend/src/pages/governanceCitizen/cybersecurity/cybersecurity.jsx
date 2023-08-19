import { Loader, Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const Cybersecurity = () => {
  
  const { data: cybersecurities, isLoading } = useFetch("/cybersecurities?populate=*");
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
    <Helmet>
        <title>Citizen Security - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on citizen security for smart city projects across the world."
        />
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