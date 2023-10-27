import { Helmet } from 'react-helmet'
import { SideBar,NewsCard } from '../../../components'
import './editorsBlog.scss'
// useFetch
import useFetch from '../../../hooks/useFetch'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'


const EditorsBlog = () => {
  // GET Editor's blogs 
  const { data: editorblogs } = useFetch('/editorblogs?sort[0]=date:desc&populate=*') 
  console.log(editorblogs);

  // GET Webinars
  const { data: webinars } = useFetch('/webinars?sort[0]=date:desc&populate=*');

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
      <Helmet>
        <title>Editors Blog - Smart City Citizen</title>
        <meta name="description" content="Our editor, gives his take on how smart cities are evolving. If you would like to receive these direct to your inbox as part of our weekly newsletter, make sure you sign up as a member (free!)." />

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
          <div className="Editors_blog_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.editorblog_title}</h1>
                <ReactMarkdown>{headerparagraphs?.[0]?.attributes.editorblog_paragraph}</ReactMarkdown>
                <div className="newses">
                  {editorblogs?.map((editorblog) => (
                    <NewsCard key={editorblog.id} allnews={editorblog} collection="editorblogs" />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            <div className="webinar">
              <h1>WEBINAR</h1>
              <div className="webinar_wrapper">
              {webinars?.map((webinar) => (
                    <NewsCard key={webinar.id} allnews={webinar} collection="webinars" />
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
}

export default EditorsBlog