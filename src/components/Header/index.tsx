import SearchBar from "../SearchBar";
import "./style.scss";

interface HeaderProps {
  title: string;
  onSearch: (searchTerm: string) => void;
}

const Header = (props: HeaderProps) => {
  const { title, onSearch } = props;
  return (
    <header>
      <p>{title}</p> <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;
