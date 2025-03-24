import { useState, useEffect } from "react";
import Header from "../components/Header";
import butterfliesData from "../assets/data/butterflies.json";
import "../assets/styles/home.scss";
import NoResults from "../components/NoResults";
import ButterflyList from "../components/ButterflyList";

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
      {/* <ButterflyList filteredButterflies={filteredButterflies.slice(0, 4)} /> */}
      <ButterflyList filteredButterflies={filteredButterflies} />
    </>
  );
}
