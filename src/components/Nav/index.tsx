import "./style.scss";
import { Link } from "react-router-dom";
import Donate from "../Donate";
import NavLinks from "../NavLinks"; // Adjust the path as necessary

export default function Nav() {
  return (
    <nav>
      <div>
        <Link id="a-logo" to={`/`}>
          Butterfly
        </Link>
        <Donate />
      </div>
      <NavLinks />
    </nav>
  );
}
