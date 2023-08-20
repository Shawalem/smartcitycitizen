import "./cityProfile.scss";
import { Loader, NewsCard, SideBar } from "../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
// import { useState } from "react";


const CityProfile = () => {

  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 9;

  // const { data: cityresources, isLoading } = useFetch(`/cityresources?_start=${(currentPage - 1) * itemsPerPage}&_limit=${itemsPerPage}&populate=*`);
  // const totalPage = Math.ceil(cityresources?._count / itemsPerPage);

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // }


  const { data: cityresources, isLoading } = useFetch("/cityresources?populate=*");
  

  const { data: headerparagraphs } = useFetch("/headerparagraphs?populate")

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
    <Helmet>
      <title>Smart City Citizen - City Profile</title>
      <meta name="description" content="cities profile" />
    </Helmet>
      <section>
        <div className="container">
          <div className="city_profile_wrapper">
            <div className="heading">
              <h1>{headerparagraphs?.[0]?.attributes.cityprofile_title}</h1>
              <ReactMarkdown>
                {headerparagraphs?.[0]?.attributes.cityprofile_paragraph}
              </ReactMarkdown>
            </div>
            <div className="latest_news">
              <div className="news_sec">
                <div className="newses">
                  {
                    cityresources?.map((cityresource)=>(
                      <NewsCard key={cityresource.id} allnews={cityresource} collection="cityresources" />
                    ))
                  }
                </div>
                
                {/* Pagination  */}
                {/* <div className="pagination">
                  {}
                </div> */}
              
              </div>
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityProfile;
