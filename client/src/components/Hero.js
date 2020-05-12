import React from "react";
import "./hero.css";

const Hero = ({ hero }) => {
  // Fetching of images is based on this: http://www.sharonkuo.me/dota2/heroes.html
  const shortName = hero.name.replace(/^(npc_dota_hero_)/, "");

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
