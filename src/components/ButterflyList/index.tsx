import Butterfly from "../Butterfly";
import "./style.scss";

type ButterflyListProps = {
  filteredButterflies: {
    name: string;
    image: string;
  }[];
};

export default function ButterflyList(props: ButterflyListProps) {
  const { filteredButterflies } = props;
  return (
    <main id="main-home">
      {filteredButterflies.map((butterfly, index) => (
        <Butterfly key={index} name={butterfly.name} img={butterfly.image} />
      ))}
    </main>
  );
}
