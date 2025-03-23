import "./style.scss";
import { useState } from "react";
import infoButterflies from "../../assets/data/infoButterflies.json";

const InfoBar = () => {
  const [randomIndex, setRandomIndex] = useState(0);

  const handleClick = () => {
    setRandomIndex(Math.floor(Math.random() * infoButterflies.info.length));
  };

  return (
    <div id="div-info-bar">
      <span>Le saviez-vous ? 🦋</span>
      <p
        dangerouslySetInnerHTML={{
          __html: "« " + infoButterflies.info[randomIndex] + " »",
        }}
      />
      <button onClick={handleClick}>autre info</button>
    </div>
  );
};

export default InfoBar;
