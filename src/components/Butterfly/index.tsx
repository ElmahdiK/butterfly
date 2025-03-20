import "./style.scss";

interface ButterflyProps {
  name: string;
  img: string;
  audio: number;
}
const Butterfly = (props: ButterflyProps) => {
  const { name, img, audio } = props;

  const handleClick = () => {
    const audi = new Audio(`./mp3/${audio}.mp3`);
    audi.play();
  };

  return (
    <div className="div-butterfly">
      <img src={`/img/${img}`} alt={name} />
      <p>{name}</p>
      <button onClick={handleClick}>Click to listen</button>
    </div>
  );
};

export default Butterfly;
