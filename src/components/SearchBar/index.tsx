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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim() === "") return;
    navigate(`/Butterfly?name=${searchTerm}`);
  };

  return (
    <form id="div-search" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Rechercher..."
        onChange={handleChange}
      />
      <button type="submit">
        <AiOutlineSearch />
      </button>
    </form>
  );
}
