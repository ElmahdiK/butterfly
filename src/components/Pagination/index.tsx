import "./style.scss";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

type PaginationProps = {
  currentPage: number;
  nbPages: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination(props: PaginationProps) {
  const { currentPage, nbPages, setCurrentPage } = props;

  const handleClickNext = () => {
    setCurrentPage(currentPage < nbPages ? currentPage + 1 : nbPages);
  };

  const handleClickPrev = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  };

  return (
    <div id="div-pagination">
      <button onClick={handleClickPrev}>
        <GrLinkPrevious />
      </button>
      <p>
        {currentPage}/{nbPages}
      </p>
      <button onClick={handleClickNext}>
        <GrLinkNext />
      </button>
    </div>
  );
}
