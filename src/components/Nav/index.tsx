import "./style.scss";
import { Link } from "react-router-dom";
import LINKS from "../../assets/data/nav.json";

export default function Nav() {
  return (
    <>
      <nav>
        <p>
          <Link to={`/`}>Butterfly</Link>
        </p>
        <ul>
          {LINKS.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
