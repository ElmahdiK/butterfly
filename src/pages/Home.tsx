import { useState, useEffect } from "react";
import Butterfly from "../components/Butterfly";
import Header from "../components/Header";
import butterfliesData from "../assets/data/butterflies.json";
import "../assets/styles/home.scss";
import NoResults from "../components/NoResults";

export default function Home() {
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
      {filteredButterflies.length === 0 && (
        <NoResults searchText={searchText} />
      )}
      <main id="main-home">
        {/* filteredButterflies.slice(0, 4).map */}
        {filteredButterflies.map((butterfly, index) => (
          <Butterfly key={index} name={butterfly.name} img={butterfly.image} />
        ))}
      </main>
    </>
  );
}
