import React from 'react'

export const Pagination = ({pagination, currentPage, changePage}) => <>
    <h2>Pagination</h2>
      <div className='pagination'>
        {pagination.map((page, index) => (
          <div
            key={index}
            className={`pagination-item${currentPage === page ? " active" : ""}`}
            onClick={() => changePage(page)}
          >
            {page}
          </div>
        ))}
      </div>
</>