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
      <div>
        <span>Le saviez-vous ? 🦋</span>
        <button onClick={handleClick}>Afficher une autre info</button>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: "« " + infoButterflies.info[randomIndex] + " »",
        }}
      />
    </div>
  );
};

export default InfoBar;
