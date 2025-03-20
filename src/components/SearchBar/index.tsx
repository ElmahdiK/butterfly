import "./style.scss";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input type="search" placeholder="Search..." onChange={handleChange} />
  );
};

export default SearchBar;
