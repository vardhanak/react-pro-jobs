import React from 'react'

export default function JobComponent(props) {
    console.log(props);

    let filterComponent = props.jobs

    if (props.search.title || props.search.place) {
        if(props.search.title)
        {
            filterComponent = props.jobs.filter(val=>{
            }).filter(val => {
                return (val.location.toLowerCase().indexOf(props.search.place.toLowerCase()) !== -1)
                })
        }
        else if (props.search.place) {
            filterComponent = props.jobs.filter(val=>{
                return (val.location.toLowerCase().indexOf(props.search.place.toLowerCase()) !== -1)
            })
        }
    }
    let showDetails = () => {
        let details = document.getElementById('description')
        if (details.style.display === 'none') {
            details.style.display = "block"
        }
        else {
            details.style.display = "none"
        }
    }
    function removeTags(str) {
        if (str) {
            const link = str.match(/href=.*?>/)
            if (link) {
                return link[0].match(/".*?"/)[0].slice(1, link[0].match(/".*?"/)[0].length - 1)
            }
        }
    }
    let renderJobs=()=>{
        
        const jobs = filterComponent.map(job=>{
            const date = new Date(job.created_at) 
            return(
            <>
            <div className="inner-job">
                <div className="container">
                    <div className="left-container">
                        <div className="top">
                            <p>{job.title} </p> 
                            <p>-</p>
                            <p>{job.company}</p>
                        </div>
                        {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
                        <div className="labels">
                            <p>{job.type}</p>
                            <p>{job.location}</p>
                        </div>
                        <a href={removeTags(job.how_to_apply)}>Click here for the application form</a>
                        <button onClick={showDetails}>View Details</button>
                        <div id="description">
                        <div style={{padding:"10px"}} dangerouslySetInnerHTML={{ __html: job.description }}></div>
                        </div>
                    </div>
                    <div className="right-container">
                        <img src={job.company_logo} alt="" srcset="" />
                    </div>
                </div>
            </div>
            </>
            
        
        )
     })
        return jobs

    }

    return (
        <div className="job-container">
           {renderJobs()}
        </div>
    )
}