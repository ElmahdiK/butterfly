import { Link } from "react-router-dom";
import "./style.scss";

export default function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Butterfly by <Link to="https://elmahdik.github.io/" 
      target="_blank"
      rel="noopener noreferrer">Elmahdi KORFED</Link></p>
    </footer>
  );
}
