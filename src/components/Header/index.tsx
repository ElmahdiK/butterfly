import InfoBar from "../InfoBar";
import SearchBar from "../SearchBar";
import "./style.scss";

type HeaderProps = {
  onSearch: (searchTerm: string) => void;
};

export default function Header(props: HeaderProps) {
  const { onSearch } = props;

  return (
    <header>
      <InfoBar />
      <SearchBar onSearch={onSearch} />
    </header>
  );
}
