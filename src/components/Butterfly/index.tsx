import "./style.scss";

interface ButterflyProps {
  name: string;
  img: string;
}
const Butterfly = (props: ButterflyProps) => {
  const { name, img } = props;

  // const handleClick = () => {
  //   const sound = new Audio(`./mp3/${audio}.mp3`);
  //   sound.play();
  // };

  return (
    <div className="div-butterfly">
      <img src={`/butterfly/img/butterflies/${img}`} alt={name} />
      <p>{name}</p>
      {/* <button onClick={handleClick}>à propos</button> */}
    </div>
  );
};

export default Butterfly;
