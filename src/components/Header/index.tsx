import InfoBar from "../InfoBar";
import SearchBar from "../SearchBar";
import "./style.scss";

interface HeaderProps {
  // title: string;
  onSearch: (searchTerm: string) => void;
}

const Header = (props: HeaderProps) => {
  const { onSearch } = props;
  return (
    <>
      <header>
        {/* <a href="./">{title}</a> */}
        <SearchBar onSearch={onSearch} />
      </header>
      <InfoBar />
    </>
  );
};

export default Header;
