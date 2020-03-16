import React, { useState } from 'react'

function GifList(props) {

    return props.gifs.map(gif=>
        <img key={gif.id} src={gif.images.original.url}/>
        )
}

export default GifList