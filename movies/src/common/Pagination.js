import React from 'react'

const Pagination = props => {
    const { crtPage , maxItems , pageSize , onPageChange } = props;
    const pages = [1,2]  
    return(
          <nav>
                <ul className="pagination">
                    { pages.map(page => 
                        <li key={page} 
                        className="page-item">
                        <a className="page-link"  
                        onClick={ () => onPageChange }>{crtPage}</a>   
                        </li>
                    )}
                </ul>
          </nav>
        )
}
export default Pagination;