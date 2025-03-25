import "./style.scss";

type NbResultsProps = {
  nbResults: number;
};

export default function NbResults(props: NbResultsProps) {
  const { nbResults } = props;
  const textResult = nbResults > 1 ? "résultats" : "résultat";
  return <p id="p-nb-results"><span>{nbResults}</span> {textResult}</p>;
}
