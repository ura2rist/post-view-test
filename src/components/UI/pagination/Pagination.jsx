import React from "react";
import { getPageArray } from '../../utils/pages';
import MyButton from "../button/MyButton";

function Pagination({ totalPages, page, changePage }) {
  let pagesArray = getPageArray(totalPages);
  return (
    <div className='page-wrap'>
      { pagesArray.map(p =>
          <MyButton 
            onClick={ () => changePage(p) }
            key={ p } 
            style={{ marginBottom: '5px' }} 
            className={ page === p && 'page_active' }
          >{ p }</MyButton>
      ) }
    </div>
  );
}

export default Pagination;