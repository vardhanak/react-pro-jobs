import React from 'react'



export default function SearchComponent(props) {
    return (
        <div className="input">
            <label>Description <br/>
            <input type="text" name = "title" onChange={props.setSearch} placeholder="Role"/>
            </label>
            <label>Location <br/>
            <input style={{marginLeft:'5px'}} type="text" name= "place" onChange={props.setSearch} placeholder="Place"/>
            </label>
        </div>
    )
}