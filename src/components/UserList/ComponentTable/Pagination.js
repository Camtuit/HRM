import React, { useEffect, useState } from 'react';

function Pagination(props) {
  const { userData, currentPage, newsPerPage, lastPage, onChagnePage } = props;
  const [currentPages, setCurrentPage] = useState('');
  const chosePage = (numberPage) => {
    // setCurrentPage(Number(event.target.id));
    console.log(numberPage);
    onChagnePage(numberPage);
  };

  useEffect(() => {}, [currentPages]);

  const pageNumbers = [];

  for (let i = 1; i <= lastPage; i += 1) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li className="page-item" key={number}>
        <button
          id={number}
          className="page-link"
          onClick={() => chosePage(number)}
        >
          {number}
        </button>
      </li>
    );
  });
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end" id="page-numbers">
        <li class="page-item">
          <a className="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        {renderPageNumbers}
        <li class="page-item">
          <a class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;
