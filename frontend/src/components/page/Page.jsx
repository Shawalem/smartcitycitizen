import "./page.scss";
import NewsCard from "../newsCard/NewsCard";
import SideBar from "../sideBar/SideBar";
// useFetch
import useFetch from "../../hooks/useFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Page = ({
  cleanenergies,
  climateandweathers,
  wastemanagements,
  cybersecurities,
  trafficcongestions,
  publictransports,
  noiseairqualities,
  electricvehicleandchargings,
  parksandgreenspaces,
  smartbuildings,
  pedestrians,
  donates,
  volunteers,
  pageHeading,
  digitalinfrastructures,
  pagePara,
  smartindustries,
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
  sustainabilities,
  solarprograms,
}) => {
  const { data: opinions } = useFetch("/opinions?populate=*");
  const buildingLink = window.location.host + "/smart-buildings";
  const CommercialbuildingLink = window.location.host + "/commercial-building";
  const linkName = window.location.href;
  return (
    <>
      <div className="container">
        <div className="page_wrapper">
          <div className="latest_news">
            <div className="news_sec">
              
              <div className="intro">
                <h1>{pageHeading}</h1>
                <div className="news_paragraph">
                  <ReactMarkdown>{pagePara}</ReactMarkdown>
                </div>
              </div>

              
              <div className="newses">
                {citizenengagements?.map((citizenengagement) => (
                  <NewsCard
                    key={citizenengagement.id}
                    allnews={citizenengagement}
                    collection="citizenengagements"
                  />
                ))}

                {wastemanagements?.map((wastemanagement) => (
                  <NewsCard
                    key={wastemanagement.id}
                    allnews={wastemanagement}
                    collection="wastemanagements"
                  />
                ))}

                {solarprograms?.map((solarprogram) => (
                  <NewsCard
                    key={solarprogram.id}
                    allnews={solarprogram}
                    collection="solarprograms"
                  />
                ))}

                {sustainabilities?.map((sustainability) => (
                  <NewsCard
                    key={sustainability.id}
                    allnews={sustainability}
                    collection="sustainabilities"
                  />
                ))}

                {climateandweathers?.map((climateandweather) => (
                  <NewsCard
                    key={climateandweather.id}
                    allnews={climateandweather}
                    collection="climateandweathers"
                  />
                ))}

                {cleanenergies?.map((cleanenergy) => (
                  <NewsCard
                    key={cleanenergy.id}
                    allnews={cleanenergy}
                    collection="cleanenergies"
                  />
                ))}

                {trafficcongestions?.map((trafficcongestion) => (
                  <NewsCard
                    key={trafficcongestion.id}
                    allnews={trafficcongestion}
                    collection="trafficcongestions"
                  />
                ))}

                {publictransports?.map((publictransport) => (
                  <NewsCard
                    key={publictransport.id}
                    allnews={publictransport}
                    collection="publictransports"
                  />
                ))}

                {electricvehicleandchargings?.map(
                  (electricvehicleandcharging) => (
                    <NewsCard
                      key={electricvehicleandcharging.id}
                      allnews={electricvehicleandcharging}
                      collection="electricvehicleandchargings"
                    />
                  )
                )}

                {noiseairqualities?.map((noiseairquality) => (
                  <NewsCard
                    key={noiseairquality.id}
                    allnews={noiseairquality}
                    collection="noiseairqualities"
                  />
                ))}

                {smartindustries?.map((smartindustrie) => (
                  <NewsCard
                    key={smartindustrie.id}
                    allnews={smartindustrie}
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
                {pedestrians?.map((pedestrian) => (
                  <NewsCard
                    key={pedestrian.id}
                    allnews={pedestrian}
                    collection="pedestrians"
                  />
                ))}

                {parksandgreenspaces?.map((parksandgreenspace) => (
                  <NewsCard
                    key={parksandgreenspace.id}
                    allnews={parksandgreenspace}
                    collection="parksandgreenspaces"
                  />
                ))}
                {donates?.map((donate) => (
                  <NewsCard
                    key={donate.id}
                    allnews={donate}
                    collection="donates"
                  />
                ))}
                {cybersecurities?.map((cybersecurity) => (
                  <NewsCard
                    key={cybersecurity.id}
                    allnews={cybersecurity}
                    collection="cybersecurities"
                  />
                ))}
                {digitalinfrastructures?.map((digitalinfrastructure) => (
                  <NewsCard
                    key={digitalinfrastructure.id}
                    allnews={digitalinfrastructure}
                    collection="digitalinfrastructures"
                  />
                ))}

                {volunteers?.map((volunteer) => (
                  <NewsCard
                    key={volunteer.id}
                    allnews={volunteer}
                    collection="volunteers"
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
                {energyenvironments?.map((citizenengagement) => (
                  <NewsCard
                    key={citizenengagement.id}
                    allnews={citizenengagement}
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
            <SideBar />
          </div>
          {linkName.includes(buildingLink, CommercialbuildingLink) ? (
            <></>
          ) : (
            <div className="webinars">
              {/* Nothing  */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
