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
        <meta charSet="utf-8"/>
        <title>Smart City Citizen - Latest news</title>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, India,news"/>
        <meta name="description" content="Empowering Citizens for a Smarter Future: At Smart City Citizens India, we firmly believe that citizens play a vital role in shaping the future of their cities." />
        <link rel="canonical" href={window.location.href} />

        <script>
          {(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-NDTMGD29")}
        </script>
      </Helmet>
      <section id="Home">
        <div className="container">
          <div className="home_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <div className="intro">
                  <h1>{headerparagraphs?.[0]?.attributes.home_title}</h1>

                  {/* past any video iframe here */}
                  <iframe width="800" height="315" src="https://www.youtube.com/embed/XUfGzUD_tsw?si=KImQotv-th6Cy4z8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  
                  <div className="news_paragraph">  
                    <ReactMarkdown>
                      {headerparagraphs?.[0]?.attributes.home_paragraph}
                    </ReactMarkdown>
                  </div>
                </div>
                <h1>Latest News</h1>
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
              </div>
              <SideBar />
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

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDTMGD29"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
      </section>
    </>
  );
};

export default Home;
