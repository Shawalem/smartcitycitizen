// import { SideBar, NewsCard } from "../../components";
// import { Helmet } from 'react-helmet';
// import './podcast.scss'
// // useFetch
// import useFetch from "../../hooks/useFetch";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// const Podcast = () => {
//   const { data: prodcasts } = useFetch("/prodcasts?populate=*");
//   console.log(prodcasts);

//   const { data: opinions } = useFetch('/opinions?populate=*');

//   const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

//   return (
//     <>
//     <Helmet>
//         <title>Podcasts - Smart City Citizen</title>
//         <meta name="description " content="The latest podcasts on smart city projects and initiatives across the world." />
//     </Helmet>
//       <section>
//         <div className="container">
//           <div className="podcast_wrapper">
//             <div className="heading">
//               <h1>{headerparagraphs?.[0]?.attributes.podcasts_title}</h1>
//               <ReactMarkdown>
//               {headerparagraphs?.[0]?.attributes.podcasts_paragraph}
//               </ReactMarkdown>
//             </div>
//             <div className="latest_news">
//               <div className="news_sec">
//                 <div className="newses">
//                 {prodcasts?.map((prodcast) => (
//                     <NewsCard key={prodcast.id} allnews={prodcast} collection="prodcasts" />
//                   ))}
//                 </div>
//               </div>
//               <SideBar />
//             </div>
//             <div className="webinar">
//               <h1>Opinions</h1>
//               <div className="webinar_wrapper">
//               {opinions?.slice(0, 4).map((opinion) => (
//                     <NewsCard key={opinion.id} allnews={opinion} collection="opinions" />
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Podcast

import "./podcast.scss";
import { SideBar, NewsCard, Loader } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Podcast = () => {
  // get opinions
  const { data: opinions, isLoading } = useFetch("/opinions?sort[0]=date:desc&populate=*");
  console.log(opinions);

  // get city Webinar
  const { data: prodcasts } = useFetch("/prodcasts?sort[0]=date:desc&populate=*");

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate=*");

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Helmet>
        <title>Podcast - Smart City Citizen</title>
        <meta charSet="utf-8"/>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, world news"/>
        <meta
          name="description "
          content="Podcast"
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <section>
        <div className="container">
          <div className="Opinions_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <h1>{headerparagraphs?.[0]?.attributes.podcasts_title}</h1>
                <div className="news_paragraph">
                  <ReactMarkdown>
                    {headerparagraphs?.[0]?.attributes.podcasts_paragraph}
                  </ReactMarkdown>
                </div>
                <div className="newses">
                  {prodcasts?.map((prodcast) => (
                    <NewsCard
                      key={prodcast.id}
                      allnews={prodcast}
                      collection="prodcasts"
                    />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            <div className="webinar">
              <h1>Opinions</h1>
              <div className="webinar_wrapper">
                {opinions?.slice(0, 4).map((opinion) => (
                  <NewsCard
                    key={opinion.id}
                    allnews={opinion}
                    collection="opinions"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Podcast;
