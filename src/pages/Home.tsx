import { useState, useEffect } from "react";
import Header from "../components/Header";
import butterfliesData from "../assets/data/butterflies.json";
import "../assets/styles/home.scss";
import ButterflyList from "../components/ButterflyList";
import Pagination from "../components/Pagination";

export default function Home() {
  const [, setButterflies] = useState(butterfliesData);
  const [filteredButterflies, setFilteredButterflies] =
    useState(butterfliesData);
  const [currentPage, setCurrentPage] = useState(1);

  // const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setButterflies(butterfliesData);
    setFilteredButterflies(butterfliesData);
  }, []);

  const NB_BUTTERFLIES_PERPAGE = 12;
  const NB_PAGES = Math.ceil(
    filteredButterflies.length / NB_BUTTERFLIES_PERPAGE
  );

  // const handleSearch = (searchTerm: string) => {
  //   setSearchText(searchTerm);
  //   if (searchTerm === "") {
  //     setFilteredButterflies(butterflies);
  //     return;
  //   }

  //   const filtered = butterflies.filter((butterfly) => {
  //     return butterfly.name.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  //   setFilteredButterflies(filtered);
  // };

  return (
    <>
      <Header />
      <ButterflyList
        filteredButterflies={filteredButterflies.slice(
          NB_BUTTERFLIES_PERPAGE * (currentPage - 1),
          NB_BUTTERFLIES_PERPAGE * currentPage
        )}
      />
      <Pagination
        currentPage={currentPage}
        nbPages={NB_PAGES}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
