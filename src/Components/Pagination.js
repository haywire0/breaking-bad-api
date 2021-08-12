import React from 'react'
import {Link} from 'react-router-dom'

function Pagination({charPerPage, totalCharacters, paginate, currentPage}) {
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(totalCharacters/ charPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number => (
                    
                    <li key={number} className={`page-item ${currentPage === number? 'active':''}`}>
                        <Link onClick={()=>paginate(number)} to={`/page/${number}`} className="page-link">
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
