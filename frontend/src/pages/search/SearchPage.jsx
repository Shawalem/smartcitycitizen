import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Helmet } from "react-helmet";
import "./searchPage.scss";
import { NewsCard } from "../../components";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  console.log(searchTerm);
  // get all products based on search term
  // get latest news
  const { data: allnewses } = useFetch(
    `/allnewses?populate=*&filters[title][$contains]=${searchTerm}`
  );
  // get editors pick
  const { data: editors } = useFetch(
    `/editors?populate=*&filters[title][$contains]=${searchTerm}`
  );

  // get latest webinar pick
  const { data: latestwebs } = useFetch(
    `/latestwebs?populate=*&filters[title][$contains]=${searchTerm}`
  );

  // get special reports
  const { data: specials } = useFetch(
    `/specials?populate=*&filters[title][$contains]=${searchTerm}`
  );

  // get city profiles
  const { data: cityprofiles } = useFetch(
    `/cityprofiles?populate=*&filters[title][$contains]=${searchTerm}`
  );

  // get search
  const { data: researches } = useFetch(
    `/researches?populate=*&filters[title][$contains]=${searchTerm}`
  );

  // get Webinar
  const { data: webinars } = useFetch(
    `/webinars?populate=*&filters[title][$contains]=${searchTerm}`
  );

  const { data: aiandmachines } = useFetch(
    `/aiandmachines?populate=*&filters[title][$contains]=${searchTerm}`
  );

  const { data: analytics } = useFetch(
    `/analytics?populate=*&filters[title][$contains]=${searchTerm}`
  );

  const { data: marketmonets } = useFetch(
    `/marketmonets?populate=*&filters[title][$contains]=${searchTerm}`
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

  const { data: citizensecurities } = useFetch(
    `/citizensecurities?populate=*&filters[title][$contains]=${searchTerm}`
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
    `/airtravels?populate=*&filters[title][$contains]=${searchTerm}`
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

                {editors?.map((editor) => (
                  <NewsCard
                    key={editor.id}
                    allnews={editor}
                    collection="editors"
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

                {citizensecurities?.map((citizensecuritie) => (
                  <NewsCard
                    key={citizensecuritie.id}
                    allnews={citizensecuritie}
                    collection="citizensecurities"
                  />
                ))}

                {energyenvironments?.map((energyenvironment) => (
                  <NewsCard
                    key={energyenvironment.id}
                    allnews={energyenvironment}
                    collection="energyenvironments"
                  />
                ))}

                {airqualities?.map((airqualitie) => (
                  <NewsCard
                    key={airqualitie.id}
                    allnews={airqualitie}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
