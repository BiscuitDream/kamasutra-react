import React from 'react';
import styles from './Pagination.module.css';

const Pagination = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const portionSize = 10;
  const portionsCount = Math.ceil(pagesCount / portionSize);
  let leftPortionPageNumber = (props.portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = props.portionNumber * portionSize;

  const pageNumbers = [];
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers
    .filter((num) => (leftPortionPageNumber <= num && num <= rightPortionPageNumber))
    .map((num) => {
      return <li className={props.currentPage === num ? styles.selectedPage : undefined}
                 onClick={() => props.onPageChanged(num)}>{num}</li>
    });

  return (
    <div className={styles.pagination}>
      {props.portionNumber > 1 ?
        <button onClick={() => props.setPortionNumber(props.portionNumber - 1)}>Prev</button> :
        null}
      <ul className={styles.paginationList}>
        {pages}
      </ul>
      {props.portionNumber < portionsCount ?
        <button onClick={() => props.setPortionNumber(props.portionNumber + 1)}>Next</button> :
        null}
    </div>
  );
};

export default Pagination;
