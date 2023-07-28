import "./page.scss";
import NewsCard from "../newsCard/NewsCard";
import SideBar from "../sideBar/SideBar";
// useFetch
import useFetch from "../../hooks/useFetch";

const Page = ({
  pageHeading,
  pagePara,

  specials,
  aiandmachines,
  analytics,
  marketmonets,
  privacysecurities,
  governancecitizens,
  citizenengagements,
  citizensecurities,
  energyenvironments,
  airqualities,
  batteriesrenewables,
  solarpowers,
  windpowers,
  mobilities,
  airtravels,
  electricvehicles,
  railtravels,
  urbanspaces,
  commercialbuildings,
  culturalspaces,
  municipalbuildings,
}) => {
  // get city profiles
  const { data: cityprofiles } = useFetch("/cityprofiles?populate=*");
  console.log(cityprofiles);

  // get Webinar
  const { data: webinars } = useFetch("/webinars?populate=*");
  console.log(webinars);

  return (
    <>
      <section>
        <div className="container">
          <div className="page_wrapper">
            <div className="latest_news">
              <div className="news_sec">
                <div className="intro">
                  <h1>{pageHeading}</h1>
                  <p>{pagePara}</p>
                </div>
                <div className="newses">
                  {specials?.map((special) => (
                    <NewsCard key={special.id} allnews={special} collection="specials" />
                  ))}
                  {aiandmachines?.map((aiandmachine) => (
                    <NewsCard key={aiandmachine.id} allnews={aiandmachine} collection="aiandmachines" />
                  ))}
                  {analytics?.map((analytic) => (
                    <NewsCard key={analytic.id} allnews={analytic} collection="analytics" />
                  ))}
                  {marketmonets?.map((marketmonet) => (
                    <NewsCard key={marketmonet.id} allnews={marketmonet} collection="marketmonets" />
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
                    <NewsCard key={energyenvironment.id} allnews={energyenvironment} collection="energyenvironments" />
                  ))}
                  {airqualities?.map((airqualitie) => (
                    <NewsCard key={airqualitie.id} allnews={airqualitie} collection="airqualities" />
                  ))}
                  {batteriesrenewables?.map((batteriesrenewable) => (
                    <NewsCard key={batteriesrenewable.id} allnews={batteriesrenewable} collection="batteriesrenewables" />
                  ))}
                  {solarpowers?.map((solarpower) => (
                    <NewsCard key={solarpower.id} allnews={solarpower} collection="solarpowers" />
                  ))}
                  
                  {windpowers?.map((windpower) => (
                    <NewsCard key={windpower.id} allnews={windpower} collection="windpowers" />
                  ))}
                  {mobilities?.map((mobility) => (
                    <NewsCard key={mobility.id} allnews={mobility} collection="mobilities" />
                  ))}
                  {airtravels?.map((airtravel) => (
                    <NewsCard key={airtravel.id} allnews={airtravel} collection="airtravels" />
                  ))}
                  {electricvehicles?.map((electricvehicle) => (
                    <NewsCard key={electricvehicle.id} allnews={electricvehicle} collection="electricvehicles" />
                  ))}
                  {railtravels?.map((railtravel) => (
                    <NewsCard key={railtravel.id} allnews={railtravel} collection="railtravels" />
                  ))}
                  {urbanspaces?.map((urbanspace) => (
                    <NewsCard key={urbanspace.id} allnews={urbanspace} collection="urbanspaces" />
                  ))}
                  {commercialbuildings?.map((commercialbuilding) => (
                    <NewsCard key={commercialbuilding.id} allnews={commercialbuilding} collection="commercialbuildings" />
                  ))}
                  {culturalspaces?.map((culturalspace) => (
                    <NewsCard key={culturalspace.id} allnews={culturalspace} collection="culturalspaces" />
                  ))}
                  {municipalbuildings?.map((municipalbuilding) => (
                    <NewsCard key={municipalbuilding.id} allnews={municipalbuilding} collection="municipalbuildings" />
                  ))}
                </div>
              </div>
              <SideBar />
            </div>
            {/* city profile */}
            <div className="city_profile">
              <h1>CITY PROFILES</h1>
              <div className="profile_wrapper">
                {cityprofiles?.map((cityprofile) => (
                  <NewsCard key={cityprofile.id} allnews={cityprofile} collection="cityprofiles" />
                ))}
              </div>
            </div>
            <div className="webinars">
              <h1>WEBINARS</h1>
              <div className="webinars_wrap">
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
};

export default Page;
