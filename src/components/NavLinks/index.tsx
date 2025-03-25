import LINKS from "../../assets/data/nav.json";
import { Link } from "react-router-dom";
import "./style.scss";

export default function NavLinks() {
  const LIST_LINKS = LINKS.map((link) => (
    <li key={link.path}>
      <Link to={link.path}>{link.name}</Link>
    </li>
  ));

  return <ul id="ul-links">{LIST_LINKS}</ul>;
}
