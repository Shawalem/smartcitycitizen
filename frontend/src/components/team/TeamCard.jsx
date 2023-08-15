import React from "react";
import "./teamCard.scss";

const TeamCard = ({ team }) => {
  console.log(team)

  if (!team) {
    return null;
  }

  const teamImg = team.attributes?.img?.data?.attributes.url;

  return (
    <div className="memberCard">
      <h3>{team.attributes.position}</h3>
      <div className="member_info">
        <div>
          <h4>{team.attributes.heading}</h4>
          <p>
            {team.attributes.details}
          </p>
          <p>Contact details: {team.attributes.email}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
