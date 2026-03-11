import leftArrow from "../../../assets/icons/left-pagin-arrow.svg";
import rightArrow from "../../../assets/icons/right-pagin-arrow.svg";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <div className="button" onClick={() => onPageChange(currentPage - 1)}>
        <img src={leftArrow} alt="left" />
      </div>

      <div className="pages">
        {pages.map((page) => (
          <div
            key={page}
            className={page === currentPage ? "page active" : "page"}
            onClick={() => onPageChange(page)}
          >
            {page}
          </div>
        ))}
      </div>

      <div className="button" onClick={() => onPageChange(currentPage + 1)}>
        <img src={rightArrow} alt="right" />
      </div>
    </div>
  );
}

export default Pagination;
