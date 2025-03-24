import "./style.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

// type SearchBarProps = {
//   onSearch: (searchTerm: string) => void;
// };

export default function SearchBar() {
  //props: SearchBarProps
  // const { onSearch } = props;
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    // console.log(searchTerm);
    navigate(`/Butterfly?name=${searchTerm}`);
  };

  return (
    <div id="div-search">
      <input
        type="search"
        placeholder="Rechercher..."
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        <AiOutlineSearch />
      </button>
    </div>
  );
}
