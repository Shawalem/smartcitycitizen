import { Helmet } from "react-helmet";
import { SideBar, NewsCard, Loader } from "../../components";
import "./blogs.scss";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Blogs = () => {
  // get special reports 
  const { data: blogs, isLoading } = useFetch("/blogs?populate=*");
  console.log(blogs);

  const { data: opinions } = useFetch("/opinions?populate=*");

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
                <h1>{headerparagraphs?.[0]?.attributes.blogs_title}</h1>
                <div className="news_paragraph">
                  <ReactMarkdown>
                  {headerparagraphs?.[0]?.attributes.blogs_paragraph}
                  </ReactMarkdown>
                </div>
                <div className="newses">
                  {blogs?.map((blog) => (
                    <NewsCard key={blog.id} allnews={blog} collection="blogs" />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            <div className="webinar">
              <h1>Opinions</h1>
              <div className="webinar_wrapper">
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

export default Blogs;
