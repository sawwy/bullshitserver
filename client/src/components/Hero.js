import React from "react";
import "./hero.css";

const Hero = ({ hero }) => {
  console.log("hero", hero);
  const shortName = hero.name.replace(/^(npc_dota_hero_)/, "");
  console.log("short name", shortName);
  return (
    <div className="hero">
      <span>{hero.localized_name}</span>
      <img
        src={`http://cdn.dota2.com/apps/dota2/images/heroes/${shortName}_lg.png`}
      />
      <span>{hero.primary_attr}</span>
    </div>
  );
};

export default Hero;
