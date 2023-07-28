import { Helmet } from 'react-helmet'
import { SideBar,NewsCard } from '../../../components'
import './editorsBlog.scss'
// useFetch
import useFetch from '../../../hooks/useFetch'


const EditorsBlog = () => {
  // GET Editor's blogs 
  const { data: editorblogs } = useFetch('/editorblogs?populate=*') 
  console.log(editorblogs);

  // GET Webinars
  const { data: webinars } = useFetch('/webinars?populate=*');

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  return (
    <>
      <Helmet>
        <title>Editors Blog - Smart City Citizen</title>
        <meta name="description" content="Our editor, gives his take on how smart cities are evolving. If you would like to receive these direct to your inbox as part of our weekly newsletter, make sure you sign up as a member (free!)." />
      </Helmet>
      <section>
        <div className="container">
          <div className="Editors_blog_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.editorblog_title}</h1>
                <p>{headerparagraphs?.[0]?.attributes.editorblog_paragraph}</p>
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
      </section>
    </>
  );
}

export default EditorsBlog