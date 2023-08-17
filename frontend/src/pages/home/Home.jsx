import "./home.scss";
import { NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


const Home = () => {
  // get latest news
  const { data: allnewses } = useFetch("/allnewses?populate=*");

  // get blogs
  const { data: blogs } = useFetch("/blogs?populate=*");

  // get privacysecurities
  const { data: privacysecurities } = useFetch("/privacysecurities?populate=*");

  // get special reports
  const { data: specials } = useFetch("/specials?populate=*");

  // get city profiles
  const { data: cityresources } = useFetch("/cityresources?populate=*");

  // get search
  const { data: smartindustries } = useFetch("/smartindustries?populate=*");
  // get Webinar
  const { data: opinions } = useFetch("/opinions?populate=*");

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
                  <ReactMarkdown>
                    {headerparagraphs?.[0]?.attributes.home_paragraph}
                  </ReactMarkdown>
                </div>
                <h1>Latest</h1>
                <div className="newses">
                  {allnewses?.slice(0, 4).map((allnewse) => (
                    <NewsCard key={allnewse.id} allnews={allnewse} collection="allnewses"/>
                  ))}
                  <button>click me</button>
                </div>
                <div className="editor_pick">
                  <h1>BLOGS</h1>
                  {blogs?.slice(0, 1).map((blog) => (
                    <NewsCard key={blog.id} allnews={blog} collection="blogs" />
                  ))}
                </div>
                <div className="webinar">
                  <h1>Suggestions</h1>
                  {privacysecurities?.slice(0, 1).map((privacysecurity) => (
                    <NewsCard key={privacysecurity.id} allnews={privacysecurity} collection="privacysecurities"  />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            {/* reports */}
            <div className="special_report">
              <h1>REPORTS</h1>
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
                {cityresources?.slice(0, 4).map((cityresource) => (
                  <NewsCard key={cityresource.id} allnews={cityresource} collection="cityresources" />
                ))}
              </div>
            </div>
            {/* smart Industries */}
            <div className="home_research">
              <h1>Smart Industries</h1>
              <div className="home_research_wrapper">
                {smartindustries?.slice(0, 3).map((smartindustrie) => (
                  <NewsCard key={smartindustrie.id} allnews={smartindustrie} collection="smartindustries" />
                ))}
              </div>
            </div>
            {/* Opinions */}
            <div className="home_webinars">
              <h1>Opinions</h1>
              <div className="home_webinars_wrapper">
                {opinions?.slice(0, 4).map((opinion) => (
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

export default Home;
