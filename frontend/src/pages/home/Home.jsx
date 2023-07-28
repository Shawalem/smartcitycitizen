import "./home.scss";
import { NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";

const Home = () => {
  // get latest news
  const { data: allnewses } = useFetch("/allnewses?populate=*");

  // get editors pick
  const { data: editors } = useFetch("/editors?populate=*");

  // get latest webinar pick
  const { data: latestwebs } = useFetch("/latestwebs?populate=*");

  // get special reports
  const { data: specials } = useFetch("/specials?populate=*");

  // get city profiles
  const { data: cityprofiles } = useFetch("/cityprofiles?populate=*");

  // get search
  const { data: researches } = useFetch("/researches?populate=*");
  // get Webinar
  const { data: webinars } = useFetch("/webinars?populate=*");

  // Heading and paragraph 
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");
  console.log(headerparagraphs)

  return (
    <>
      <Helmet>
        <title>Smart City Citizen - Latest news</title>
      </Helmet>
      <section id="Home">
        <div className="container">
          <div className="home_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <div className="intro">
                  <h1>{headerparagraphs?.[0]?.attributes.home_title}</h1>
                  <p>
                    {headerparagraphs?.[0]?.attributes.home_paragraph}
                  </p>
                </div>
                <h1>Latest</h1>
                <div className="newses">
                  {allnewses?.map((allnewse) => (
                    <NewsCard key={allnewse.id} allnews={allnewse} collection="allnewses"/>
                  ))}
                </div>
                <div className="editor_pick">
                  <h1>EDITOR'S PICK</h1>
                  {editors?.map((editor) => (
                    <NewsCard key={editor.id} allnews={editor} collection="editors" />
                  ))}
                </div>
                <div className="webinar">
                  <h1>LATEST WEBINAR</h1>
                  {latestwebs?.map((latestweb) => (
                    <NewsCard key={latestweb.id} allnews={latestweb} collection="latestwebs"  />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            {/* special reports */}
            <div className="special_report">
              <h1>SPECIAL REPORTS</h1>
              <div className="report_wrapper">
                {specials?.map((special) => (
                  <NewsCard key={special.id} allnews={special} collection="specials" />
                ))}
              </div>
            </div>
            {/* city profile */}
            <div className="city_profile">
              <h1>CITY PROFILES</h1>
              <div className="profile_wrapper">
                {cityprofiles?.map((cityprofile) => (
                  <NewsCard key={cityprofile.id} allnews={cityprofile} collection="cityprofiles" />
                ))}
              </div>
            </div>
            {/* research */}
            <div className="home_research">
              <h1>RESEARCH</h1>
              <div className="home_research_wrapper">
                {researches?.slice(0, 3).map((researche) => (
                  <NewsCard key={researche.id} allnews={researche} collection="researches" />
                ))}
              </div>
            </div>
            {/* webinars */}
            <div className="home_webinars">
              <h1>WEBINARS</h1>
              <div className="home_webinars_wrapper">
                {webinars?.map((webinar) => (
                  <NewsCard key={webinar.id} allnews={webinar} collection="webinars" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
