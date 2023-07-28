import { Page } from '../../../components'
import { Helmet } from 'react-helmet'
// useFetch
import useFetch from '../../../hooks/useFetch';

const DataPrivacy = () => {

  const { data: privacysecurities } = useFetch("/privacysecurities?populate=*");

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
    <Helmet>
        <title>Data Privacy & Security - Smart City Citizen</title>
        <meta
          name="description"
          content="The latest news on data privacy and security in smart city projects across the world."
        />
      </Helmet>
      <Page
        pageHeading={headerparagraphs?.[0]?.attributes.dataprivacysecurity_title}
        pagePara={
          headerparagraphs?.[0]?.attributes.dataprivacysecurity_paragraph
        }
        privacysecurities={privacysecurities}
      />
    </>
  )
}

export default DataPrivacy