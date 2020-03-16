import React, { useState } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'








function GifListContainer() {
    const [gifs, useGifs] = useState([])
    

    function handleSearch(term) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`).then(resp=>resp.json()).then(content=> useGifs(content.data))
    }


    

    return (
        <div>
            <GifSearch handleSearch={(term) => handleSearch(term)}/>
            <GifList gifs={gifs}/>
        </div>
        )
}

export default GifListContainer