import "./styles/App.scss";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";

const App = () => {
  const LINKS = [
    { name: "Accueil", path: "/butterfly/" },
    { name: "À propos", path: "/butterfly/about" },
    { name: "Boutique", path: "/butterfly/shop" },
  ];

  return (
    <Router>
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

      <Routes>
        <Route path="/butterfly/" element={<Home />} />
        <Route path="/butterfly/about" element={<About />} />
        <Route path="/butterfly/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default App;
