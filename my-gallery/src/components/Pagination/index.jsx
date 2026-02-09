import React, { useState, useEffect } from "react";

export const Pagination = ({ totalPages, currentPage, changeCurrentPage }) => {
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    const tempPagination = [];
    for (let i = 0; i < totalPages; i++) {
      tempPagination.push(i + 1);
    }
    setPagination(tempPagination)
  }, [totalPages]);

  return (
    <div className='pagination'>
      {pagination.map((page) => (
        <div
          key={page}
          className={currentPage === page ? "currentPage" : undefined}
          onClick={() => changeCurrentPage(page)}
          style={{ cursor: "pointer" }}
        >
          {page}
        </div>
      ))}
    </div>
  );
};
