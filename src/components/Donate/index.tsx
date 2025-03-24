import { Link } from "react-router-dom";
import "./style.scss";

export default function Donate() {
  return (
    <Link
      id="a-donate"
      to="https://www.helloasso.com/e/recherche/projets?query=orphelin"
      target="_blank"
      rel="noopener noreferrer"
    >
      Faire un don
    </Link>
  );
}
