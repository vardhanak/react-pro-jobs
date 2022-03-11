import React from 'react'

export default function Paginations({jobsPerPage, totalJobs, paginate}) {
    const pageNumbers = []

    for (let i=1; i<=Math.ceil(totalJobs/jobsPerPage);i++)
    {
        pageNumbers.push(i)
        console.log(pageNumbers);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number=>(
                    <li key={number} className="page-item">
                        <a onClick={()=>paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}