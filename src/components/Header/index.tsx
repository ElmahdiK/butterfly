import InfoBar from "../InfoBar";
import SearchBar from "../SearchBar";
import "./style.scss";

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

const Header = (props: HeaderProps) => {
  const { onSearch } = props;
  return (
    <header>
      <InfoBar />
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;
