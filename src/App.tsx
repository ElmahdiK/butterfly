import { useState, useEffect } from "react";
import Butterfly from "./components/Butterfly";
import Header from "./components/Header";
import butterfliesData from "./assets/butterflies.json";
import "./styles/App.scss";

const App = () => {
  const [butterflies, setButterflies] = useState(butterfliesData);
  const [filteredButterflies, setFilteredButterflies] =
    useState(butterfliesData);

  const [, setSearchText] = useState("");

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
      <Header title="Butterfly" onSearch={handleSearch} />
      <main>
        {filteredButterflies.map((butterfly, index) => (
          <Butterfly
            key={index}
            name={butterfly.name}
            img={butterfly.image}
            audio={1}
          />
        ))}
      </main>
    </>
  );
};

export default App;
