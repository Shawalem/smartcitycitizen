import { Helmet } from "react-helmet";
import { SideBar, NewsCard, Loader } from "../../components";
import "./blogs.scss";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Blogs = () => {
  // get special reports 
  const { data: blogs, isLoading } = useFetch("/blogs?sort[0]=date:desc&populate=*");
  console.log(blogs);

  const { data: opinions } = useFetch("/opinions?sort[0]=date:desc&populate=*");

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");
  
  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Blogs - Smart City Citizen</title>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, world news"/>
        <meta
          name="description"
          content="blogs"
        />
        <link rel="canonical" href={window.location.href} />
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
