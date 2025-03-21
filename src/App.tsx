import "./styles/App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // La page Shop que nous avons créée
import Shop from "./pages/Shop"; // La page Shop que nous avons créée
import About from "./pages/About";

const App = () => {
  const LINKS = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Boutique", path: "/shop" },
  ];
  return (
    <Router>
      <nav>
        <p>Butterfly</p>
        <ul>
          {LINKS.map((link) => (
            <li key={link.path}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default App;
