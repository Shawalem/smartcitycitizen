import { Helmet } from "react-helmet";
import { Loader, SideBar, NewsCard } from "../../components";
import "./specialReport.scss";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";

const SpecialReport = () => {
  // get special reports 
  const { data: specials, isLoading } = useFetch("/specials?sort[0]=date:desc&populate=*");
  console.log(specials)

  const { data: opinions } = useFetch("/opinions?sort[0]=date:desc&populate=*");

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");
  

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Helmet>
        <title>Special Report - Smart City Citizen</title>
        <meta
          name="description"
          content="Here at SmartCitiesWorld, we produce Special Reports on a weekly basis. If you would like to contribute to any special report or opinion pieces please contact our editor Luke Antoniou on lukea@smartcitiesworld.net"
        />
      </Helmet>
      <section>
        <div className="container">
          <div className="Special_report_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.reports_title}</h1>
                <div className="news_paragraph">
                  <ReactMarkdown>
                  {headerparagraphs?.[0]?.attributes.reports_paragraph}
                  </ReactMarkdown>
                </div>

                <div className="pdf_button">
                  <a href="#">DOWNLOAD PDF</a>
                </div>

                <div className="newses">
                  {specials?.map((special) => (
                    <NewsCard key={special.id} allnews={special} collection="specials" />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            <div className="webinar">
              <h1>Opinions</h1>
              <div className="webinar_wrapper">
                {opinions?.map((opinion) => (
                  <NewsCard key={opinion.id} allnews={opinion} collection="opinions" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialReport;
