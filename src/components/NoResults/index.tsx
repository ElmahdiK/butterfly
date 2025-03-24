import "./style.scss";

type NoResultsProps = {
  searchText?: string;
};

export default function NoResults(props: NoResultsProps) {
  const { searchText } = props;
  return (
    <div className="div-no-results">
      <p>
        Aucun résultat trouvé pour " <span>{searchText}</span> "
      </p>
      <img src="/butterfly/img/noresults.jpg" />
    </div>
  );
}
