import "./style.scss";
import { Link } from "react-router-dom";
import LINKS from "../../assets/data/nav.json";
import Donate from "../Donate";

export default function Nav() {
  return (
    <nav>
      <div>
        <Link id="a-logo" to={`/`}>
          Butterfly
        </Link>
        <Donate />
      </div>
      <ul>
        {LINKS.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
