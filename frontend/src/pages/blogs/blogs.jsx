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
        <meta name="keywords" content="news,smartcitycitizen, blogs, world news"/>
        <meta
          name="description"
          content="Blogs section of SmartCityCitizen.com, your virtual library of knowledge and insights dedicated to the fascinating world of smart cities in India."
        />
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

export default Blogs;
