import React, {useState} from 'react';
import styles from './Pagination.module.css';

const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);

  const portionsCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  const pageNumbers = [];
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers
    .filter((num) => (leftPortionPageNumber <= num && num <= rightPortionPageNumber))
    .map((num) => {
      return <li className={currentPage === num ? styles.selectedPage : undefined}
                 onClick={() => onPageChanged(num)}>{num}</li>
    });

  return (
    <div className={styles.pagination}>
      {portionNumber > 1 ?
        <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button> :
        null}
      <ul className={styles.paginationList}>
        {pages}
      </ul>
      {portionNumber < portionsCount ?
        <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button> :
        null}
    </div>
  );
};

export default Pagination;
