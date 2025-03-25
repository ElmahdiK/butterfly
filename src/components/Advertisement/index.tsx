import { Link } from "react-router-dom";
import "./style.scss";

type Advertisement = {
  imgSrc: string;
};
export default function Advertisement(props : Advertisement) {
  const { imgSrc } = props;

  return (
    <Link to="/contact">
      <div id="div-advertisement">
        <p>Nouveau !</p>
        <img src={imgSrc} alt="advertisement" />
        <p>Publiez votre annonce ici !</p>
      </div>
    </Link>
  );
}
