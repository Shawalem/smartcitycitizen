import "./team.scss";
import { TeamCard } from "../../../components";
import { Helmet } from "react-helmet";
// useFetch
import useFetch from "../../../hooks/useFetch";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


const Team = () => {
  const { data: teampages } = useFetch("/teampages?populate=*");
  return (
    <>
      <Helmet>
        <title>The Team - Smart City Citizen</title>
        <meta charSet="utf-8"/>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, world news"/>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="information about our team" />
      </Helmet>
      <section>
        <div className="container">
          <div className="team_wrapper">
            <h1>careers</h1>
            <div className="the_team">
              {teampages?.map((teampage) => (
                <TeamCard key={teampage.id} team={teampage} collection={teampages} />
              ))}
              {/* <TeamCard
              position="CHRIS COOKE | Founder & CEO"
              email="+44 (0) 20 7062 2526 | chrisc@smartcitiesworld.net"
              heading="Chris is an entrepreneur with over 23 years’ experience in launching, growing, acquiring, divesting media and events business brands."
              details="His focus has been on technology driven markets. Smart Cities is an incredible sector to be involved in as it impacts over 55% of the world’s population today growing to 68% in by 2050.Digital transformation is revolutionising the design and function of urban spaces and how citizens live in and interact with them and he finds that fascinating.He is collaborative by nature and enjoys building long term partnerships that deliver ongoing value for all involved."
            /> */}

            {/* this is for testing perpus  */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
