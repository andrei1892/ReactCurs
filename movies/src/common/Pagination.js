import React from 'react'

const Pagination = props => {
    const { crtPage , maxItemsOnPage , itemsCount , onPageChange } = props;
    const numOfPages  = Math.ceil( itemsCount / maxItemsOnPage )
    const pages = new Array(numOfPages).fill(null) 

    return(
          <nav>
                <ul className="pagination">
                    { pages.map( (page, index) => 
                        <li key={index} 
                        className= { page === crtPage+1 ? "page-item active" : "page-item" }>
                        <a className="page-link"  
                        onClick={ () => onPageChange(index+1) }>{index + 1}</a>   
                        </li>
                    )}
                </ul>
          </nav>
        )
}
export default Pagination;