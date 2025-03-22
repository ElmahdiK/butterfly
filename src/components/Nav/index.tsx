import "./style.scss";
import { Outlet, Link } from "react-router-dom";
import LINKS from "../../assets/data/nav.json";

export default function Nav() {
  return (
    <>
      <nav>
        <p>Butterfly</p>
        <ul>
          {LINKS.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
