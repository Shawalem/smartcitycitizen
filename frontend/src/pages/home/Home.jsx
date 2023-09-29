import "./home.scss";
import { Loader, NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";

// for verification
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Home = () => {
  // for verification
  const { user } = useContext(AuthContext); // email jwt isVerified

  // get latest news
  const { data: allnewses, isLoading } = useFetch(
    "/allnewses?sort[0]=date:desc&populate=*"
  );

  // get blogs
  const { data: blogs } = useFetch("/blogs?sort[0]=date:desc&populate=*");

  // get privacysecurities
  const { data: privacysecurities } = useFetch(
    "/privacysecurities?sort[0]=date:desc&populate=*"
  );

  // get special reports
  const { data: specials } = useFetch("/specials?sort[0]=date:desc&populate=*");

  // get city profiles
  const { data: cityresources } = useFetch(
    "/cityresources?sort[0]=date:desc&populate=*"
  );

  // get search
  const { data: smartindustries } = useFetch(
    "/smartindustries?sort[0]=date:desc&populate=*"
  );
  // get Webinar
  const { data: opinions } = useFetch("/opinions?sort[0]=date:desc&populate=*");

  // Heading and paragraph
  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader />;
  }

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
                    <NewsCard
                      key={allnewse.id}
                      allnews={allnewse}
                      collection="allnewses"
                    />
                  ))}
                </div>
                <div className="moreBtn">
                  <Link to="/news">
                    <button>Read More</button>
                  </Link>
                </div>
                <div className="blog">
                  <h1>BLOGS</h1>
                  {blogs?.slice(0, 1).map((blog) => (
                    <NewsCard key={blog.id} allnews={blog} collection="blogs" />
                  ))}
                </div>
                <div className="Suggestions">
                  <h1>Suggestions</h1>
                  {privacysecurities?.slice(0, 1).map((privacysecurity) => (
                    <NewsCard
                      key={privacysecurity.id}
                      allnews={privacysecurity}
                      collection="privacysecurities"
                    />
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
                  <NewsCard
                    key={special.id}
                    allnews={special}
                    collection="specials"
                  />
                ))}
              </div>
              <div className="moreBtn">
                <Link to="/reports">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            {/* city profile */}
            <div className="city_profile">
              <h1>CITY PROFILES</h1>
              <div className="profile_wrapper">
                {cityresources?.slice(0, 4).map((cityresource) => (
                  <NewsCard
                    key={cityresource.id}
                    allnews={cityresource}
                    collection="cityresources"
                  />
                ))}
              </div>
              <div className="moreBtn">
                <Link to="/city-profile">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            {/* smart Industries */}
            <div className="home_research">
              <h1>Smart Industries</h1>
              <div className="home_research_wrapper">
                {smartindustries?.slice(0, 3).map((smartindustrie) => (
                  <NewsCard
                    key={smartindustrie.id}
                    allnews={smartindustrie}
                    collection="smartindustries"
                  />
                ))}
              </div>
            </div>
            {/* Opinions */}
            <div className="home_opinion">
              <h1>Opinions</h1>
              <div className="home_opinion_wrapper">
                {opinions?.slice(0, 3).map((opinion) => (
                  <NewsCard
                    key={opinion.id}
                    allnews={opinion}
                    collection="opinions"
                  />
                ))}
              </div>
              <div className="moreBtn">
                <Link to="/opinions">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
