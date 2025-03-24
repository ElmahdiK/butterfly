import { Link } from "react-router-dom";
import "./style.scss";

type ButterflyProps = {
  name: string;
  img: string;
};

export default function Butterfly(props: ButterflyProps) {
  const { name, img } = props;

  // const handleClick = () => {
  //   const sound = new Audio(`./mp3/${audio}.mp3`);
  //   sound.play();
  // };

  return (
    <div className="div-butterfly">
      <Link to={`/Butterfly?name=${name}`}>
        <img src={`/butterfly/img/butterflies/${img}`} alt={name} />
        <p>{name}</p>
        {/* <button onClick={handleClick}>à propos</button> */}
      </Link>
    </div>
  );
}
