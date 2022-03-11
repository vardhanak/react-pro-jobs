import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import JobComponent from './JobComponent'
import SearchComponent from './SearchComponent'
import Paginations from './Paginations'


export default function HomeComponent() {
    

    const [jobs, setJobs] = useState([])

    const [serachValue , setSearchValue] = useState({title:"",place:""}) 

    const [currentPage , setCurrentPage] = useState(1)
    
    const [jobPerPage] = useState(10)
    
    useEffect(() => {
        axios.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json")
            .then(res => {
                setJobs(res.data)
            })
            .catch(error => console.log(error))
    },[])

    let setSearch =(e)=>{
        const{name,value} = e.target

        setSearchValue(prevSearch=>{
            return{
                ...prevSearch,
                [name]:value
            }
        })
    }

    //get current posts 
    const indexOfLastJob = currentPage * jobPerPage
    const indexOfFirstJob = indexOfLastJob - jobPerPage
    const currentJob = jobs.slice(indexOfFirstJob , indexOfLastJob)

    //Change page 

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
    return (
        <div>
            <div className="header">Pro Jobs</div>
            <SearchComponent setSearch = {setSearch}/>
            <Paginations jobsPerPage={jobPerPage} totalJobs={jobs.length} paginate={paginate} />
            <JobComponent jobs={currentJob} search = {{...serachValue}} />
        </div>
    )
}