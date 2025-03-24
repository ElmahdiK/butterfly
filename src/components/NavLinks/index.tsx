import LINKS from "../../assets/data/nav.json";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import "./style.scss";

export default function NavLinks() {
  return (
    <>
      <ul id="ul-links">
        {LINKS.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <SearchBar />
    </>
  );
}
