import "./style.scss";
import { useState } from "react";
import butterfliesInfos from "../../assets/data/butterfliesInfos.json";

export default function InfoBar() {
  const [randomIndex, setRandomIndex] = useState(0);

  const handleClick = () => {
    setRandomIndex(Math.floor(Math.random() * butterfliesInfos.info.length));
  };

  return (
    <div id="div-info-bar">
      <span>Le saviez-vous ? 🦋</span>
      <p
        dangerouslySetInnerHTML={{
          __html: "« " + butterfliesInfos.info[randomIndex] + " »",
        }}
      />
      <button onClick={handleClick}>autre info</button>
    </div>
  );
}
