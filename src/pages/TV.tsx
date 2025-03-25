import "../assets/styles/tv.scss";

type TVProps = {
  youtubeID: string;
};

export default function TV(props: TVProps) {
  const { youtubeID } = props;

  return (
    <div id="div-tv">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${youtubeID}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
