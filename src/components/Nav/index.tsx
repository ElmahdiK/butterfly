import "./style.scss";
import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  const LINKS = [
    { name: "Accueil", path: "./" },
    { name: "À propos", path: "about" },
    { name: "Boutique", path: "shop" },
  ];

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
