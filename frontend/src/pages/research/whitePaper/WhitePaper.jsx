import { SideBar,NewsCard } from '../../../components'
import { Helmet } from "react-helmet";
import './whitePaper.scss'
// useFetch
import useFetch from '../../../hooks/useFetch';

const WhitePaper = () => {

  const { data: whitepapers } = useFetch('/whitepapers?populate=*');
  console.log(whitepapers)

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
    <Helmet>
        <title>White Paper - Smart City Citizen</title>
        <meta name="description " content="webinars" /> 
    </Helmet>
      <section>
        <div className="container">
          <div className="white_paper_wrapper">
            <div className="heading">
              <h1>{headerparagraphs?.[0]?.attributes.whitepaper_title}</h1>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                {whitepapers?.map((whitepaper) => (
                  <NewsCard key={whitepaper.id} allnews={whitepaper} collection="whitepapers" />
                ))}
                </div>
              </div>
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhitePaper