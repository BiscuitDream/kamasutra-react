import React, {useEffect, useState} from 'react';
import styles from './Pagination.module.css';
import cn from 'classnames';

type PropsType = {
  totalItemsCount: number,
  pageSize: number,
  currentPage: number,
  onPageChanged: (pageNumber: number) => void,
  portionSize?: number
};

const Pagination: React.FC<PropsType> = ({totalItemsCount, pageSize,
                                      currentPage, onPageChanged,
                                      portionSize = 10}) => {

  const pagesCount = Math.ceil(totalItemsCount / pageSize);

  const [portionNumber, setPortionNumber] = useState(1);
  useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage]);

  const portionsCount = Math.ceil(pagesCount / portionSize);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  const pageNumbers: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers
    .filter((num) => (leftPortionPageNumber <= num && num <= rightPortionPageNumber))
    .map((num) => {
      // return <li className={currentPage === num ? styles.selectedPage : undefined}
      //            onClick={() => onPageChanged(num)}>{num}</li>
      return <li className={cn({[styles.selectedPage]: currentPage === num})}
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
