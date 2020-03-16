import React, { useState } from 'react'

function GifSearch (props){

    const [search, useSearch] = useState("")

    const handleOnChange = (e) => {
        useSearch(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        props.handleSearch(e.target.search.value)
    }

    return (
        <form onSubmit={(e)=>handleOnSubmit(e)}>
            <input name= "search" type="text" value={search} onChange={(e)=>handleOnChange(e)}></input>
            <br></br>
            <input type="submit" value="Search Gif"></input>
        </form> 
    )
}

export default GifSearch