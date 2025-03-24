import butterflies from "../assets/data/butterflies.json";
import "../assets/styles/butterfly.scss";
import { useLocation, Link } from "react-router-dom";
import NoResults from "../components/NoResults";

export default function Butterfly() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");

  const filteredButterflies = butterflies.filter(
    (butterfly) => butterfly.name.toLowerCase() === name?.toLowerCase()
  );

  return (
    <div id="div-butterfly">
      <Link to="/">Retour à l'accueil</Link>
      {filteredButterflies.length > 0 ? (
        filteredButterflies.map((butterfly) => {
          return (
            <>
              <img
                src={`/butterfly/images/butterflies/${butterfly.image}`}
                alt={butterfly.name}
              />
              <p id="p-butterfly">{butterfly.name}</p>
              <p>{butterfly.description}</p>
            </>
          );
        })
      ) : (
        <NoResults searchText={name ?? undefined} />
      )}
    </div>
  );
}
