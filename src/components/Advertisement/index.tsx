import { Link } from "react-router-dom";
import "./style.scss";

export default function Advertisement() {
  return (
    <Link to="https://elmahdik.github.io/fr/#contact">
      <div id="div-advertisement">
        <p>Nouveau !</p>
        <img src="/butterfly/img/ads/butterfly.gif" alt="advertisement" />
        <p>Publier votre annonce ici !</p>
      </div>
    </Link>
  );
}
