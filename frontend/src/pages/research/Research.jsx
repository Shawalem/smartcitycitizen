import { NewsCard } from '../../components'
import "./research.scss";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from '../../hooks/useFetch';

const Research = () => {

  const { data: webinars } = useFetch("/webinars?sort[0]=date:desc&populate=*");
  console.log(webinars);

  const { data: whitepapers } = useFetch('/whitepapers?sort[0]=date:desc&populate=*');
  console.log(whitepapers)

  const { data: prodcasts } = useFetch("/prodcasts?sort[0]=date:desc&populate=*");
  console.log(prodcasts);

  const { data: trendreports } = useFetch('/trendreports?sort[0]=date:desc&populate=*');
  console.log(trendreports);

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");


  return (
    <>
    <Helmet>
        <title>Research - Smart City Citizen</title>
        <meta name="description " content="Here at SmartCitiesWorld, we produce Special Reports on a weekly basis. If you would like to contribute to any special report" /> 
    </Helmet>
      <section>
        <div className="container">
          <div className="research_wrapper">
            <div className="heading">
              <h1>{headerparagraphs?.[0]?.attributes.research_title}</h1>
              <ReactMarkdown>
                {headerparagraphs?.[0]?.attributes.Research_paragraph}
              </ReactMarkdown>
            </div>
            <div className="webinar">
              <h1>WEBINAR</h1>
              <div className="wrapper">
              {webinars?.map((webinar) => (
                  <NewsCard key={webinar.id} allnews={webinar} collection="webinars" />
                ))}
              </div>
            </div>
            <div className="white_paper">
              <h1>White Paper</h1>
              <div className="wrapper">
              {whitepapers?.map((whitepaper) => (
                  <NewsCard key={whitepaper.id} allnews={whitepaper} collection="whitepapers" />
                ))}
              </div>
            </div>
            <div className="podcasts">
              <h1>Podcasts</h1>
              <div className="wrapper">
              {prodcasts?.map((product) => {
                <NewsCard key={product.id} allnews={product} collection="prodcasts" />
              })}
              </div>
            </div>
            <div className="trend">
              <h1>TREND REPORTS</h1>
              <div className="wrapper">
              {trendreports?.map((trendreport) => (
                  <NewsCard key={trendreport.id} allnews={trendreport} collection="trendreports" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
