import "./style.scss";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

export default function SearchBar(props: SearchBarProps) {
  const { onSearch } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input type="search" placeholder="Rechercher..." onChange={handleChange} />
  );
}
