import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Helmet } from "react-helmet";
import "./searchPage.scss";
import { Loader, NewsCard } from "../../components";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  console.log(searchTerm);
  // get all products based on search term
  // get latest news
    // import from backend
    const { data: allnewses, isLoading } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: parksandgreenspaces } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: wastemanagements } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: volunteers } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
  
    const { data: trafficcongestions } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: sustainabilities } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: solarprograms } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: smartindustries } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: smartbuildings } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
  
    const { data: publictransports } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
  
    const { data: pedestrians } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: partners } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
  
    const { data: inthenewses } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: noiseairqualities } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
  
    const { data: jobses } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: editors } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: footercitylights } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: electricvehicleandchargings } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: events } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: donates } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
  
    const { data: digitalinfrastructures } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: cybersecurities } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: companies } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: citylights } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: climateandweathers } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: cleanenergies } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
  
    const { data: citizensecurities } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: blogs } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: articles } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: cityprofiles } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: researches } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: webinars } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: opinions } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: editorblogs } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: cityresources } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: smartcities } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: whitepapers } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: prodcasts } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: aiandmachines } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: analytics } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: marketmonets } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: trendreports } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: privacysecurities } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: governancecitizens } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: citizenengagements } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: energyenvironments } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: airqualities } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: batteriesrenewables } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: solarpowers } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: windpowers } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: mobilities } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: airtravels } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: electricvehicles } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: railtravels } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: urbanspaces } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: commercialbuildings } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: culturalspaces } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: municipalbuildings } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
  
    const { data: latestwebs } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );
    const { data: specials } = useFetch(
      `/${collection}?populate=*&filters[id][$eq]=${id}`
    );

    if (isLoading) {
      return <Loader/>
    }

  return (
    <>
      <Helmet>
        <title>Search - Smart City Citizen</title>
        <meta name="description" content="search" />
      </Helmet>
      <section>
        <div className="container">
          <div className="search_wrapper">
            <div className="content_wrapper">
              <div className="title">
                <h1>Content</h1>
                <hr />
              </div>
              <div className="contents">
                {allnewses?.map((allnews) => (
                  <NewsCard
                    key={allnews.id}
                    allnews={allnews}
                    collection="allnewses"
                  />
                ))}

                {parksandgreenspaces?.map((parksandgreenspace) => (
                  <NewsCard
                    key={parksandgreenspace.id}
                    allnews={parksandgreenspace}
                    collection="parksandgreenspaces"
                  />
                ))}

                {wastemanagements?.map((wastemanagement) => (
                  <NewsCard
                    key={wastemanagement.id}
                    allnews={wastemanagement}
                    collection="wastemanagements"
                  />
                ))}

                {volunteers?.map((volunteer) => (
                  <NewsCard
                    key={volunteer.id}
                    allnews={volunteers}
                    collection="volunteers"
                  />
                ))}

                {trafficcongestions?.map((trafficcongestion) => (
                  <NewsCard
                    key={trafficcongestion.id}
                    allnews={trafficcongestion}
                    collection="trafficcongestions"
                  />
                ))}

                {sustainabilities?.map((sustainability) => (
                  <NewsCard
                    key={sustainability.id}
                    allnews={sustainability}
                    collection="sustainabilities"
                  />
                ))}

                {solarprograms?.map((solarprogram) => (
                  <NewsCard
                    key={solarprogram.id}
                    allnews={solarprogram}
                    collection="solarprograms"
                  />
                ))}

                {smartindustries?.map((smartindustry) => (
                  <NewsCard
                    key={smartindustry.id}
                    allnews={smartindustry}
                    collection="smartindustries"
                  />
                ))}

                {smartbuildings?.map((smartbuilding) => (
                  <NewsCard
                    key={smartbuilding.id}
                    allnews={smartbuilding}
                    collection="smartbuildings"
                  />
                ))}

                {publictransports?.map((publictransport) => (
                  <NewsCard
                    key={publictransport.id}
                    allnews={publictransport}
                    collection="publictransports"
                  />
                ))}

                {pedestrians?.map((pedestrian) => (
                  <NewsCard
                    key={pedestrian.id}
                    allnews={pedestrian}
                    collection="pedestrians"
                  />
                ))}

                {partners?.map((partner) => (
                  <NewsCard
                    key={partner.id}
                    allnews={partner}
                    collection="partners"
                  />
                ))}

                {inthenewses?.map((inthenews) => (
                  <NewsCard
                    key={inthenews.id}
                    allnews={inthenews}
                    collection="inthenewses"
                  />
                ))}

                {noiseairqualities?.map((noiseairquality) => (
                  <NewsCard
                    key={noiseairquality.id}
                    allnews={noiseairquality}
                    collection="noiseairqualities"
                  />
                ))}

                {jobses?.map((jobs) => (
                  <NewsCard
                    key={jobs.id}
                    allnews={jobs}
                    collection="jobses"
                  />
                ))}

                {editors?.map((editor) => (
                  <NewsCard
                    key={editor.id}
                    allnews={editor}
                    collection="editors"
                  />
                ))}

                {footercitylights?.map((footercitylight) => (
                  <NewsCard
                    key={footercitylight.id}
                    allnews={footercitylight}
                    collection="footercitylights"
                  />
                ))}

                {electricvehicleandchargings?.map((electricvehicleandcharging) => (
                  <NewsCard
                    key={electricvehicleandcharging.id}
                    allnews={electricvehicleandcharging}
                    collection="electricvehicleandchargings"
                  />
                ))}

                {events?.map((event) => (
                  <NewsCard
                    key={event.id}
                    allnews={event}
                    collection="events"
                  />
                ))}

                {donates?.map((donate) => (
                  <NewsCard
                    key={donate.id}
                    allnews={donate}
                    collection="donates"
                  />
                ))}

                {digitalinfrastructures?.map((digitalinfrastructure) => (
                  <NewsCard
                    key={digitalinfrastructure.id}
                    allnews={digitalinfrastructure}
                    collection="digitalinfrastructures"
                  />
                ))}

                {cybersecurities?.map((cybersecuritie) => (
                  <NewsCard
                    key={cybersecuritie.id}
                    allnews={cybersecuritie}
                    collection="cybersecurities"
                  />
                ))}

                {companies?.map((companie) => (
                  <NewsCard
                    key={companie.id}
                    allnews={companie}
                    collection="companies"
                  />
                ))}

                {citylights?.map((citylight) => (
                  <NewsCard
                    key={citylight.id}
                    allnews={citylight}
                    collection="citylights"
                  />
                ))}

                {climateandweathers?.map((climateandweather) => (
                  <NewsCard
                    key={climateandweather.id}
                    allnews={climateandweather}
                    collection="climateandweathers"
                  />
                ))}

                {cleanenergies?.map((cleanenergie) => (
                  <NewsCard
                    key={cleanenergie.id}
                    allnews={cleanenergie}
                    collection="cleanenergies"
                  />
                ))}

                {citizensecurities?.map((citizensecuritie) => (
                  <NewsCard
                    key={citizensecuritie.id}
                    allnews={citizensecuritie}
                    collection="citizensecurities"
                  />
                ))}

                {blogs?.map((blog) => (
                  <NewsCard
                    key={blog.id}
                    allnews={blog}
                    collection="blogs"
                  />
                ))}

                {articles?.map((article) => (
                  <NewsCard
                    key={article.id}
                    allnews={article}
                    collection="articles"
                  />
                ))}

                {cityprofiles?.map((cityprofile) => (
                  <NewsCard
                    key={cityprofile.id}
                    allnews={cityprofile}
                    collection="cityprofiles"
                  />
                ))}

                {researches?.map((researche) => (
                  <NewsCard
                    key={researche.id}
                    allnews={researche}
                    collection="researches"
                  />
                ))}

                {webinars?.map((webinar) => (
                  <NewsCard
                    key={webinar.id}
                    allnews={webinar}
                    collection="webinars"
                  />
                ))}

                {opinions?.map((opinion) => (
                  <NewsCard
                    key={opinion.id}
                    allnews={opinion}
                    collection="opinions"
                  />
                ))}

                {editorblogs?.map((editorblog) => (
                  <NewsCard
                    key={editorblog.id}
                    allnews={editorblog}
                    collection="editorblogs"
                  />
                ))}

                {cityresources?.map((cityresource) => (
                  <NewsCard
                    key={cityresource.id}
                    allnews={cityresource}
                    collection="cityresources"
                  />
                ))}

                {smartcities?.map((smartcity) => (
                  <NewsCard
                    key={smartcity.id}
                    allnews={smartcity}
                    collection="smartcities"
                  />
                ))}

                {whitepapers?.map((whitepaper) => (
                  <NewsCard
                    key={whitepaper.id}
                    allnews={whitepaper}
                    collection="whitepapers"
                  />
                ))}

                {prodcasts?.map((prodcast) => (
                  <NewsCard
                    key={prodcast.id}
                    allnews={prodcast}
                    collection="prodcasts"
                  />
                ))}

                {aiandmachines?.map((aiandmachine) => (
                  <NewsCard
                    key={aiandmachine.id}
                    allnews={aiandmachine}
                    collection="aiandmachines"
                  />
                ))}

                {analytics?.map((analytic) => (
                  <NewsCard
                    key={analytic.id}
                    allnews={analytic}
                    collection="analytics"
                  />
                ))}

                {marketmonets?.map((marketmonet) => (
                  <NewsCard
                    key={marketmonet.id}
                    allnews={marketmonet}
                    collection="marketmonets"
                  />
                ))}

                {/* WORK ON TOMOROW */}
                {trendreports?.map((trendreport) => (
                  <NewsCard
                    key={trendreport.id}
                    allnews={trendreport}
                    collection="trendreports"
                  />
                ))}
                
                {privacysecurities?.map((privacysecurity) => (
                  <NewsCard
                    key={privacysecurity.id}
                    allnews={privacysecurity}
                    collection="privacysecurities"
                  />
                ))}
                
                {governancecitizens?.map((governancecitizen) => (
                  <NewsCard
                    key={governancecitizen.id}
                    allnews={governancecitizen}
                    collection="governancecitizens"
                  />
                ))}
                
                {citizenengagements?.map((citizenengagement) => (
                  <NewsCard
                    key={citizenengagement.id}
                    allnews={citizenengagement}
                    collection="citizenengagements"
                  />
                ))}
                
                {energyenvironments?.map((energyenvironment) => (
                  <NewsCard
                    key={energyenvironment.id}
                    allnews={energyenvironment}
                    collection="energyenvironments"
                  />
                ))}
                
                {airqualities?.map((airquality) => (
                  <NewsCard
                    key={airquality.id}
                    allnews={airquality}
                    collection="airqualities"
                  />
                ))}
                
                {batteriesrenewables?.map((batteriesrenewable) => (
                  <NewsCard
                    key={batteriesrenewable.id}
                    allnews={batteriesrenewable}
                    collection="batteriesrenewables"
                  />
                ))}
                
                {solarpowers?.map((solarpower) => (
                  <NewsCard
                    key={solarpower.id}
                    allnews={solarpower}
                    collection="solarpowers"
                  />
                ))}
                
                {windpowers?.map((windpower) => (
                  <NewsCard
                    key={windpower.id}
                    allnews={windpower}
                    collection="windpowers"
                  />
                ))}
                
                {mobilities?.map((mobility) => (
                  <NewsCard
                    key={mobility.id}
                    allnews={mobility}
                    collection="mobilities"
                  />
                ))}
                
                {airtravels?.map((airtravel) => (
                  <NewsCard
                    key={airtravel.id}
                    allnews={airtravel}
                    collection="airtravels"
                  />
                ))}
                
                {electricvehicles?.map((electricvehicle) => (
                  <NewsCard
                    key={electricvehicle.id}
                    allnews={electricvehicle}
                    collection="electricvehicles"
                  />
                ))}

                {railtravels?.map((railtravel) => (
                  <NewsCard
                    key={railtravel.id}
                    allnews={railtravel}
                    collection="railtravels"
                  />
                ))}

                {urbanspaces?.map((urbanspace) => (
                  <NewsCard
                    key={urbanspace.id}
                    allnews={urbanspace}
                    collection="urbanspaces"
                  />
                ))}

                {commercialbuildings?.map((commercialbuilding) => (
                  <NewsCard
                    key={commercialbuilding.id}
                    allnews={commercialbuilding}
                    collection="commercialbuildings"
                  />
                ))}

                {culturalspaces?.map((culturalspace) => (
                  <NewsCard
                    key={culturalspace.id}
                    allnews={culturalspace}
                    collection="culturalspaces"
                  />
                ))}

                {municipalbuildings?.map((municipalbuilding) => (
                  <NewsCard
                    key={municipalbuilding.id}
                    allnews={municipalbuilding}
                    collection="municipalbuildings"
                  />
                ))}

                {latestwebs?.map((latestweb) => (
                  <NewsCard
                    key={latestweb.id}
                    allnews={latestweb}
                    collection="latestwebs"
                  />
                ))}

                {specials?.map((special) => (
                  <NewsCard
                    key={special.id}
                    allnews={special}
                    collection="specials"
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

export default SearchPage;
