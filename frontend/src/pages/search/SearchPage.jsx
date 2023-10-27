import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Helmet } from "react-helmet";
import "./searchPage.scss";
import { Loader, NewsCard } from "../../components";

const SearchPage = () => {
  const { collection } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  console.log(searchTerm);
  // get all products based on search term
  // get latest news
    // import from backend
    const { data: allnewses, isLoading } = useFetch(
      `/allnewses?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: parksandgreenspaces } = useFetch(
      `/parksandgreenspaces?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: wastemanagements } = useFetch(
      `/parksandgreenspaces?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: volunteers } = useFetch(
      `/volunteers?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: trafficcongestions } = useFetch(
      `/trafficcongestions?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: sustainabilities } = useFetch(
      `/sustainabilities?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: solarprograms } = useFetch(
      `/solarprograms?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: smartindustries } = useFetch(
      `/smartindustries?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: smartbuildings } = useFetch(
      `/smartbuildings?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: publictransports } = useFetch(
      `/publictransports?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: pedestrians } = useFetch(
      `/pedestrians?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: partners } = useFetch(
      `/partners?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: inthenewses } = useFetch(
      `/inthenewses?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: noiseairqualities } = useFetch(
      `/noiseairqualities?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: jobses } = useFetch(
      `/jobses?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: editors } = useFetch(
      `/editors?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: footercitylights } = useFetch(
      `/footercitylights?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: electricvehicleandchargings } = useFetch(
      `/electricvehicleandchargings?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: events } = useFetch(
      `/events?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: donates } = useFetch(
      `/donates?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: digitalinfrastructures } = useFetch(
      `/digitalinfrastructures?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: cybersecurities } = useFetch(
      `/cybersecurities?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: companies } = useFetch(
      `/companies?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: citylights } = useFetch(
      `/citylights?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: climateandweathers } = useFetch(
      `/climateandweathers?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: cleanenergies } = useFetch(
      `/cleanenergies?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: citizensecurities } = useFetch(
      `/citizensecurities?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: blogs } = useFetch(
      `/blogs?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: articles } = useFetch(
      `/articles?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: cityprofiles } = useFetch(
      `/cityprofiles?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: researches } = useFetch(
      `/researches?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: webinars } = useFetch(
      `/webinars?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: opinions } = useFetch(
      `/opinions?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: editorblogs } = useFetch(
      `/editorblogs?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: cityresources } = useFetch(
      `/cityresources?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: smartcities } = useFetch(
      `/$smartcities?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: whitepapers } = useFetch(
      `/whitepapers?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: prodcasts } = useFetch(
      `/prodcasts?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: aiandmachines } = useFetch(
      `/aiandmachines?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: analytics } = useFetch(
      `/analytics?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: marketmonets } = useFetch(
      `/?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    {
      /* WORK ON TOMOROW */
    }
  
    const { data: trendreports } = useFetch(
      `/trendreports?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: privacysecurities } = useFetch(
      `/privacysecurities?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: governancecitizens } = useFetch(
      `/governancecitizens?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: citizenengagements } = useFetch(
      `/citizenengagements?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: energyenvironments } = useFetch(
      `/energyenvironments?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: airqualities } = useFetch(
      `/airqualities?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: batteriesrenewables } = useFetch(
      `/batteriesrenewables?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: solarpowers } = useFetch(
      `/solarpowers?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: windpowers } = useFetch(
      `/windpowers?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: mobilities } = useFetch(
      `/mobilities?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: airtravels } = useFetch(
      `/$airtravels?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: electricvehicles } = useFetch(
      `/electricvehicles?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: railtravels } = useFetch(
      `/railtravels?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: urbanspaces } = useFetch(
      `/urbanspaces?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: commercialbuildings } = useFetch(
      `/commercialbuildings?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: culturalspaces } = useFetch(
      `/culturalspaces?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: municipalbuildings } = useFetch(
      `/municipalbuildings?populate=*&filters[title][$contains]=${searchTerm}`
    );
  
    const { data: latestwebs } = useFetch(
      `/latestwebs?populate=*&filters[title][$contains]=${searchTerm}`
    );
    const { data: specials } = useFetch(
      `/specials?populate=*&filters[title][$contains]=${searchTerm}`
    );

    if (isLoading) {
      return <Loader/>
    }

  return (
    <>
      <Helmet>
        <title>Search - Smart City Citizen</title>
        <meta name="description" content="search" />
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

export default SearchPage;
