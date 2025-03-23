import { useState, useEffect } from "react";
import Butterfly from "../components/Butterfly";
import Header from "../components/Header";
import butterfliesData from "../assets/data/butterflies.json";
import "../assets/styles/home.scss";

const Home = () => {
  const [butterflies, setButterflies] = useState(butterfliesData);
  const [filteredButterflies, setFilteredButterflies] =
    useState(butterfliesData);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setButterflies(butterfliesData);
    setFilteredButterflies(butterfliesData);
  }, []);

  const handleSearch = (searchTerm: string) => {
    setSearchText(searchTerm);
    if (searchTerm === "") {
      setFilteredButterflies(butterflies);
      return;
    }

    const filtered = butterflies.filter((butterfly) => {
      return butterfly.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredButterflies(filtered);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <main id="main-home">
        {filteredButterflies.map((butterfly, index) => (
          <Butterfly
            key={index}
            name={butterfly.name}
            img={butterfly.image}
            audio={1}
          />
        ))}
        {filteredButterflies.length === 0 && (
          <p className="no-results">
            Aucun résultat trouvé pour " {searchText} "{" "}
            <img src="./img/noresults.jpg" />
          </p>
        )}
      </main>
    </>
  );
};

export default Home;
